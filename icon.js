const images = [
    "icon1.png", "icon2.png", "icon22.png" 
    
  ];
  
  let i = 0;
  
  function placeimage(x, y) {
    const nextimage = images[i];
  
    const img = document.createElement("img");
    img.setAttribute("src", nextimage);
    img.style.left = x + "px";
    img.style.top = y + "px";
      img.style.transform= "translate(-50%,-50%) scale(0.5) rotate("+ (Math.random()* 20-10)+"deg)";
  
  
    document.body.appendChild(img);
  
    i = i + 1;
  
    if (i >= images.length) {
      i = 0;
    }
  }
  document.addEventListener("mousemove", function (event) {
   event.preventDefault();
    
    if (Math.random()> 0.86) {
      
      placeimage(event.pageX, event.pageY)
  }
    } )
    
  document.addEventListener("touched", function (event) {
    event.preventDefault();
    placeimage(event.pageX, event.pageY);
  });
  
  
  //document.getElementById("#button1").style.pointerEvents = "none";
  
  