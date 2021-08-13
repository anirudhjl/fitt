package com.fitnessapp.fitt.security;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {

    @GetMapping("/login")
    public String login() {
        return "You are authenticated";
    }

}


