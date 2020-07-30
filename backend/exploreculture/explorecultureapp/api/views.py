from rest_framework import viewsets
from explorecultureapp.models import Article, CulturalPhotography, View360, EightDAudio, AR, TraditionalFood
from .serializers import ArticleSerializer, CulturalPhotographySerializer, View360Serializer, EightDAudioSerializer, ARSerializer, TraditionalFoodSerializer

# class ArticleListView(ListAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer

# class ArticleDetailView(RetrieveAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer

class CulturalPhotographyViewSet(viewsets.ModelViewSet):
    queryset = CulturalPhotography.objects.all()
    serializer_class = CulturalPhotographySerializer

# class CulturalPhotographyDetailView(RetrieveAPIView):
#     queryset = CulturalPhotography.objects.all()
#     serializer_class = CulturalPhotographySerializer

class View360ViewSet(viewsets.ModelViewSet):
    queryset = View360.objects.all()
    serializer_class = View360Serializer

# class View360DetailView(RetrieveAPIView):
#     queryset = View360.objects.all()
#     serializer_class = View360Serializer

class EightDAudioViewSet(viewsets.ModelViewSet):
    queryset = EightDAudio.objects.all()
    serializer_class = EightDAudioSerializer

class ARViewSet(viewsets.ModelViewSet):
    queryset = AR.objects.all()
    serializer_class = ARSerializer

class TraditionalFoodViewSet(viewsets.ModelViewSet):
    queryset = TraditionalFood.objects.all()
    serializer_class = TraditionalFoodSerializer