from django.shortcuts import render
# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Comentario
from .serializers import ComentarioSerializers, ComentarioSerializers,ComentarioUpdateSerializers
from drf_yasg.utils import swagger_auto_schema

@swagger_auto_schema(method='get', operation_description="Listar todos los comentarios")
@api_view(['GET'])
def list_comentarios(request):
    comentarios = Comentario.objects.all()
    serializer = ComentarioSerializers(comentarios, many=True)
    return Response(serializer.data)

@swagger_auto_schema(method='get', operation_description="Detalles de un comentario")
@api_view(['GET'])
def detail_comentario(request, id):
    try:
        comentario = Comentario.objects.get(id=id)
    except Comentario.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = ComentarioSerializers(comentario)
    return Response(serializer.data)


@swagger_auto_schema(
    method='post',
    request_body=ComentarioSerializers,  
    operation_description="Crear un nuevo comentario"
)
@api_view(['POST'])
def create_comentario(request):
    serializer = ComentarioSerializers(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@swagger_auto_schema(
    method='put',
    request_body=ComentarioUpdateSerializers, 
    operation_description="Actualizar un comentario existente",
    responses={200: ComentarioUpdateSerializers}
)
@api_view(['PUT'])
def update_comentario(request, id):
    try:
        comentario = Comentario.objects.get(id=id)
    except Comentario.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = ComentarioSerializers(comentario, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_comentario(request, id):
    try:
        comentario = Comentario.objects.get(id=id)
    except Comentario.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    comentario.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)