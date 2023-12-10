from rest_framework import serializers
from .models import Perfil

class PerfilSerializer(serializers.ModelSerializer):

    user = serializers.SerializerMethodField()

    class Meta:
        model = Perfil
        fields = ['user','telefono','direccion','document_id']

    def create(self, validated_data):
        
        return super().create(validated_data)

    def get_user(self, obj):
        # Personalize a forma como os dados do usuário são representados
        user = obj.user
        return {
            'username': user.username,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
        }
