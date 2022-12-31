from django.urls import path
from . import views

urlpatterns =[
    #path('', views.index),
    path('', views.buscador, name="buscador"),
    path('resultados', views.resultados, name="resultados")
]