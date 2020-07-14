from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


class Answer(models.Model):
    """Answer"""

    class Meta:
        pass

    section = models.ForeignKey(
        'Section',
        related_name='answers',
        on_delete=models.CASCADE
    )

    value = models.PositiveSmallIntegerField(
        validators=[
            MinValueValidator(0),
            MaxValueValidator(4)
        ],
        help_text='Answer value'
    )

    title = models.CharField(
        max_length=100,
        help_text='Answer title'
    )

    def __str__(self):
        return self.title
