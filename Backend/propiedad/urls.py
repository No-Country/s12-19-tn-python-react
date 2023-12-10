from rest_framework import routers
from .api import PropiedadViewSet

router = routers.DefaultRouter()

router.register('api/propiedad', PropiedadViewSet, 'propiedad')

urlpatterns = router.urls