package com.fitnessapp.fitt.meals.dinner;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DinnerRepository extends JpaRepository<Dinner, Long> {
}
