package com.project.sustainability.service.supplierservice;

import com.project.sustainability.model.goals.SupplierGoal;
import org.springframework.stereotype.Service;

@Service
public interface GoalsService {

   public SupplierGoal addOrUpdateGoalData(SupplierGoal supplierGoal);

   public SupplierGoal getGoalData(String supplierId);
}
