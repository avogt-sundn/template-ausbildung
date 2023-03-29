package de.sninvent;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

import de.sninvent.model.Task;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

@Path("/task")
public class TaskResource {

    @GET
    public List<PanacheEntityBase> getTasks() {
        return Task.listAll();
    }

}
