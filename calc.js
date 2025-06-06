function buttonclick(val){

    console.log(val)
    document.getElementById("screen").value=document.getElementById("screen").value+val;    

}

function clearscreen(){
    document.getElementById("screen").value=""
}

function equalclick(){
   var text1=document.getElementById("screen").value
   var result=eval(text1)
   document.getElementById("screen").value=result

}
function clearadj(){

var text2=document.getElementById("screen")
text2.value=text2.value.slice(0,-1)
}