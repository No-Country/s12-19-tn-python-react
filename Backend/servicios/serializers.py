from dataclasses import field
from rest_framework import serializers
from .models import Servicio
from propiedad.serializers import PropiedadSerializers
class ServicioSerializers(serializers.Serializer):

    propiedad = PropiedadSerializers()
    class Meta:
        model = Servicio
        fields = ['nombre','descripcion','propiedad']
