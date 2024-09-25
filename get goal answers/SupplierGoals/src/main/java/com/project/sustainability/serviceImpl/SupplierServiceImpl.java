package com.project.sustainability.serviceImpl;

import com.project.sustainability.exception.SupplierNotFoundException;
import com.project.sustainability.model.SupplierModel;
import com.project.sustainability.repository.SupplierRepo;
import com.project.sustainability.service.SupplierService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class SupplierServiceImpl implements SupplierService {
    @Autowired
    private SupplierRepo supplierRepo;

    @Override
    public SupplierModel getSupplierById(String supplierId) {
        SupplierModel supplierModel = supplierRepo.findBySupplierId(supplierId);
        if (supplierModel == null) {
            log.error("SupplierModel with ID: {} not found", supplierId);
            throw new SupplierNotFoundException(supplierId);
        }
        log.info("SupplierModel with ID: {} found", supplierId);
        return supplierModel;
    }

    @Override
    public List<SupplierModel> getSuppliersBySupplierIdAndYear(String supplierId, String year) {
        log.info("Fetching SupplierModel with ID: {} and Year: {}", supplierId, year);
        List<SupplierModel> supplierModels = supplierRepo.findBySupplierIdAndYear(supplierId, year);
        if (supplierModels.isEmpty()) {
            log.error("No SupplierModel found with ID: {} and Year: {}", supplierId, year);
            throw new SupplierNotFoundException("Supplier ID: " + supplierId + " and Year: " + year);
        }
        log.info("Found {} records for SupplierModel with ID: {} and Year: {}", supplierModels.size(), supplierId, year);
        return supplierModels;
    }
}
