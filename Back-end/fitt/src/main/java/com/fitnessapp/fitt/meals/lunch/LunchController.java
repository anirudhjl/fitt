package com.fitnessapp.fitt.meals.lunch;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/lunch")
public class LunchController {
    @Autowired
    private LunchRepository lunchRepository;

    @GetMapping
    public List<Lunch> list() {
        return lunchRepository.findAll();
    }
}
