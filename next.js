function display()
{
    var d = new Date();
    document.getElementById("time").innerHTML=d.getHours();
    document.getElementById("time").innerHTML+=":"+d.getMinutes();
    document.getElementById("time").innerHTML+=":"+d.getSeconds();
    setInterval("display()", 1000);
}
display();
function setBackgroundColor()
{
    console.log("Hello");
    var red=Math.floor(Math.random()*255);
    var blue=Math.floor(Math.random()*255);
    var green=Math.floor(Math.random()*255);
    var color = "rgb("+red+","+green+","+blue+")";
    document.getElementById("dynamic_bg").style.backgroundColor=color;
    setInterval("setBackgroundColor()", 20000);
}
setBackgroundColor();
function incSize(){
    document.getElementById("mouse").style.fontSize = "50px";
}
function decSize()
{
    document.getElementById("mouse").style.fontSize = "25px";
}
function init()
{
    imgObj=document.getElementById("image");
    imgObj.style.position="relative";
    imgObj.style.left='0px';
}
function moveRight()
{
    imgObj.style.left=parseInt(imgObj.style.left)+1+'px';
    animate = setTimeout("moveRight()",1);
}
function stop()
{
    clearTimeout(animate);
    imgObj.style.left='0px';
}
window.onload=init();

function describe()
{
    var students=[{name:'Raahul', r_num:'123',dob:'1995'},
        {name:'Moneesh', r_num:'456', dob:'2001'},
        {name:'Tharun',r_num:'105',dob:'2010'}];
    for(var i=0;i<students.length;i++)
    {
        if(parseInt(students[i].dob)<2000)
        {
            document.getElementById("empty1").innerHTML+="Below 2000<br>";
            document.getElementById("empty1").innerHTML+=students[i].name+"<br>";
        }
        else
        {
            document.getElementById("empty2").innerHTML+="After 2000<br>";
            document.getElementById("empty2").innerHTML+=students[i].name+"<br>";
        }
    }

}
