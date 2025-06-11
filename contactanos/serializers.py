from rest_framework import serializers
from .models import Registro
import re

class RegistroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registro
        fields = ['id', 'nombre', 'numero', 'correo']

    def validate_numero(self, value):
        solo_digitos = re.sub(r'\D', '', value)  # elimina todo lo que no sea número
        if len(solo_digitos) != 9:
            raise serializers.ValidationError("El número debe contener exactamente 9 dígitos.")
        return value

    def validate_correo(self, value):
        if not re.match(r'^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$', value):
            raise serializers.ValidationError("El correo debe ser válido.")
        return value
