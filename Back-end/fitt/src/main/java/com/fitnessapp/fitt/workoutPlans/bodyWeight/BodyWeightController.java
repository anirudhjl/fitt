package com.fitnessapp.fitt.workoutPlans.bodyWeight;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/bodyweight")
public class BodyWeightController {
    @Autowired
    private BodyWeightRepository bodyWeightRepository;

    @GetMapping
    public List<BodyWeight> list() {
        return bodyWeightRepository.findAll();
    }
}
