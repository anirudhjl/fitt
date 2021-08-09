package com.fitnessapp.fitt.workoutPlans.bodyWeight;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BodyWeightRepository extends JpaRepository<BodyWeight, Long> {
}


