package de.sninvent.model;

import java.time.LocalDateTime;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

@Entity
public class Task extends PanacheEntityBase {
    
    @Id
    @GeneratedValue(generator = "UUID")
    public UUID id;

    public boolean done;
    public String description;
    public LocalDateTime timestamp;
}