from dataclasses import field
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Perfil

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username','email','first_name','last_name']

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class PerfilSerializer(serializers.ModelSerializer):

    user = UserSerializer()

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

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['user'] = UserSerializer(instance.user).data
        return representation
