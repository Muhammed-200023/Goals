package com.project.sustainability.service;

import com.project.sustainability.model.SupplierModel;

import java.util.List;

public interface SupplierService {
    SupplierModel getSupplierById(String supplierId);

    // New method to fetch list of supplier models by supplierId and year
    List<SupplierModel> getSuppliersBySupplierIdAndYear(String supplierId, String year);
}
