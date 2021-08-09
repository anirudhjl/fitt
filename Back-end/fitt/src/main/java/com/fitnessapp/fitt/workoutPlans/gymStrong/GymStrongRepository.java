package com.fitnessapp.fitt.workoutPlans.gymStrong;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GymStrongRepository extends JpaRepository<GymStrong, Long> {
}


