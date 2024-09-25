package com.project.sustainability.service;

import com.project.sustainability.exception.SupplierNotFoundException;
import com.project.sustainability.model.SupplierModel;
import com.project.sustainability.repository.SupplierRepo;
import com.project.sustainability.serviceImpl.SupplierServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class SupplierServiceImplTest {

    @Mock
    private SupplierRepo supplierRepo;

    @InjectMocks
    private SupplierServiceImpl supplierServiceImpl;

    @BeforeEach
    public void setUp() {
      
    }

    @Test
    public void testGetSupplierById_SupplierExists() {
        // Given
        String supplierId = "12345";
        List<SupplierModel> supplierModels = new ArrayList<>();
        SupplierModel supplierModel = new SupplierModel();
        supplierModel.setSupplierId(supplierId);
        supplierModels.add(supplierModel);

        when(supplierRepo.findBySupplierId(supplierId)).thenReturn(supplierModels);

        // When
        List<SupplierModel> result = supplierServiceImpl.getSupplierById(supplierId);

        // Then
        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals(supplierId, result.get(0).getSupplierId());
        verify(supplierRepo, times(1)).findBySupplierId(supplierId);
    }

    @Test
    public void testGetSupplierById_SupplierDoesNotExist() {
        // Given
        String supplierId = "12345";
        when(supplierRepo.findBySupplierId(supplierId)).thenReturn(null);

        // When & Then
        SupplierNotFoundException exception = assertThrows(SupplierNotFoundException.class, () -> {
            supplierServiceImpl.getSupplierById(supplierId);
        });

        assertEquals(supplierId, exception.getMessage());
        verify(supplierRepo, times(1)).findBySupplierId(supplierId);
    }

    @Test
    public void testGetSupplierById_EmptyList() {
        // Given
        String supplierId = "12345";
        when(supplierRepo.findBySupplierId(supplierId)).thenReturn(new ArrayList<>());

        // When
        List<SupplierModel> result = supplierServiceImpl.getSupplierById(supplierId);

        // Then
        assertNotNull(result);
        assertTrue(result.isEmpty());
        verify(supplierRepo, times(1)).findBySupplierId(supplierId);
    }
}

