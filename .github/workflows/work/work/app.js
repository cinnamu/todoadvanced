//addTask Function
const list = document.getElementById('list');
const input = document.getElementById('inputbar')

/* add task by creating task "li" and "delete" buttons.
append delete button to li, add an event listener
on delete button that goes up parent nodes to delete the
element that was clicked!  it took me so long to figure 
this out even with looking up the answers!!!!!! */

function addTask(){

    const li = document.createElement("li");
    li.innerHTML = document.getElementById("inputbar").value

    const image = document.createElement("img");
    image.src = "delete.png"
    image.setAttribute("id", "deletepng")

    li.appendChild(image);

    image.addEventListener("click", () => 
    li.parentNode.removeChild(li));

    document.getElementById("list").appendChild(li);
}

// I want to save the list items so they dont reset.


