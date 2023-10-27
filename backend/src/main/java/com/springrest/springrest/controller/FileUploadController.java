package com.springrest.springrest.controller;

import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;
import com.opencsv.exceptions.CsvValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import com.springrest.springrest.dto.IncidentCSV;
import com.springrest.springrest.entities.Incidents;
import com.springrest.springrest.services.IncidentService;
import com.springrest.springrest.util.IncidentConverter;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class FileUploadController {

    @Autowired
    private IncidentService incidentService;

    @PostMapping("/uploadIncidents")
    public ResponseEntity<String> uploadIncidents(@RequestParam("file") MultipartFile file) {
        try {
            List<IncidentCSV> incidentsCSV = parseCSV(file.getInputStream());
            List<Incidents> incidentsToSave = IncidentConverter.convertToIncidents(incidentsCSV);
            incidentService.addBulkIncidents(incidentsToSave);

            return ResponseEntity.ok("Incidents uploaded successfully");
        } catch (IOException | CsvValidationException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error uploading incidents");
        }
    }

    private List<IncidentCSV> parseCSV(InputStream inputStream) throws IOException, CsvValidationException {
        List<IncidentCSV> incidents = new ArrayList<>();
        try (CSVReader csvReader = new CSVReaderBuilder(new InputStreamReader(inputStream))
                .withSkipLines(1) // Skip the header row
                .build()) {
            String[] nextRecord;
            while ((nextRecord = csvReader.readNext()) != null) {
                IncidentCSV incident = new IncidentCSV();
                // Populate incident attributes from CSV columns
                incident.setName(nextRecord[0]);
                incident.setContact(Long.parseLong(nextRecord[1]));
                incident.setIncidentType(nextRecord[2]);
                incident.setDescription(nextRecord[3]);
                incident.setAadharNumber(Long.parseLong(nextRecord[4]));
                incident.setInsuranceNumber(Long.parseLong(nextRecord[5]));
                incident.setAddress(nextRecord[6]);
                incident.setPurchaseID(Long.parseLong(nextRecord[7]));

                incidents.add(incident);
            }
        }
        return incidents;
    }
}
