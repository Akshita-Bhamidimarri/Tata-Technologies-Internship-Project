package com.springrest.springrest.services;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;

import com.springrest.springrest.entities.Incidents;

public interface ExcelExportService {
	    ByteArrayInputStream exportToExcel(List<Incidents> incidents) throws IOException;
}
