package com.springrest.springrest.util;

import java.util.ArrayList;
import java.util.List;

import com.springrest.springrest.dto.IncidentCSV;
import com.springrest.springrest.entities.Incidents;

public class IncidentConverter {
    public static List<Incidents> convertToIncidents(List<IncidentCSV> incidentCSVs) {
        List<Incidents> incidents = new ArrayList<>();
        for (IncidentCSV incidentCSV : incidentCSVs) {
            Incidents incident = new Incidents();
            // Set attributes in the Incidents entity from the IncidentCSV DTO
            incident.setName(incidentCSV.getName());
            incident.setContact(incidentCSV.getContact());
            incident.setIncidentType(incidentCSV.getIncidentType());
            incident.setDescription(incidentCSV.getDescription());
            incident.setAadharNumber(incidentCSV.getAadharNumber());
            incident.setInsuranceNumber(incidentCSV.getInsuranceNumber());
            incident.setAddress(incidentCSV.getAddress());
            incident.setPurchaseID(incidentCSV.getPurchaseID());
            incidents.add(incident);
        }
        return incidents;
    }
}
