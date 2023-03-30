package de.sninvent;

import static io.restassured.RestAssured.given;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestMethodOrder;

import de.sninvent.model.Task;
import de.sninvent.model.TaskList;
import io.quarkus.test.junit.QuarkusTest;
import io.restassured.http.ContentType;

@QuarkusTest
@TestMethodOrder(OrderAnnotation.class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class TaskListTest {

    @Test
    @Order(1)
    public void test() {
        UUID tasklistId;

        // Create TaskList
        TaskList taskList = new TaskList();
        taskList.name = "testlist";
        taskList = given()
                .contentType(ContentType.JSON)
                .body(taskList)
                .when()
                .post("/list")
                .then()
                .statusCode(200)
                .extract()
                .body().as(TaskList.class);
        tasklistId = taskList.id;

        // Add 2 Tasks to TaskList
        Task task1 = new Task();
        task1.description = "Erste Aufgabe";
        task1.dueDate = LocalDate.now().plusDays(2L);
        task1.done = false;
        taskList = given()
                .contentType(ContentType.JSON)
                .body(task1)
                .when()
                .post("/list/" + tasklistId + "/task")
                .then()
                .statusCode(200)
                .extract()
                .body().as(TaskList.class);
        task1 = taskList.tasks.get(0);

        Task task2 = new Task();
        task2.description = "Zweite Aufgabe";
        task2.dueDate = LocalDate.now().plusDays(3L);
        task2.done = false;
        taskList = given()
                .contentType(ContentType.JSON)
                .body(task2)
                .when()
                .post("/list/" + tasklistId + "/task")
                .then()
                .statusCode(200)
                .extract()
                .body().as(TaskList.class);
        task2 = taskList.tasks.get(1);

        // Update a task
        task1.dueDate = LocalDate.now().plusDays(5L);
        given()
                .contentType(ContentType.JSON)
                .body(task1)
                .when()
                .put("/task")
                .then()
                .statusCode(200)
                .extract()
                .body().as(Task.class);

        // Delete a task
        given()
                .contentType(ContentType.JSON)
                .when()
                .delete("/task/" + task2.id)
                .then()
                .statusCode(204);

        // retrieve all Lists
        List<TaskList> taskListList = given()
                .contentType(ContentType.JSON)
                .when()
                .get("/list/all")
                .then()
                .extract().body().jsonPath().getList(".", TaskList.class);
        assertTrue(taskListList.size() >= 1);
        // retrieve single List
        TaskList singleTaskList = given()
                .contentType(ContentType.JSON)
                .when()
                .get("/list/" + tasklistId)
                .then()
                .extract().body().as(TaskList.class);
        assertTrue(singleTaskList.tasks.size() == 1);

        // update List
        singleTaskList.name = "neuerName";
        singleTaskList = given()
                .contentType(ContentType.JSON)
                .body(singleTaskList)
                .when()
                .put("/list")
                .then()
                .extract().body().as(TaskList.class);
        assertTrue(singleTaskList.tasks.size() == 1);
        assertTrue(singleTaskList.name.equals("neuerName"));

        // delete List
        given()
                .contentType(ContentType.JSON)
                .when()
                .delete("/list/" + tasklistId)
                .then()
                .statusCode(204);

        // retrieve single List, null response
        given()
                .contentType(ContentType.JSON)
                .when()
                .get("/list/" + tasklistId)
                .then()
                .statusCode(204)
                .extract().body().equals(null);
    }

}