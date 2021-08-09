package com.fitnessapp.fitt.workoutTypes.endurance;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface EnduranceRepository extends JpaRepository<Endurance, Long> {
}
