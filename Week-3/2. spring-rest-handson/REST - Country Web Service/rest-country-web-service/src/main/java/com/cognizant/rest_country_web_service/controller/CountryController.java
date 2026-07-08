package com.cognizant.rest_country_web_service.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.rest_country_web_service.model.Country;
import com.cognizant.rest_country_web_service.service.CountryService;

@RestController
public class CountryController {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(CountryController.class);

    @Autowired
    private CountryService countryService;

    // Hands-on 1
    @RequestMapping("/country")
    public Country getCountryIndia() {

        LOGGER.info("Start - getCountryIndia()");

        ClassPathXmlApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        Country country = context.getBean("country", Country.class);

        LOGGER.info("End - getCountryIndia()");

        return country;
    }

    // Hands-on 2
    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {

        LOGGER.info("Start - getCountry()");

        Country country = countryService.getCountry(code);

        LOGGER.info("End - getCountry()");

        return country;
    }

}