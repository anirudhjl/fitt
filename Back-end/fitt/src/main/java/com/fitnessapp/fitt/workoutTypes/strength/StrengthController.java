package com.fitnessapp.fitt.workoutTypes.strength;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/strength")
public class StrengthController {
    @Autowired
    private StrengthRepository strengthRepository;

    @GetMapping
    public List<Strength> list() {
        return strengthRepository.findAll();
    }
}
