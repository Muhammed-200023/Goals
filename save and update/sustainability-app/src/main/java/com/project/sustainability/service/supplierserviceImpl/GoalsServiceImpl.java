package com.project.sustainability.service.supplierserviceImpl;

import com.project.sustainability.exception.SupplierNotFoundException;
import com.project.sustainability.model.goals.SupplierGoal;
import com.project.sustainability.repository.goalsRepo.SupplierRepo;
import com.project.sustainability.service.supplierservice.GoalsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
public class GoalsServiceImpl implements GoalsService {

    @Autowired
    SupplierRepo supplierRepo;

    /**
     * Adds or updates supplier goal data based on supplierId, year, and pillarName.
     * @param supplierGoal the supplier model to add or update
     * @return the added or updated supplier model.
     */
    @Override
    public SupplierGoal addOrUpdateGoalData(SupplierGoal supplierGoal) {
        log.info("Entering addOrUpdateGoalData with supplierModel: {}", supplierGoal);

        // Check if a record exists for the combination of supplierId, year, and pillarName
        Optional<SupplierGoal> existingGoal = supplierRepo.findBySupplierIdAndYearAndPillarName(
                supplierGoal.getSupplierId(),
                supplierGoal.getYear(),
                supplierGoal.getPillarName());

        SupplierGoal savedModel;

        if (existingGoal.isPresent()) {
            // Update the existing record
            SupplierGoal goalToUpdate = existingGoal.get();
            goalToUpdate.setGoalAnswers(supplierGoal.getGoalAnswers());
            goalToUpdate.setUpdatedDt(supplierGoal.getUpdatedDt());
            goalToUpdate.setUpdatedUser(supplierGoal.getUpdatedUser());
            savedModel = supplierRepo.save(goalToUpdate);
            log.info("Exiting addOrUpdateGoalData with updated supplierModel: {}", savedModel);
        } else {
            // Add a new record
            savedModel = supplierRepo.save(supplierGoal);
            log.info("Exiting addOrUpdateGoalData with newly added supplierModel: {}", savedModel);
        }

        return savedModel;
    }

    @Override
    public SupplierGoal getGoalData(String supplierId) {
        SupplierGoal supplier = supplierRepo.findBySupplierId(supplierId);
        if (supplier == null) {
            log.warn("Supplier with ID {} not found", supplierId);
            throw new SupplierNotFoundException("Supplier with ID " + supplierId + " not found");
        }
        return supplier;
    }
}
