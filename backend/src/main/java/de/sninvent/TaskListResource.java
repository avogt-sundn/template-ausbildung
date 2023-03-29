package de.sninvent;

import java.util.List;
import java.util.UUID;

import javax.transaction.Transactional;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

import de.sninvent.model.TaskList;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

@Path("/list")
public class TaskListResource {
    
    @GET
    @Path("/all")
    public List<PanacheEntityBase> retrieveAll() {
        return TaskList.listAll();
    }

    @GET
    @Path("/{id}")
    public PanacheEntityBase retrieveSingle(@PathParam("id") UUID id) {
        return TaskList.findById(id);
    }

    @POST
    @Transactional
    public TaskList addTaskList(TaskList taskList){
        taskList.persist();
        return taskList;
    }
}
