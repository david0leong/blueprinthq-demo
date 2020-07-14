from collections import defaultdict
from .models import Assessment, Domain


def evaluate_screener(screener, answers):
    """
    Evalutes answers to the screener assessment and returns scores by domain
    """

    question_domain_ids = {}
    for section in screener.sections.all():
        for question in section.questions.all():
            question_domain_ids[question.id] = question.domain_id

    domain_scores = defaultdict(lambda: 0)
    for answer in answers:
        question_domain_id = question_domain_ids.get(answer['question_id'])

        if question_domain_id:
            domain_scores[question_domain_id] += answer['value']

    return domain_scores


def get_next_assessments(domain_scores):
    """
    Get next level assessments for domain scores given
    """

    domains = Domain.objects \
        .select_related('next_assessment') \
        .filter(id__in=domain_scores.keys())

    next_assessments = map(
        lambda domain: domain.next_assessment,
        filter(
            lambda domain: domain.threshold <= domain_scores.get(domain.id),
            domains
        )
    )

    return list(filter(None, next_assessments))
