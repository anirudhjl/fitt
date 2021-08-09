package com.fitnessapp.fitt.workoutTypes.mobility;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MobilityRepository extends JpaRepository<Mobility, Long> {
}


