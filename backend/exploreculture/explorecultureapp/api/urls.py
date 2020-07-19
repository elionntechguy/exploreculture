from django.urls import path
from .views import ArticleListView, ArticleDetailView, CulturalPhotographyListView, CulturalPhotographyDetailView
from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
    path('', CulturalPhotographyListView.as_view()),
    path('<pk>', CulturalPhotographyDetailView.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)