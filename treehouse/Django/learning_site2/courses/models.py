from django.urls import reverse
from django.db import models

from django.contrib.auth.models import User
import math

STATUS_CHOICES = (
    ('i', 'In Progress'),
    ('r', 'In Review'),
    ('p', 'Published'),
)

class Course(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=255)
    description = models.TextField()
    teacher = models.ForeignKey(User, on_delete=models.CASCADE)
    subject = models.CharField(default='', max_length=100)
    is_live = models.BooleanField(default=False)
    status = models.CharField(max_length=1, choices=STATUS_CHOICES, default='i')
    
    def __str__(self):
        return self.title
    
    def time_to_complete(self):
        from courses.templatetags.course_extras import time_estimate
        return '{} min.'.format(time_estimate(len(self.description.split())))


class Step(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    order = models.IntegerField(default=0)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    
    class Meta:
        abstract = True # not a real field, should be super filed
        ordering = ['order',]
    
    def __str__(self):
        return self.title


class Text(Step):
    content = models.TextField(blank=True, default='')

    def get_absolute_url(self):
        return reverse('courses:course_text', kwargs={
                 'course_pk': self.course_id,
                 'step_pk': self.id
                 })

   
class Quiz(Step):
    total_questions = models.IntegerField(default=4)
    times_taken = models.IntegerField(default=0, editable=False)

    class Meta:
        verbose_name_plural = "Quizzes"

    def get_absolute_url(self):
        return reverse('courses:course_quiz', kwargs={
         'course_pk': self.course_id,
         'step_pk': self.id
         })

    def number_correct_needed(self):
        return '{}/{}'.format(math.ceil(self.total_questions * 0.7), self.total_questions)


class Question(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    order = models.IntegerField(default=0)
    prompt = models.TextField()

    class Meta:
        ordering = ['order',]

    def get_absolute_url(self):
        return self.quiz.get_absolute_url()

    def __str__(self):
        return self.prompt


class MultipleChoiceQuestion(Question):
    shuffle_answers = models.BooleanField(default=False)


class TrueFalseQuestion(Question):
    pass


class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    order = models.IntegerField(default=0)
    text = models.CharField(max_length=255)
    correct = models.BooleanField(default=False)

    class Meta:
        ordering = ['order',]

    def __str__(self):
        return self.text
