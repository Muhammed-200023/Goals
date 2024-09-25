package com.project.sustainability.controller;

import com.project.sustainability.model.SupplierModel;
import com.project.sustainability.repository.SupplierRepo;
import com.project.sustainability.service.SupplierService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api")
public class SupplierController {

    @Autowired
    private SupplierService supplierService;
    @Autowired
    SupplierRepo supplierRepo;

    @GetMapping("/{supplierId}/{year}")
    public ResponseEntity<List<SupplierModel>> getSupplierModelsBySupplierIdAndYear(
            @PathVariable String supplierId, @PathVariable String year) {
        log.info("Request received to get SupplierModel with ID: {} and Year: {}", supplierId, year);
        List<SupplierModel> supplierModels = supplierService.getSuppliersBySupplierIdAndYear(supplierId, year);
        return new ResponseEntity<>(supplierModels, HttpStatus.OK);
    }
}
