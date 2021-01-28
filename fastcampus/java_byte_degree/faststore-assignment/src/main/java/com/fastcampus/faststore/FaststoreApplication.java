package com.fastcampus.faststore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication(scanBasePackageClasses = FaststoreApplication.class)
@EnableConfigurationProperties
public class FaststoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(FaststoreApplication.class, args);
	}

}
