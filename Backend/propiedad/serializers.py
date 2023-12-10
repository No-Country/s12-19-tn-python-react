from rest_framework import serializers
from .models import Propiedad

class PropiedadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Propiedad
        fields = ('nombre','descripcion','extra_info','','ubicacion','numero_banos','numero_habitaciones','invitados_max','capacidad','tarifa')
        #read_only_fields = ('',)
