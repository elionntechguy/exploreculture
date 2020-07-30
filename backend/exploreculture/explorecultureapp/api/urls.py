from django.urls import path
from .views import CulturalPhotographyViewSet, View360ViewSet, EightDAudioViewSet, ARViewSet, TraditionalFoodViewSet
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'culturalphotography', CulturalPhotographyViewSet, basename='culturalphotography'),
router.register(r'view360', View360ViewSet, basename='view360'),
router.register(r'eightdaudio', EightDAudioViewSet, basename='eightdaudio'),
router.register(r'ar', ARViewSet, basename='ar'),
router.register(r'traditionalfood', TraditionalFoodViewSet, basename='traditionalfood')
urlpatterns = router.urls + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# urlpatterns = [
#     path('culturalphotography', CulturalPhotographyListView.as_view()),
#     path('culturalphotography/<int:pk>/', CulturalPhotographyDetailView.as_view()),
#     path('view360', View360ListView.as_view()),
#     path('view360/<int:pk>/', View360DetailView.as_view()),
# ] 