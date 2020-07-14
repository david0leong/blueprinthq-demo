from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Assessment
from .serializers import AssessmentSerializer
from .utils import evaluate_screener, get_next_assessments


class ScreenerIndexView(APIView):
    """
    Return screener assessment
    """

    def get(self, request, format=None):
        """
        Return screener assessment
        """

        screener = get_object_or_404(Assessment.objects.screeners())
        serializer = AssessmentSerializer(screener)

        return Response(serializer.data)


class ScreenerEvaluateView(APIView):
    """
    Accepts screener answer
    """

    def post(self, request, format=None):
        """
        Accepts screener answer
        """

        screener = get_object_or_404(Assessment.objects.screeners())
        domain_scores = evaluate_screener(
            screener,
            request.data['answers']
        )
        next_assessments = get_next_assessments(domain_scores)
        assessment_names = list(
            set(
                map(
                    lambda assessment: assessment.name,
                    next_assessments
                )
            )
        )

        return Response({'results': assessment_names})
