from django.urls import path
from .views import list_servicios, detail_servicio, create_servicio,update_servicio, delete_servicio

urlpatterns = [
    path('servicios/', list_servicios, name='list_servicios'),
    path('servicios/<int:id>/', detail_servicio, name='detail_servicio'),
    path('servicios/create/', create_servicio, name='create_servicio'),
    path('servicios/update/<int:id>/', update_servicio, name='update_servicio'),
    path('servicios/delete/<int:id>/', delete_servicio, name='delete_servicio'),
]