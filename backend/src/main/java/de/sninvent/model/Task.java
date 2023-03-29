package de.sninvent.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
public class Task extends PanacheEntity {
    public int id;
    public String name;
    public LocalDateTime creation;
}