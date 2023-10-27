package com.springrest.springrest.services;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.Dao.IncidentDao;
import com.springrest.springrest.entities.Incidents;

@Service
public class IncidentServiceImpl implements IncidentService {
	
	@Autowired
	private IncidentDao incidentDao;
	
//	List<Incidents> list;		 
	public IncidentServiceImpl() {
//		list = new ArrayList<>();
//		list.add(new Incidents(1,"Darn","5733465987","This cource contains basics of Java"));
//		list.add(new Incidents(1,"Darn","5733465987","This cource contains basics of Java"));
//		list.add(new Incidents(1,"Darn","5733465987","This cource contains basics of Java"));
		
	}


	@Override
	public List<Incidents> getIncidents() {
		return incidentDao.findAllIncidents();
	}


	@Override
	public Incidents addIncident(Incidents incident) {
		return incidentDao.addIncident(incident);
	}
	
	@Override
    public void addBulkIncidents(List<Incidents> incidents) {
        incidentDao.saveAll(incidents);
    }


}