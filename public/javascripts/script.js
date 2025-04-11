

function show_result()
{
    let en = parseInt(document.getElementById('en').value);
    let hn = parseInt(document.getElementById('hn').value);
    let Ms = parseInt(document.getElementById('Ms').value);
    let Py = parseInt(document.getElementById('Py').value);
    let Ch = parseInt(document.getElementById('Ch').value); 
    let Bi = parseInt(document.getElementById('Bi').value);

    let to = en + hn + Ms + Py + Ch + Bi;
    let Pe = ((to*100)/600);
    
    
        
    if(en>100||hn>100||Ms>100||Py>100||Ch>100||Bi>100 )
    {
        alert("enter valid number");
        return;
    }
    else {
        document.getElementById("total").value=to;
        document.getElementById("Pe").value=Pe;
    
    
        if(Pe>= 90){
            let a=document.getElementById("grade").value =('A') ;
        }
        else if(Pe>= 80){
            document.getElementById("grade").value =('B');
        }
        else  if(Pe>= 70){
            document.getElementById("grade").value =('C');
        }
        else  if(Pe>= 60){
            document.getElementById("grade").value =('D');
        }
        else
        {
            document.getElementById("grade").value =('E');
        }
    }
}

  function color(){
    document.body.classList.toggle("dark-theme");
}
