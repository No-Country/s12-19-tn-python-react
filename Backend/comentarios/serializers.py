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
        fields = ['calificacion','comentario','fecha_creacion','user','propiedad']