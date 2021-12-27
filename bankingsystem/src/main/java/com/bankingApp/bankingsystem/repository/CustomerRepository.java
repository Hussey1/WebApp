/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.bankingApp.bankingsystem.repository;

import com.bankingApp.bankingsystem.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Asus
 */
public interface CustomerRepository extends JpaRepository <Customer,Integer> {
    
}
