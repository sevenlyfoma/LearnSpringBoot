package com.example.datademo;

import java.util.List;

import org.springframework.data.repository.CrudRepository; 

public interface CustomerRepository extends CrudRepository<Customer, Long> {

    List<Customer> findByLastName(String lastName);

    Customer findById(long id);
}