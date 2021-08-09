package com.fitnessapp.fitt.meals.breakfast;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/breakfast")
public class BreakfastController {

    @Autowired
    private BreakfastRepository breakfastRepository;

    @GetMapping
    public List<Breakfast> list() {
        return breakfastRepository.findAll();
    }

}
