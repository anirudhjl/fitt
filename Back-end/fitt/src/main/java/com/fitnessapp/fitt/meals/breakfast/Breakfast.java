package com.fitnessapp.fitt.meals.breakfast;

import lombok.Getter;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table
@Getter
@JsonIgnoreProperties({"hibernateInitializer", "handler"})
public class Breakfast {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private Integer carbs;
    private Integer proteins;
    private Integer fat;
    private Integer calories;
    @Column(name = "imageUrl")
    private String imageUrl;

}
