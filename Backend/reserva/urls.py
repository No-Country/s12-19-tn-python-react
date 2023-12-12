from django.urls import path
from .views import list_reservas, detail_reserva, create_reserva, update_reserva, delete_reserva

urlpatterns = [
    path('reservas/', list_reservas, name='list_reservas'),
    path('reservas/<int:id>/', detail_reserva, name='detail_reserva'),
    path('reservas/create/', create_reserva, name='create_reserva'),
    path('reservas/update/<int:id>/', update_reserva, name='update_reserva'),
    path('reservas/delete/<int:id>/', delete_reserva, name='delete_reserva'),
]