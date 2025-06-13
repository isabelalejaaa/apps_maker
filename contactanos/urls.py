from django.urls import path
from .views import RegistroCreateAPIView

app_name = 'contactanos'

urlpatterns = [
    path('registro/', RegistroCreateAPIView.as_view(), name='registro-create'),
]
