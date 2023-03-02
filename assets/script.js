let screen = document.getElementById("screen");
btns = document.querySelectorAll("button");
let scval = "";
for (item of btns) {

  item.addEventListener("click", (e) => {
        bt = e.target.innerText;
        console.log("Button text is ", bt);
        if (bt == "AC") 
        {
            scval = "";
            screen.value = scval;
        }
        else if (bt == "x") 
        {
            bt = "*";
            scval += bt;
            screen.value = scval;
        } 
        else if (bt == "=") 
        {
            screen.value = eval(scval);
        } 
        else if (bt == "DEL") {
            scval = screen.value.slice(0, -1);
            screen.value = scval;
        } 
        else {
            scval += bt;
            screen.value = scval;
        }
  })
}
