from tokenize import group
from tracemalloc import get_object_traceback
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from rest_framework.decorators import action
from django.contrib.auth.models import User, Group
from django.shortcuts import get_object_or_404
from .models import Perfil
from .serializers import PerfilSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny

class PerfilViewSet(viewsets.ModelViewSet):
    queryset = Perfil.objects.all()
    serializer_class = PerfilSerializer


    def get_permissions(self):
        """
        Define as permissões com base na ação da view.
        """
        permission_classes = []
        if self.action == 'list':
            permission_classes = [IsAuthenticated]
        elif self.action == 'retrieve':
            permission_classes = [AllowAny]
        elif self.action == 'create':
            permission_classes = [AllowAny]
        

        return [permission() for permission in permission_classes]

    def create(self, request, *args, **kwargs):
        data = request.data
        user_data = data.get('user',{})
        role = data.get('role')

        user = User.objects.create(
            username= user_data.get('username'),
            email= user_data.get('email'),
            first_name= user_data.get('first_name'),
            last_name= user_data.get('last_name'),
            is_active=True,
            is_staff=False,
            is_superuser=False
        )

        user.set_password(user_data.get('password'))
        user.save()

        perfil = Perfil.objects.create(
            user=user,
            telefono=data.get('telefono'),
            direccion=data.get('direccion'),
            document_id=data.get('document_id')
        )

        # Perfil
        if role == 'Anfitrion' or role == 'Huesped':
            group, created = Group.objects.get_or_create(name=role)
            user.groups.add(group)

        serializer = self.get_serializer(perfil)
        return Response( status=status.HTTP_201_CREATED)

    def list(self, request, *args, **kwargs):
        queryset = Perfil.objects.all()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, *args, **kwargs):
        user_instance = get_object_or_404(User,id=kwargs.get('pk'))    
       
        if user_instance.is_superuser == True or user_instance.is_staff == True:
            return Response({'detail': 'Not found'},status=status.HTTP_404_NOT_FOUND)    
        perfil_instance = Perfil.objects.get(user = user_instance) 

        if perfil_instance:
            serializer = self.get_serializer(perfil_instance)

            return Response(serializer.data)
        else:
            return Response({'detail': 'Perfil not found for the given User ID.'}, status=status.HTTP_404_NOT_FOUND) 


    def update(self, request, *args, **kwargs):
        user_instance = get_object_or_404(User, id=kwargs.get('pk'))
        
        if user_instance.is_superuser or user_instance.is_staff:
            return Response(status=status.HTTP_404_NOT_FOUND)

        perfil_instance = Perfil.objects.get(user=user_instance)
        
        if perfil_instance:
            serializer = self.get_serializer(perfil_instance, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(status=status.HTTP_200_OK)
        else:
            return Response({'detail': 'Perfil not found for the given User ID.'}, status=status.HTTP_404_NOT_FOUND)


