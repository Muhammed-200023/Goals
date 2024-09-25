package com.project.sustainability.controller.suppliercontroller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.project.sustainability.model.goals.SupplierGoal;
import com.project.sustainability.service.supplierserviceImpl.GoalsServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequestMapping("/api")
public class GoalsController {

    @Autowired
    GoalsServiceImpl goalsService;

    /**
     * API to either add or update goal data based on supplierId, year, and pillarName.
     */
    @PostMapping("/addOrUpdateGoalData")
    public ResponseEntity<String> addOrUpdateGoalData(@RequestBody SupplierGoal supplierGoal) throws JsonProcessingException {
        log.info("Received request to add or update goal data: {}", supplierGoal);
        SupplierGoal result = goalsService.addOrUpdateGoalData(supplierGoal);
        log.info("Goal data processed successfully for supplierId: {}", result.getSupplierId());
        return ResponseEntity.ok("Goal data added or updated successfully.");
    }
}
