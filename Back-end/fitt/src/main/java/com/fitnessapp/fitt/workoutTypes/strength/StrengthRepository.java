package com.fitnessapp.fitt.workoutTypes.strength;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StrengthRepository extends JpaRepository<Strength, Long> {
}


