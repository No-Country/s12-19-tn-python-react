from django.urls import path
from .views import index,index_propiedad, create_propiedad, index_usuario, login_usuario, create_usuario, create_reserva

urlpatterns = [
    path('', index, name='index'),
    path('propiedad/', index_propiedad, name='index_propiedad'),
    path('propiedad/create', create_propiedad, name='create_propiedad'),
    path('usuario/', index_usuario, name='index_usuario'),
    path('usuario/login', login_usuario, name='login_usuario'),
    path('usuario/create', create_usuario, name='create_usuario'),
    path('reserva/create', create_reserva, name='create_reserva'),

   
]