package com.fitnessapp.fitt.workoutTypes.allWorkout;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AllWorkoutRepository extends JpaRepository<AllWorkout, Long> {
}
