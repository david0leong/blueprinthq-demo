from django.urls import path

from .views import ScreenerIndexView, ScreenerEvaluateView

app_name = 'screener'

urlpatterns = [
    path('', ScreenerIndexView.as_view(), name='index'),
    path('evaluate/', ScreenerEvaluateView.as_view(), name='evaluate')
]
