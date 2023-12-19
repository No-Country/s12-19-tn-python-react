from tkinter.tix import Tree
from urllib import request
from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Reserva
from .serializers import ReservaSerializer

@api_view(['GET'])
def list_reservas(resquest):

    reservas = Reserva.objects.all()
    serializer = ReservaSerializer(reservas, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def detail_reserva(request,id):

    try:
        reserva = Reserva.objects.get(id=id)
    except Reserva.DoesNotExist:
        return Reserva(status=status.HTTP_404_NOT_FOUND)
    
    serializer = ReservaSerializer(reserva)
    return Response(serializer.data)

@api_view(['POST'])
def create_reserva(request):
    
    serializer = ReservaSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def update_reserva(request, id):

    try:
        reserva = Reserva.objects.get(id=id)
    except Reserva.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = ReservaSerializer(reserva, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_reserva(request, id):

    try:
        reserva = Reserva.objects.get(id=id)
    except Reserva.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    reserva.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
