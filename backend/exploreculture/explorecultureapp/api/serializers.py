from rest_framework import serializers
from explorecultureapp.models import Article, CulturalPhotography

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('title', 'content')

class CulturalPhotographySerializer(serializers.ModelSerializer):
    class Meta:
        model = CulturalPhotography
        fields = ('title', 'content', 'imgposter', 'culturalphotographyimg')