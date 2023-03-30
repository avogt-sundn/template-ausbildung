package de.sninvent;

import java.util.UUID;

import javax.transaction.Transactional;
import javax.ws.rs.DELETE;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

import de.sninvent.model.Task;

@Path("/task")
public class TaskResource {

    @PUT
    @Transactional
    public Task updateTask(Task taskToUpdate) {
        Task task = Task.findById(taskToUpdate.id);
        task.description = taskToUpdate.description;
        task.done = taskToUpdate.done;
        task.timestamp = taskToUpdate.timestamp;
        task.persist();
        return task;
    }

    @DELETE
    @Transactional
    @Path("/{id}")
    public void delete(@PathParam("id") UUID id) {
        Task.deleteById(id);
    }

}
