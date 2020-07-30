from rest_framework import serializers
from explorecultureapp.models import Article, CulturalPhotography, View360, EightDAudio, AR, TraditionalFood

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('title', 'content')

class CulturalPhotographySerializer(serializers.ModelSerializer):
    class Meta:
        model = CulturalPhotography
        fields = ('id', 'title', 'content', 'imgposter', 'culturalphotographyimg')

class View360Serializer(serializers.ModelSerializer):
    class Meta:
        model = View360
        fields = ('id', 'title', 'content', 'imgposter', 'view360img', 'view360url')

class EightDAudioSerializer(serializers.ModelSerializer):
    class Meta:
        model = EightDAudio
        fields = ('id', 'title', 'content', 'songposter', 'eightdaudioimg', 'eightdaudiofile')

class ARSerializer(serializers.ModelSerializer):
    class Meta:
        model = AR
        fields = ('id', 'title', 'content', 'poster', 'arimg', 'arfile')

class TraditionalFoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = TraditionalFood
        fields = ('id', 'title', 'content', 'recipeposter', 'recipeimg')