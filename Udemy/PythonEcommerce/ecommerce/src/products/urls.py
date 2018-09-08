from django.conf.urls import url

from .views import (
    ProductDetailSlugView,
    #ProductFeaturedListView,
    #ProductFeaturedDetailView,
    ProductListView, 
    #product_list_view, 
    #ProductDetailView, 
    #product_detail_view
)


urlpatterns = [
    url(r'^$', ProductListView.as_view()),
    url(r'^(?P<slug>[\w-]+)$', ProductDetailSlugView.as_view()),
]
