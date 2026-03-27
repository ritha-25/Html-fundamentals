
document.addEventListener("DOMContentLoaded", function() {
    
    
    let tasklist = [];

   
    const addBtn = document.getElementById("addbutton");
    const displayBtn = document.getElementById("displaybutton");
    const deleteBtn = document.getElementById("deletebutton");
    const totalBtn = document.getElementById("totalbutton");
    let taskNameInput = document.getElementById("taskNameInput");
    let taskDateInput = document.getElementById("taskDateInput");
    let taskListDiv = document.getElementById("taskList");

   
    // console.log("Add button:", addBtn);
    // console.log("Display button:", displayBtn);
    // console.log("Task input:", taskNameInput);

   
    function addTask() {
       
        let taskName = taskNameInput.value;
        let taskDate = taskDateInput.value;
        
      
        if (taskName === "") {
            alert("Please enter a task!");
            return;
        }
      
        let status = "inprogress";
        let radios = document.getElementsByName("status");
        for(let i = 0; i < radios.length; i++) {
            if(radios[i].checked) {
                status = radios[i].value;
                break;
            }
        }
        
       
        let task = {
            name: taskName,
            date: taskDate || "No date",
            status: status,
            completed: false
        };
        
     
        tasklist.push(task);
        
     
        taskNameInput.value = "";
        taskDateInput.value = "";
        
      
        for(let i = 0; i < radios.length; i++) {
            radios[i].checked = false;
        }
        
       
        alert("Task added successfully!");
        
        
        displayTasks();
    }

  
    function displayTasks() {
       
        taskListDiv.innerHTML = "";
        
     
        if (tasklist.length === 0) {
            taskListDiv.innerHTML = "<p>No tasks yet. Add a task!</p>";
            return;
        }
        
        
        for (let i = 0; i < tasklist.length; i++) {
            let task = tasklist[i];
            
          
            let taskDiv = document.createElement("div");
            
           
            let textDecoration = task.completed ? "line-through" : "none";
            
          
            taskDiv.innerHTML = `
                <div style="border:1px solid #ccc; 
                padding:10px; margin:5px; background:#f9f9f9;">
                    <strong>Task:</strong> <span style="text-decoration:${textDecoration}">${task.name}</span><br>
                    <strong>Date:</strong> ${task.date}<br>
                    <strong>Status:</strong> ${task.completed ? "✅ Completed" : "🟡 In Progress"}<br>
                    <button onclick="markComplete(${i})" ${task.completed ? "disabled" : ""}>Mark Complete</button>
                    <button onclick="deleteOneTask(${i})">Delete</button>
                </div>
            `;
            
            taskListDiv.appendChild(taskDiv);
        }
    }

    
    window.markComplete = function(index) {
        tasklist[index].completed = true;
        displayTasks(); 
        alert("Task marked as completed!");
    }

   
    window.deleteOneTask = function(index) {
        tasklist.splice(index, 1);
        displayTasks();
        alert("Task deleted!");
    }

   
    function deleteAllTasks() {
        if (tasklist.length === 0) {
            alert("No tasks to delete!");
            return;
        }
        
        let confirmDelete = confirm("Are you sure you want to delete ALL tasks?");
        if (confirmDelete) {
            tasklist = []; 
            displayTasks(); 
            alert("All tasks deleted!");
        }
    }

    
    function displayTotalTask() {
        let total = tasklist.length;
        let completed = 0;
        let pending = 0;
        
        for (let i = 0; i < tasklist.length; i++) {
            if (tasklist[i].completed) {
                completed++;
            } else {
                pending++;
            }
        }
        
        alert(` TASK SUMMARY\n\nTotal Tasks: ${total}\nCompleted: ${completed}\nPending: ${pending}`);
    }

   
    if (addBtn) addBtn.onclick = addTask;
    if (displayBtn) displayBtn.onclick = displayTasks;
    if (deleteBtn) deleteBtn.onclick = deleteAllTasks;
    if (totalBtn) totalBtn.onclick = displayTotalTask;

    
    if (taskNameInput) {
        taskNameInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                addTask();
            }
        });
    }
    
    console.log("JavaScript loaded successfully!");
});