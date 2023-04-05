var color = [
    "#D58936",
    "#7FB069",
    "#C9DDFF",
    "#95AFBA",
    "#CADBC8",
    "#62A8AC",
    "#F7CE5B",
  ];
  var i = 0;
  console.log(document)
  document.querySelector(".bb").addEventListener("click", function () {
    i = i < color.length ? ++i : 0;
    document.querySelector("").style.background = color[i];
  });