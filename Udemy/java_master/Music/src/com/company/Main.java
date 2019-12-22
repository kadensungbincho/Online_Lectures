package com.company;

import com.company.model.Artist;
import com.company.model.Datasource;
import com.company.model.SongArtist;

import java.util.List;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Datasource datasource = new Datasource();
        if(!datasource.open()) {
            System.out.println("Can't open datasource");
            return;
        }

        List<Artist> artists = datasource.queryArtist(Datasource.ORDER_BY_DESC);
        if(artists == null) {
            System.out.println("No artists");
            return;
        }

        for(Artist artist : artists) {
            System.out.println("ID = " + artist.getId() + ", Name = " + artist.getName());
        }

        List<String> albumsForArtist =
                datasource.queryAlbumsArtist("Carole King", Datasource.ORDER_BY_DESC);

        for(String album : albumsForArtist) {
            System.out.println("Album: " + album);
        }

        List<SongArtist> songArtists = datasource.queryArtistsForSong("Heartless", Datasource.ORDER_BY_ASC);
        if(songArtists == null) {
            System.out.println("Couldn't find the artist for the song");
        }

        for(SongArtist artist: songArtists) {
            System.out.println("Artist name = " + artist.getArtistName() +
                    " Albume name = " + artist.getAlbumName() +
                    " Track " + artist.getTrack());
        }

        datasource.querySongMetadata();

        int count = datasource.getCount(Datasource.TABLE_SONGS);
        System.out.println("Number of songs is: " + count);

        datasource.createViewForSongArtists();

        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a song title: ");
        String title = scanner.nextLine();

        songArtists = datasource.querySongInfoView(title);
        if(songArtists.isEmpty()) {
            System.out.println("Could't find the artists for the song");
            return;
        }

        for(SongArtist artist: songArtists) {
            System.out.println("FROM VIEW - Artist name = " + artist.getArtistName() +
                    " Album name = " + artist.getAlbumName() +
                    " Track number = " + artist.getTrack());
        }

        datasource.insertSong("Touch of Grey", "Grateful Dead", "In The Dark", 10);
        datasource.close();
    }
}
