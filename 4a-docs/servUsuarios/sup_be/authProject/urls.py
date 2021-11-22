"""authProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView)
from prodApp.views.productosView import ProductListAPIView
from authApp import views
from prodApp import views as viewsProduct


urlpatterns = [
    path('login/', TokenObtainPairView.as_view()),
    #path('refresh/', TokenRefreshView.as_view()),
    #path('verifyToken/', views.VerifyTokenView.as_view()),
    path('user/', views.UserCreateView.as_view()),
    path('user/all', views.UserCreateView.user_api_view),
    path('user/all/<str:username>', views.UserCreateView.user_detail_view),
    path('user/<int:pk>/', views.UserDetailView.as_view()),
    #path('producto/<int:pk>',viewsProduct.product_detail_view),
    #path('producto/',viewsProduct.product_api_view),
    #path('empleado/<int:pk>',viewsProduct.empleado_detail_view),
    #path('empleado/',viewsProduct.empleado_api_view),
    #path('cliente/',viewsProduct.cliente_api_view),
    #path('cliente/<int:pk>',viewsProduct.cliente_detail_view),
    
]
