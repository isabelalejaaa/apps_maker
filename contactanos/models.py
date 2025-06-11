from django.db import models

class Registro(models.Model):
    nombre = models.CharField(max_length=100)
    numero = models.CharField(max_length=20)
    correo = models.EmailField()

    def __str__(self):
        return self.nombre
