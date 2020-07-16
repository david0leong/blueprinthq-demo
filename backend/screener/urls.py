from django.urls import path

from .views import ScreenerIndexView, ScreenerEvaluateView

app_name = 'screener'

urlpatterns = [
    path('screener/', ScreenerIndexView.as_view(), name='screener-index'),
    path('screener/evaluate/', ScreenerEvaluateView.as_view(),
         name='screener-evaluate')
]
