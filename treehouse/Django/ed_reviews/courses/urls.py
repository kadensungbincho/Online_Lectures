from django.urls import path, include

from . import views 

app_name = 'courses'

urlpatterns = [
    path('', views.ListCreateCourse.as_view(), name='course_list'),
    path('<int:pk>/', 
        views.RetrieveUpdateDestroyCourse.as_view(), 
        name='course_detail'),  
    path('<int:course_pk>/reviews/', 
        views.ListCreateReview.as_view(),
        name='review_list'),
    path('<int:course_pk>/reviews/<int:pk>/',
        views.RetrieveUpdateDestroyReview.as_view(),
        name='review_detail'),
]
