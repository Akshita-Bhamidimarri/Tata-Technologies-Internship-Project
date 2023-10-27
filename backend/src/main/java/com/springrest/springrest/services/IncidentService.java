package com.springrest.springrest.services;

import java.util.List;
import java.util.Map;

import com.springrest.springrest.entities.Incidents;

public interface IncidentService {
	public List<Incidents> getIncidents();

	public Incidents addIncident(Incidents incident);
	
	void addBulkIncidents(List<Incidents> incidents); 

	
}