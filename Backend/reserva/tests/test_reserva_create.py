import email
from urllib import response
from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from datetime import date

from reserva.models import Reserva
from propiedad.models import Propiedad
from django.contrib.auth.models import User


class ReservaCreateTestCase(TestCase):
    
    def setUp(self):
        self.client = APIClient()
        self.user_reserva = User.objects.create(
            id=1,
            username = 'carlos',
            email = 'carlos@teste.com'
        )
        self.user_propiedad = User.objects.create(
            id=2,
            username = 'german',
            email = 'german@teste.com'
        )
        self.propiedad = Propiedad.objects.create(
            id=1,
            nombre = 'Hotel Boniot',
            descricion = 'Descrição da propriedade',
            extra_info = 'Informações adicionais',
            ubicacion = 'Localização da propriedade',
            numero_banos = 2,
            numero_habitaciones = 3,
            invitados_max = 5,
            capacidad = 8,
            tarifa = '150.0',
            user_id = 2
            )

    def test_create_reserva(self):
        url = reverse('create_reserva')
        data = {
            'fecha_inicio': '2023-01-01',
            'fecha_fin': '2023-01-05',
            'user_id': '1',
            'propiedad_id': '1',
            'costo_total': 100.0
        }

        response = self.client.post(url, data, format='json')

        if response.status_code != status.HTTP_201_CREATED:
            print(response.content.decode('utf-8'))

        self.assertEqual(response.status_code,status.HTTP_201_CREATED)
        self.assertEqual(Reserva.objects.count(),1)
