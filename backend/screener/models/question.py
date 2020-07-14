from django.db import models


class Question(models.Model):
    """Question"""

    class Meta:
        ordering = ['section_id', 'id']

    domain = models.ForeignKey(
        'Domain',
        related_name='questions',
        on_delete=models.CASCADE
    )

    section = models.ForeignKey(
        'Section',
        related_name='questions',
        on_delete=models.CASCADE
    )

    title = models.CharField(
        max_length=100,
        help_text='Answer title'
    )

    def __str__(self):
        return self.title
