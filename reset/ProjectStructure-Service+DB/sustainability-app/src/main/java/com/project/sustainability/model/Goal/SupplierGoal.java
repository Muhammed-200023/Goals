package com.project.sustainability.model.Goal;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "supplierGoal")
public class SupplierGoal {

    @Id
    private String _id;
    private String supplierId;
    private String year;
    private String pillarName;
    private List<GoalAnswers> goalAnwsers;
    private Date updatedDt;
    private String updatedUser;


}

