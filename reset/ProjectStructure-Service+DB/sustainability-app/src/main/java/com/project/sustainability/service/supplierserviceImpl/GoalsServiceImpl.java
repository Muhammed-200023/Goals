package com.project.sustainability.service.supplierserviceImpl;
import com.project.sustainability.controller.suppliercontroller.GoalResetController;
import com.project.sustainability.exception.SupplierNotFoundException;
import com.project.sustainability.model.Goal.SupplierGoal;
import com.project.sustainability.service.supplierservice.GoalsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

@Component

public class GoalsServiceImpl implements GoalsService {
    @Autowired
    private MongoTemplate mongoTemplate;
    Logger logger = LoggerFactory.getLogger(GoalResetController.class);

    @Override
    public void deleteGoalsByFields(String supplierId, String pillarName, String year) {
        logger.info("Inside deleteGoalsByFields method");

        // Construct the query with additional 'year' criteria
        Query query = new Query();
        query.addCriteria(Criteria.where("supplierId").is(supplierId)
                .and("pillarName").is(pillarName)
                .and("year").is(year));

        try {
            long deletedCount = mongoTemplate.remove(query, SupplierGoal.class).getDeletedCount();
            if (deletedCount == 0) {
                logger.warn("No documents found matching the criteria: supplierId={}, pillarName={}, year={}", supplierId, pillarName, year);
                throw new SupplierNotFoundException("No documents found matching the criteria");
            } else {
                logger.info("Successfully deleted {} documents matching the criteria: supplierId={}, pillarName={}, year={}", deletedCount, supplierId, pillarName, year);
            }
        } catch (Exception e) {
            logger.error("Error occurred while deleting documents: supplierId={}, pillarName={}, year={}", supplierId, pillarName, year, e);
            throw new RuntimeException("Error occurred while deleting documents: " + e.getMessage());
        }
    }
}
