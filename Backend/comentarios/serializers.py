from dataclasses import field
from rest_framework import serializers
from .models import Comentario
from usuario.serializers import UserSerializer
from propiedad.serializers import PropiedadSerializers

class ComentarioSerializers(serializers.Serializer):

    user = UserSerializer()
    propiedad = PropiedadSerializers()
    class Meta:
        model = Comentario
        fields = ['calificacion','comentario','user','propiedad']

class ComentarioCreateSerializers(serializers.ModelSerializer):
    class Meta:
        model = Comentario
        fields = ['user_id', 'propiedad_id', 'calificacion', 'comentario']

class ComentarioUpdateSerializers(serializers.ModelSerializer):
    class Meta:
        model = Comentario
        fields = ['calificacion', 'comentario']

