package com.springrest.springrest.controller;

import java.io.ByteArrayInputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


import com.springrest.springrest.entities.Incidents;
import com.springrest.springrest.services.ExcelExportService;
import com.springrest.springrest.services.IncidentService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")


public class MyController {
	
	@Autowired
	private IncidentService incidentService;
	@Autowired
    private ExcelExportService excelExportService;

	
	@GetMapping("/home")
	public String home() {
		return "this is home";
	}
	
	//get the incident
	@GetMapping("/ViewIncidents")
	public List<Incidents> getIncidents() {
		
		return this.incidentService.getIncidents();
	}
	
	//post the incident
	@PostMapping("/CreateIncident")
	public Incidents addIncident(@RequestBody Incidents incident) {
		return this.incidentService.addIncident(incident);
		
	}

	@GetMapping("/ExportToExcel")
	public ResponseEntity<InputStreamResource> exportToExcel() {
	    try {
	        List<Incidents> incidents = incidentService.getIncidents();
	        ByteArrayInputStream excelData = excelExportService.exportToExcel(incidents);

	        HttpHeaders headers = new HttpHeaders();
	        headers.add("Content-Disposition", "attachment; filename=incidents.xlsx");

	        return ResponseEntity
	                .ok()
	                .headers(headers)
	                .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
	                .body(new InputStreamResource(excelData));
	    } catch (Exception e) {
	        // Handle and log any exceptions here
	        e.printStackTrace();
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	    }
	}
	
}


    

