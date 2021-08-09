package com.fitnessapp.fitt.workoutTypes.allWorkout;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/all")
public class AllWorkoutController {
    @Autowired
    private AllWorkoutRepository allWorkoutRepository;

    @GetMapping
    public List<AllWorkout> list() {
        return allWorkoutRepository.findAll();
    }
}
