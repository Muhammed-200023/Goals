package com.project.sustainability.repository;

import com.project.sustainability.model.Goal.SupplierGoal;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SupplierGoalRepository extends MongoRepository<SupplierGoal, String> {

}
