package com.project.sustainability.service.supplierservice;

import org.springframework.stereotype.Service;


public interface GoalsService {
    void deleteGoalsByFields(String supplierId, String pillarName, String year);
}

