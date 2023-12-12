from curses.ascii import US
from dataclasses import field
from pyexpat import model
from rest_framework import serializers
from .models import Propiedad
from usuario.serializers import UserSerializer


class PropiedadSerializers(serializers.Serializer):
    user = UserSerializer()
    class Meta:
        model = Propiedad
        fields = ['nombre','descricion','extra_info','ubicacion','numero_banos','numero_habitaciones','invitados_max','capacidad','tarifa','user']
