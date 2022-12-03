idv = 1
function myFunction() {
  const inp = document.getElementById("myText").value;
  console.log("hello");
  if(inp != ""){
   

  document.getElementById("myText").value = "";

  const sec = document.createElement("dev");
  sec.classList.add("mystyle")
  sec.id= idv;
  document.body.appendChild(sec);

  const para = document.createElement("p");
  para.innerText = inp;
  para.classList.add("fnt");
  // 
  //document.body.appendChild(para);
  document.getElementById(idv).appendChild(para);
  }
   idv = idv+1;
}