package com.project.sustainability.model.Goal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GoalAnswers {
    private String questionId;
    private List<Response> response;

}
