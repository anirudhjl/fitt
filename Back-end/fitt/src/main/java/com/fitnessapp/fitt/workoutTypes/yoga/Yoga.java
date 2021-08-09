package com.fitnessapp.fitt.workoutTypes.yoga;

import lombok.Getter;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table
@Getter
@JsonIgnoreProperties({"hibernateInitializer", "handler"})
public class Yoga {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private Integer sets;
    private Integer duration;
    @Column(name = "imageUrl")
    private String imageUrl;
}


