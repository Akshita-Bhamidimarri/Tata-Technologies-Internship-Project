package com.springrest.springrest.Dao;

import com.springrest.springrest.entities.Incidents;

import java.util.List;

public interface IncidentDaoCustom {
    List<Incidents> findAllIncidents();
    
    Incidents addIncident(Incidents incident);
}
