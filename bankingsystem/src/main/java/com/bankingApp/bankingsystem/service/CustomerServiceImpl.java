/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.bankingApp.bankingsystem.service;

import com.bankingApp.bankingsystem.model.Customer;
import com.bankingApp.bankingsystem.repository.CustomerRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Asus
 */
@Service
public class CustomerServiceImpl implements CustomerServices {
    @Autowired
    private CustomerRepository customerRepository;
    
    @Override
    public Customer saveCustomer(Customer customer){
        return customerRepository.save(customer);
    }
    
    @Override
    public List<Customer> getAllCustomers(){
        return customerRepository.findAll();
    }
}
