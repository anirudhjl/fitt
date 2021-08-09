package com.fitnessapp.fitt.workoutTypes.mobility;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;

import javax.persistence.*;

@Entity
@Table
@Getter
@JsonIgnoreProperties({"hibernateInitializer", "handler"})
public class Mobility {
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


