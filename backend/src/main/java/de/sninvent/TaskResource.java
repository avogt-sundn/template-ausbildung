package de.sninvent;

import javax.transaction.Transactional;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;

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

}
