package com.springrest.springrest.services;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import java.util.List;

import org.springframework.stereotype.Service;

import com.springrest.springrest.entities.Incidents;

@Service
public class ExcelExportServiceImpl implements ExcelExportService {
    @Override
    public ByteArrayInputStream exportToExcel(List<Incidents> incidents) throws IOException {
        try (Workbook workbook = new XSSFWorkbook()) {
			Sheet sheet = workbook.createSheet("Incidents Data");

			// Create header row
			Row header = sheet.createRow(0);
			header.createCell(0).setCellValue("ID");
			header.createCell(1).setCellValue("Name");
			header.createCell(2).setCellValue("Contact");
			header.createCell(3).setCellValue("Incident Type");
			header.createCell(4).setCellValue("Description");
			header.createCell(5).setCellValue("Aadhar Number");
			header.createCell(6).setCellValue("Insurance Number");
			header.createCell(7).setCellValue("Address");
			header.createCell(8).setCellValue("Purchase ID");

			int rowNum = 1;
			for (Incidents incident : incidents) {
			    Row row = sheet.createRow(rowNum++);
			    row.createCell(0).setCellValue(incident.getId());
			    row.createCell(1).setCellValue(incident.getName());
			    row.createCell(2).setCellValue(incident.getContact());
			    row.createCell(3).setCellValue(incident.getIncidentType());
			    row.createCell(4).setCellValue(incident.getDescription());
			    row.createCell(5).setCellValue(incident.getAadharNumber());
			    row.createCell(6).setCellValue(incident.getInsuranceNumber());
			    row.createCell(7).setCellValue(incident.getAddress());
			    row.createCell(8).setCellValue(incident.getPurchaseID());
			}

			ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
			workbook.write(outputStream);
			return new ByteArrayInputStream(outputStream.toByteArray());
		}
    }

}
