from django.urls import path

from . import views

app_name = "communities"

urlpatterns = [
    path('', views.AllCommunities.as_view(), name="list"),
    path('new/', views.CreateCommunity.as_view(), name="create"),
    path(
        'posts/in/<slug>/', views.SingleCommunity.as_view(),
        name="single"
    ),
    path(
        'join/<slug>/',
        views.JoinCommunity.as_view(),
        name="join"
    ),
    path(
        'leave/<slug>/',
        views.LeaveCommunity.as_view(),
        name="leave"
    ),
    path(
        'change_status/<slug>/<int:user_id>/<status',
        views.ChangeStatus.as_view(),
        name="change_status"
    ),
]
