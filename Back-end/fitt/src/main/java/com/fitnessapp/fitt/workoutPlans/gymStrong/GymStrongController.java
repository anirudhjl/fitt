package com.fitnessapp.fitt.workoutPlans.gymStrong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/gymstrong")
public class GymStrongController {
    @Autowired
    private GymStrongRepository gymStrongRepository;

    @GetMapping
    public List<GymStrong> list() {
        return gymStrongRepository.findAll();
    }
}
