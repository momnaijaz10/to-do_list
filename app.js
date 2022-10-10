document.querySelector("#push").onclick = function(){
 
    document.querySelector("#tasks").innerHTML += `
    <div class="task">
    <span id="taskname">
    ${document.querySelector('#input_task').value}
    </span>
    <button class="delete">del</button>
</div>
    
    `;

   var current_task = document.querySelectorAll(".delete")

   for(var i = 0; i < current_task.length; i++){
    current_task[i].onclick = function(){
        this.parentNode.remove();
    }
   }
}




























