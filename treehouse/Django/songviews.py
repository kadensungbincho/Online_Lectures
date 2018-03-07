from django.shortcuts import render, get_object_or_404

from .models import Song, Performer


def song_list(request):
    songs = Song.objects.all()
    return render(request, 'songs/song_list.html', {'songs': songs})


def song_detail(request, pk):
    song = get_object_or_404(Song, pk=pk)
    return render(request, 'songs/song_detail.html', {'song': song})
    
    
def performer_detail(request, performer_pk, song_pk):
    performer = get_object_or_404(Performer, performer_id=performer_pk, pk=song_pk)
    return render(request, 'songs/performer_detail.html', {'performer': performer})
    
