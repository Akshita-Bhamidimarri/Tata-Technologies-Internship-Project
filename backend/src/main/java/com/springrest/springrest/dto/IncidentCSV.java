package com.springrest.springrest.dto;

public class IncidentCSV {
	private String name;
    private long contact;
    private String incidentType;
    private String description;
    private long aadharNumber;
    private long insuranceNumber;
    private String address;
    private long purchaseID;
    
    
	public IncidentCSV() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public IncidentCSV(String name, long contact, String incidentType, String description, long aadharNumber,
			long insuranceNumber, String address, long purchaseID) {
		super();
		this.name = name;
		this.contact = contact;
		this.incidentType = incidentType;
		this.description = description;
		this.aadharNumber = aadharNumber;
		this.insuranceNumber = insuranceNumber;
		this.address = address;
		this.purchaseID = purchaseID;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getContact() {
		return contact;
	}
	public void setContact(long contact) {
		this.contact = contact;
	}
	public String getIncidentType() {
		return incidentType;
	}
	public void setIncidentType(String incidentType) {
		this.incidentType = incidentType;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public long getAadharNumber() {
		return aadharNumber;
	}
	public void setAadharNumber(long aadharNumber) {
		this.aadharNumber = aadharNumber;
	}
	public long getInsuranceNumber() {
		return insuranceNumber;
	}
	public void setInsuranceNumber(long insuranceNumber) {
		this.insuranceNumber = insuranceNumber;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public long getPurchaseID() {
		return purchaseID;
	}
	public void setPurchaseID(long purchaseID) {
		this.purchaseID = purchaseID;
	}

	@Override
	public String toString() {
		return "IncidentCSV [name=" + name + ", contact=" + contact + ", incidentType=" + incidentType
				+ ", description=" + description + ", aadharNumber=" + aadharNumber + ", insuranceNumber="
				+ insuranceNumber + ", address=" + address + ", purchaseID=" + purchaseID + "]";
	}
    
	
    

}

