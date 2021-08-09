package com.fitnessapp.fitt.workoutPlans.gymStrong;

import lombok.Getter;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table
@Getter
@JsonIgnoreProperties({"hibernateInitializer", "handler"})
public class GymStrong {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private Integer reps;
    private Integer sets;
    private Integer duration;
    @Column(name = "imageUrl")
    private String imageUrl;
}
