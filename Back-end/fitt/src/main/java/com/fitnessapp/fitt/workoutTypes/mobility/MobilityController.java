package com.fitnessapp.fitt.workoutTypes.mobility;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/mobility")
public class MobilityController {
    @Autowired
    private MobilityRepository mobilityRepository;

    @GetMapping
    public List<Mobility> list() {
        return mobilityRepository.findAll();
    }
}
