package com.cognizant.jwt_authentication_service.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
public class AppUserDetailsService {

    @Bean
    public InMemoryUserDetailsManager userDetailsService(PasswordConfig passwordConfig) {

        UserDetails user = User.builder()
                .username("user")
                .password(passwordConfig.passwordEncoder().encode("pwd"))
                .roles("USER")
                .build();

        UserDetails admin = User.builder()
                .username("admin")
                .password(passwordConfig.passwordEncoder().encode("pwd"))
                .roles("ADMIN")
                .build();

        return new InMemoryUserDetailsManager(user, admin);
    }
}