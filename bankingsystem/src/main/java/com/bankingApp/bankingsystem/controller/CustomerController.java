/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.bankingApp.bankingsystem.controller;

import com.bankingApp.bankingsystem.model.Customer;
import com.bankingApp.bankingsystem.service.CustomerServices;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Asus
 */
@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {
    @Autowired
    private CustomerServices customerservices;
    
    @PostMapping("/add")
    public String add(@RequestBody Customer customer){
        customerservices.saveCustomer(customer);
        return "Customer Added";
    }
    
    @GetMapping("/getAll")
    public List<Customer>getAllStudents(){
        return customerservices.getAllCustomers();
    }
}
