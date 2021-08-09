package com.fitnessapp.fitt.workoutTypes.yoga;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface YogaRepository extends JpaRepository<Yoga, Long> {
}


