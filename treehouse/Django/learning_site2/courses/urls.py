from django.urls import path, re_path

from . import views

app_name = 'courses'

urlpatterns = [
    path('', views.course_list, name='course_list'),
    path('<int:course_pk>/t<int:step_pk>/', views.text_detail,
        name='course_text'),
    path('<int:course_pk>/q<int:step_pk>/', views.quiz_detail,
        name='course_quiz'),
    path('<int:course_pk>/create_quiz/', views.quiz_create, name='create_quiz'),
    path('<int:course_pk>/edit_quiz/<int:quiz_pk>/', views.quiz_edit, name='edit_quiz'),
    re_path(r'(?P<quiz_pk>\d+)/create_question/(?P<question_type>mc|tf)/$', 
        views.create_question, name='create_question'),
    path('<int:quiz_pk>/edit_question/<int:question_pk>/', views.question_edit, name='edit_question'),
    path('<question_pk>/create_answer/', views.answer_form, name='create_answer'),
    path('by/<str:teacher>/', views.courses_by_teacher, name='by_teacher'),
    path('search/', views.search, name='search'),
    path('<int:course_pk>', views.course_detail, name='course_detail'),
]
