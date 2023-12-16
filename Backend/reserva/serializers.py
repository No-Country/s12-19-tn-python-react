from dataclasses import field
from importlib.metadata import MetadataPathFinder
from pyexpat import model
from rest_framework import serializers
from .models import Reserva
from usuario.serializers import PerfilSerializer, UserSerializer
from propiedad.serializers import PropiedadSerializers


class ReservaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reserva
        fields = ['fecha_inicio','fecha_fin','costo_total', 'user_id','propiedad_id']



