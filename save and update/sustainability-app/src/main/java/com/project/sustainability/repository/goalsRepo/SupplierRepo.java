package com.project.sustainability.repository.goalsRepo;

import com.project.sustainability.model.goals.SupplierGoal;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.List;

@Repository
public interface SupplierRepo extends MongoRepository<SupplierGoal, Integer> {

    SupplierGoal findBySupplierId(String supplierId);

    // New method to find by supplierId, year, and pillarName
    Optional<SupplierGoal> findBySupplierIdAndYearAndPillarName(String supplierId, String year, String pillarName);
}
