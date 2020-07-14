from django.db import models
from django.core.validators import MinValueValidator


class Domain(models.Model):
    """Assessment domain"""

    class Meta:
        pass

    name = models.CharField(
        max_length=100,
        help_text='Domain name'
    )

    threshold = models.PositiveSmallIntegerField(
        blank=True,
        null=True,
        validators=[
            MinValueValidator(0),
        ],
        help_text='Threshold score for level-2 assessment'
    )

    next_assessment = models.ForeignKey(
        'Assessment',
        null=True,
        blank=True,
        related_name='threshold_domains',
        on_delete=models.SET_NULL
    )

    def __str__(self):
        return self.name
