package com.oreilly.restclient.services;

import com.oreilly.restclient.entities.Site;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ExtendWith(SpringExtension.class)
public class GeocoderServiceTest {
    private Logger logger = LoggerFactory.getLogger(GeocoderService.class);

    @Autowired
    private GeocoderService service;

    @Test
    void getLatLngForGoogleHeadquarters() {
        Site google = service.getLatLng("1600 Ampitheatre Parkway", "Mountain View", "CA");
        logger.info(google.toString());
        assertEquals(37.42, google.getLatitude(), 0.01);
        assertEquals(-122.08, google.getLongitude(), 0.01);
    }
}
