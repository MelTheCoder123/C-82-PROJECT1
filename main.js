var mouseEvent = "empty"

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "red";
width_of_the_line = 2;
function Clear_Area()
{
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
   color= document.getElementById("color").value
   width_of_the_line = document.getElementById("width_of_the_line")
   radius = document.getElementById("radius").value;
    mouseEvent ="mousedown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent =="mousedown"){
       ctx.beginPath();
       ctx.strokestyle = color;
       ctx.linewidth = width_of_the_line;
       ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI)
       ctx.stroke();

       console.log("Current position of X and Y coordinates =")
       console.log("x =" + current_position_of_mouse_x + "y =" + current_position_of_mouse_y);
       ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
       ctx.stroke();
    }
}