package com.fitnessapp.fitt.meals.dinner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/dinner")
@CrossOrigin(origins = "http://localhost:4200")
public class DinnerController {

    @Autowired
    private DinnerRepository dinnerRepository;

    @GetMapping
    public List<Dinner> list() {
        return dinnerRepository.findAll();
    }

}
