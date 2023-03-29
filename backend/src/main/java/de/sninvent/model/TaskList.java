package de.sninvent.model;

import java.util.ArrayList;

import javax.persistence.Entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
public class TaskList extends PanacheEntity {
    public int id;
    public ArrayList<Task> entries;
}