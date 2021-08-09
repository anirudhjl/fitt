package com.fitnessapp.fitt.workoutTypes.allWorkout;

import lombok.Getter;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table
@Getter
@JsonIgnoreProperties({"hibernateInitializer", "handler"})
public class AllWorkout {
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
