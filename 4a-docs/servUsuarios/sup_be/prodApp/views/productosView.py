from rest_framework import generics,status
from rest_framework.response import Response
from prodApp.models.productos import Producto
from prodApp.serializers.productoSerializer import ProductSerializer

class ProductListAPIView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Producto.objects.all()