package com.springrest.springrest.DaoImpl;
import java.util.List;
import com.springrest.springrest.Dao.IncidentDaoCustom;
import com.springrest.springrest.entities.Incidents;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public class IncidentDaoImpl implements IncidentDaoCustom {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Incidents> findAllIncidents() {
        TypedQuery<Incidents> query = entityManager.createQuery("SELECT i FROM Incidents i", Incidents.class);
        return query.getResultList();
    }
    
    @Override
    @Transactional
    public Incidents addIncident(Incidents incident) {
        incident = entityManager.merge(incident); // Merge to ensure the entity is in a managed state
        entityManager.persist(incident);
        return incident;
    }



}
