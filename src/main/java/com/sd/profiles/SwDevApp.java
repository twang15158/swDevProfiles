package com.sd.profiles;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//import com.websystique.springboot.configuration.JpaConfiguration;
//@Import(JpaConfiguration.class)
@SpringBootApplication// same as @Configuration @EnableAutoConfiguration @ComponentScan
public class SwDevApp {
	public static void main(String[] args) {
		SpringApplication.run(SwDevApp.class, args);
	}
}
