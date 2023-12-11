from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Servicio
from .serializers import ServicioSerializers

@api_view(['GET'])
def list_servicios(request):
    servicios = Servicio.objects.all()
    serializer = ServicioSerializers(servicios, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def detail_servicio(request, id):
    try:
        servicio = Servicio.objects.get(id=id)
    except Servicio.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = ServicioSerializers(servicio)
    return Response(serializer.data)

@api_view(['POST'])
def create_servicio(request):
    serializer = ServicioSerializers(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def update_servicio(request, id):
    try:
        servico = Servicio.objects.get(id=id)
    except Servicio.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = ServicioSerializers(servico, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_servicio(request, id):
    try:
        servico = Servicio.objects.get(id=id)
    except Servicio.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    servico.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)