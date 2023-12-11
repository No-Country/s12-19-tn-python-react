from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Galeria
from .serializers import GaleriaSerializers

@api_view(['GET'])
def list_galerias(request):
    galerias = Galeria.objects.all()
    serializer = GaleriaSerializers(galerias, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def detail_galeria(request, id):
    try:
        galeria = Galeria.objects.get(id=id)
    except Galeria.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = GaleriaSerializers(galeria)
    return Response(serializer.data)

@api_view(['POST'])
def create_galeria(request):
    serializer = GaleriaSerializers(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def update_galeria(request, id):
    try:
        galeria = Galeria.objects.get(id=id)
    except Galeria.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = GaleriaSerializers(galeria, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_galeria(request, id):
    try:
        galeria = Galeria.objects.get(id=id)
    except Galeria.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    galeria.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)