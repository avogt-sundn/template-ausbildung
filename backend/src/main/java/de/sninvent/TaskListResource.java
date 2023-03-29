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
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

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

    // TASKS

    @POST
    @Transactional
    @Path("/{listId}/tasks")
    public TaskList addTaskToList(@PathParam("listId") UUID listId, Task task) {
        TaskList list = TaskList.findById(listId);
        list.tasks.add(task);
        list.persist();
        return list;
    }

    // @PUT
    // @Transactional
    // @Path("/{listId}/tasks/{taskId}")
    // public Task updateTask(@PathParam("listId") UUID listId, @PathParam("taskId") UUID taskId, Task taskToUpdate) {
    //     Task task = Task.findById(taskId);
    //     task.description = taskToUpdate.description;
    //     task.done = taskToUpdate.done;
    //     task.timestamp = taskToUpdate.timestamp;
    //     task.persist();
    //     return task;
    // }

    // @DELETE
    // @Transactional
    // public void delete(@PathParam("listId") UUID listId, @PathParam("taskId") UUID taskId) {
    //     Task.deleteById(taskId);
    // }
}
