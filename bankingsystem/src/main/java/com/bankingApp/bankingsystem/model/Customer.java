/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.bankingApp.bankingsystem.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 *
 * @author Hasantha Pathirana
 */

@Entity
public class Customer {
     @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    private String bid;
    private String fname;
    private String lname;
    private String dob;
    private String phonenum;
    private String nic;
    private String gender;
    private String address;

    public Customer() {
    }

    public int getId() {
        return id;
    }

    public String getBid() {
        return bid;
    }

    public String getFname() {
        return fname;
    }

    public String getLname() {
        return lname;
    }

    public String getDob() {
        return dob;
    }

    public String getPhonenum() {
        return phonenum;
    }

    public String getNic() {
        return nic;
    }

    public String getGender() {
        return gender;
    }

    public String getAddress() {
        return address;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setBid(String bid) {
        this.bid = bid;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public void setPhonenum(String phonenum) {
        this.phonenum = phonenum;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    
    
}
