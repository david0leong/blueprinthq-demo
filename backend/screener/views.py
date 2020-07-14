from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Assessment
from .serializers import AssessmentSerializer, AssessmentContentSerializer

# Create your views here.


class ScreenerIndexView(APIView):
    """
    Return screener assessment
    """

    def get(self, request, format=None):
        """
        Return screener assessment
        """

        screener = get_object_or_404(
            # Assessment.objects.prefetch_related('sections'),
            Assessment,
            disorder='Cross-Cutting'
        )
        serializer = AssessmentSerializer(screener)
        # serializer = AssessmentContentSerializer(screener)

        return Response(serializer.data)


class ScreenerAnswerView(APIView):
    """
    Accepts screener answer
    """

    def post(self, request, format=None):
        """
        Accepts screener answer
        """

        return Response(status=status.HTTP_200_OK)
