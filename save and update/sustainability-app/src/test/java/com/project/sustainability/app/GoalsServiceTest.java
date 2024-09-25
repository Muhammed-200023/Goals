package com.project.sustainability.app;


import com.project.sustainability.exception.SupplierNotFoundException;
import com.project.sustainability.model.goals.SupplierGoal;
import com.project.sustainability.repository.goalsRepo.SupplierRepo;
import com.project.sustainability.service.supplierserviceImpl.GoalsServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class GoalsServiceImplTest {

    @Mock
    private SupplierRepo supplierRepo;

    @InjectMocks
    private GoalsServiceImpl goalsService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testAddGoalData() {
        // Arrange
        SupplierGoal supplierGoal = new SupplierGoal();
        when(supplierRepo.save(any(SupplierGoal.class))).thenReturn(supplierGoal);

        // Act
        SupplierGoal result = goalsService.addGoalData(supplierGoal);

        // Assert
        assertNotNull(result);
        verify(supplierRepo, times(1)).save(supplierGoal);
    }

    @Test
    void testGetGoalData_SupplierFound() {
        // Arrange
        SupplierGoal supplierGoal = new SupplierGoal();
        supplierGoal.setSupplierID(123);
        when(supplierRepo.findBySupplierID(123)).thenReturn(supplierGoal);

        // Act
        SupplierGoal result = goalsService.getGoalData(123);

        // Assert
        assertNotNull(result);
        assertEquals(123, result.getSupplierID());
        verify(supplierRepo, times(1)).findBySupplierID(123);
    }

    @Test
    void testGetGoalData_SupplierNotFound() {
        // Arrange
        when(supplierRepo.findBySupplierID(123)).thenReturn(null);

        // Act & Assert
        SupplierNotFoundException exception = assertThrows(SupplierNotFoundException.class, () -> {
            goalsService.getGoalData(123);
        });

        assertEquals("Supplier with ID 123 not found", exception.getMessage());
        verify(supplierRepo, times(1)).findBySupplierID(123);
    }

    @Test
    void testUpdateGoalData_Success() {
        // Arrange
        SupplierGoal existingSupplier = new SupplierGoal();
        existingSupplier.setSupplierID(123);
        existingSupplier.setYear(2023);
        existingSupplier.setGoalAnswers(new ArrayList<>());

        SupplierGoal updatedSupplier = new SupplierGoal();
        updatedSupplier.setYear(2024);
        updatedSupplier.setGoalAnswers(new ArrayList<>());

        when(supplierRepo.findBySupplierID(123)).thenReturn(existingSupplier);
        when(supplierRepo.save(existingSupplier)).thenReturn(existingSupplier);

        // Act
        String result = goalsService.updateGoalData(123, updatedSupplier);

        // Assert
        assertEquals("Updated Successfully", result);
        assertEquals(2024, existingSupplier.getYear());
        verify(supplierRepo, times(1)).findBySupplierID(123);
        verify(supplierRepo, times(1)).save(existingSupplier);
    }

    @Test
    void testUpdateGoalData_SupplierNotFound() {
        // Arrange
        when(supplierRepo.findBySupplierID(123)).thenReturn(null);

        // Act & Assert
        SupplierNotFoundException exception = assertThrows(SupplierNotFoundException.class, () -> {
            goalsService.updateGoalData(123, new SupplierGoal());
        });

        assertEquals("Supplier with ID 123 not found", exception.getMessage());
        verify(supplierRepo, times(1)).findBySupplierID(123);
    }
}
