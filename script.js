idv = 1
function myFunction() {
  const inp = document.getElementById("myText").value;
  console.log("hello");
  if(inp != ""){
   

  document.getElementById("myText").value = "";

  const sec = document.createElement("dev");
  sec.classList.add("mystyle")
  sec.id= idv;
  document.getElementById("text").appendChild(sec);

  const para = document.createElement("p");
  para.innerText = inp;
  para.classList.add("fnt");
  // 
  //document.body.appendChild(para);
  document.getElementById(idv).appendChild(para);
  }
   idv = idv+1;
}

input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});