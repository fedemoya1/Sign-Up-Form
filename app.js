document.getElementsByClassName("button1")[0].addEventListener("click", verificar);

function verificar(){

    var input = document.getElementsByClassName("inp");
    var img = document.getElementsByClassName("img1");
    var error = document.getElementsByClassName("error1");
    
    for(let i = 0; i < input.length; i+=1){

        if(input[i].value == ""){
            
            img[i].style.display = "initial";
            input[i].style.border = "2px solid hsl(0, 100%, 74%)";
            error[i].style.display = "initial";

        }

        else{
         
            img[i].style.display = "none";
            input[i].style.border = "2px solid hsl(246, 25%, 77%)";
            error[i].style.display = "none";
    
        }

    }
}