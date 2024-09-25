package com.project.sustainability.model.goals;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.ArrayList;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Document(collection = "supplierGoal")
public class SupplierGoal {
    @Id
    private String _id;
    private String supplierId;
    private String year;
    private String pillarName;
    private ArrayList<GoalAnswers> goalAnswers;
    private String updatedDt;
    private String updatedUser;

    
}
