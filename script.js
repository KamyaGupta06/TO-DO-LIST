const input =document.getElementById("inputtext");
const list=document.getElementById("task");

function addTask()
{
    if(input.value ==="")
    {
        alert("You must write something");
    }
    else
    {
        let li=document.createElement("li");
        li.innerHTML=input.value;

        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"; // for cross
        li.appendChild(span);
    }
    input.value="";
    saveData;
}
input.addEventListener("keypress",function(event)
{
    
    if(event.key === "Enter")
    addTask();
    
})

list.addEventListener("click",function(e)
{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN")
        {
            e.target.parentElement.remove();
            saveData();
            
        }

},false);

function saveData()
{
    localStorage.setItem("data",list.innerHTML);
}

function showtask()
{
    list.innerHTML=localStorage.getItem("data")
}
showtask();