from .models import Propiedad
from rest_framework import viewsets, permissions
from .serializers import PropiedadSerializer

class PropiedadViewSet(viewsets.ModelViewSet):
    queryset = Propiedad.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = PropiedadSerializer