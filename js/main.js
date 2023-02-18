function myFunction(element){
    var status =  document.getElementById("status");

    var boxes = [
        [document.getElementById("option-1"), document.getElementById('text')],
        [document.getElementById("option-2"), document.getElementById('text2')],
        [document.getElementById("option-3"), document.getElementById('text3')]
    ];

if(element.checked){
    boxes.forEach(([c, t]) =>{
        if(element === c){
            t.style.display = "block";
            status.style.display = "block";
            setTimeout(() => {
                status.style.display = "none";
            },5000);
        }else{
            t.style.display = "none";
            c.checked = false;
        }
    });
    return;
}
boxes.forEach(([, t]) => t.style.display = "none");
}