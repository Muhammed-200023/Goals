package com.project.sustainability.repository;

import com.project.sustainability.model.SupplierModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SupplierRepo extends MongoRepository<SupplierModel, String> {
    SupplierModel findBySupplierId(String supplierId);

    // Custom method to find by supplierId and year
    List<SupplierModel> findBySupplierIdAndYear(String supplierId, String year);
}
