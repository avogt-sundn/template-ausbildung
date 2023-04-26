package de.sninvent;

import java.util.List;
import java.util.UUID;

import javax.transaction.Transactional;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

import de.sninvent.model.Task;
import de.sninvent.model.TaskList;

@Path("/list")
public class TaskListResource {

    @GET
    @Path("/all")
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
    public TaskList addTaskList(TaskList taskList) {
        taskList.persist();
        return taskList;
    }

    @PUT
    @Transactional
    public TaskList updateTaskList(TaskList taskListToUpdate) {
        TaskList taskList = TaskList.findById(taskListToUpdate.id);
        taskList.name = taskListToUpdate.name;
        taskList.persist();
        return taskList;
    }

    @DELETE
    @Transactional
    @Path("/{id}")
    public void delete(@PathParam("id") UUID id) {
        TaskList.deleteById(id);
    }

    @POST
    @Transactional
    @Path("/{listId}/task")
    public TaskList addTaskToList(@PathParam("listId") UUID listId, Task task) {
        task.persist();
        TaskList list = TaskList.findById(listId);
        list.tasks.add(task);
        list.persist();
        return list;
    }

}
