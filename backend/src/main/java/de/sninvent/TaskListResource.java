package de.sninvent;

import java.util.List;
import java.util.UUID;

import javax.transaction.Transactional;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

import de.sninvent.model.Task;
import de.sninvent.model.TaskList;

@Path("/lists")
public class TaskListResource {
    
    @GET
    public List<TaskList> getAll() {
        return TaskList.listAll();
    }

    @GET
    @Path("/{id}")
    public TaskList getSingle(@PathParam("id") UUID id) {
        return TaskList.findById(id);
    }

    @POST
    @Transactional
    public TaskList addTaskList(TaskList taskList){
        taskList.persist();
        return taskList;
    }

    @POST
    @Transactional
    @Path("/{id}/task")
    public TaskList addTaskToList(@PathParam("id") UUID id, Task task){
        TaskList list = TaskList.findById(id);
        list.tasks.add(task);;
        list.persist();
        return list;
    }

}
