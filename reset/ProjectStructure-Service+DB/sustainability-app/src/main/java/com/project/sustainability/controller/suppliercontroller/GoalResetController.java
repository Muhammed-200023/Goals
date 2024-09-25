package com.project.sustainability.controller.suppliercontroller;

import com.project.sustainability.service.supplierservice.GoalsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class GoalResetController {
    @Autowired
    private GoalsService goalsService;

    private static final Logger logger = LoggerFactory.getLogger(GoalResetController.class);

    @DeleteMapping("/supplier-goals-reset")
    public ResponseEntity<String> deleteGoals(
            @RequestParam(value = "supplierId", required = false) String supplierId,
            @RequestParam(value = "pillarName", required = false) String pillarName,
            @RequestParam(value = "year", required = false) String year) {

        logger.info("deleteGoals controller starts");

        // Check if any of the required parameters are missing
        if (supplierId == null || pillarName == null || year == null) {
            logger.warn("Missing required parameters: supplierId, pillarName, or year");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Missing required parameters: 'supplierId', 'pillarName', or 'year'");
        }

        try {
            goalsService.deleteGoalsByFields(supplierId, pillarName, year);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            logger.error("Error occurred while deleting goals", e);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (Exception e) {
            logger.error("Internal server error", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
