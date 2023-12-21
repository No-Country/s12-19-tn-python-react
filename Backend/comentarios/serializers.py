from dataclasses import field
from rest_framework import serializers
from .models import Comentario
from usuario.serializers import UserSerializer
from propiedad.serializers import PropiedadSerializers

class ComentarioSerializers(serializers.ModelSerializer):

    class Meta:
        model = Comentario
        fields = ['calificacion','comentario','user_id','propiedad_id']


class ComentarioUpdateSerializers(serializers.ModelSerializer):
    class Meta:
        model = Comentario
        fields = ['calificacion', 'comentario']

