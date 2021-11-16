from prodApp.models.productos import Producto
from rest_framework import  serializers


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields=['id','nombre','precio','imagen','cantidad']


