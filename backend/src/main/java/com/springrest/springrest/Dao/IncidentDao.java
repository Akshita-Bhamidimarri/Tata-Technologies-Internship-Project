package com.springrest.springrest.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springrest.springrest.entities.Incidents;

public interface IncidentDao extends JpaRepository<Incidents,Long> , IncidentDaoCustom {

}
