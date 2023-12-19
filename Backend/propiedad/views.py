from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Propiedad
from .serializers import PropiedadSerializers

@api_view(['GET'])
def list_propiedad(request):
    propiedades = Propiedad.objects.all()
    serializer = PropiedadSerializers(propiedades, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def detail_propiedad(request, id):
    try:
        propiedad = Propiedad.objects.get(id=id)
    except Propiedad.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = PropiedadSerializers(propiedad)
    return Response(serializer.data)

@api_view(['POST'])
def create_propiedad(request):
    serializer = PropiedadSerializers(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def update_propiedad(request, id):
    try:
        propiedad = Propiedad.objects.get(id=id)
    except Propiedad.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = PropiedadSerializers(propiedad, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_propiedad(request, id):
    try:
        propiedad = Propiedad.objects.get(id=id)
    except Propiedad.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    propiedad.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)