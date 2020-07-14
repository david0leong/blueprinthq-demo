from django.urls import path

from .views import ScreenerIndexView, ScreenerAnswerView

app_name = 'screener'

urlpatterns = [
    path('', ScreenerIndexView.as_view(), name='index'),
    path('answer/', ScreenerAnswerView.as_view(), name='answer')
]
