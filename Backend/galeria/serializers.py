from dataclasses import field
from rest_framework import serializers
from .models import Galeria
from propiedad.serializers import PropiedadSerializers


class GaleriaSerializers(serializers.ModelSerializer):
    class Meta:
        model = Galeria
        fields = ['imagen','descripcion','propiedad_id']