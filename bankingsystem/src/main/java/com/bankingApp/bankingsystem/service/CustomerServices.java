/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.bankingApp.bankingsystem.service;

import com.bankingApp.bankingsystem.model.Customer;
import java.util.List;

/**
 *
 * @author Asus
 */
public interface CustomerServices {
    public Customer saveCustomer(Customer customer);
    public List<Customer> getAllCustomers();
}
