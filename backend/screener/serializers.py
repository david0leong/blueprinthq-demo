from rest_framework import serializers

from .models import Assessment, Section, Question, Answer


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ('title', 'value')


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ('id', 'title')


class SectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = ('id', 'type', 'title', 'answers', 'questions')

    answers = AnswerSerializer(many=True, read_only=True)
    questions = QuestionSerializer(many=True, read_only=True)


class AssessmentContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assessment
        fields = ('sections', 'display_name')

    sections = SectionSerializer(many=True, read_only=True)


class AssessmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assessment
        fields = ('id', 'name', 'full_name', 'disorder', 'content')

    content = AssessmentContentSerializer(source='*', read_only=True)
