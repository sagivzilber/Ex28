function f1() {
  var img = document.getElementById("img1");
  var imgDisplay = img.style.display;
  if (imgDisplay === "block") {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
}

// var handle1 = setInterval(f1, 500);

function onBtn1Click() {
  clearInterval(handle1);
}

function f2() {
  var img2 = document.getElementById("img2");
  var img3 = document.getElementById("img3");
  var img2Src = img3.src;
  var img3Src = img2.src;
  img2.src = img2Src;
  img3.src = img3Src;
}

// var handle2 = setInterval(f2, 500);

function onBtn2Click() {
  clearInterval(handle2);
}

var f3Count = 0;

function f3() {
  var img = document.createElement("img");
  img.setAttribute("src", `images/${++f3Count}.jpg`);
  img.setAttribute("height", "150");
  img.setAttribute("width", "150");

  var td = document.getElementById("td33");
  td.appendChild(img);

  if (f3Count == 5) {
    clearInterval(handle3);
  }
}

// var handle3 = setInterval(f3, 500);

function onBtn3Click() {
  clearInterval(handle3);
}

function f4(fieldId, raiseBy) {
  var input43 = document.getElementById(fieldId);
  var value = Number(input43.value);
  input43.value = value + raiseBy;
}

// var handle4 = setInterval(function () {
//   f4("input43", 3);
// }, 500);

function onBtn4Click() {
  clearInterval(handle4);
}

var f5Count = 0;
function f5() {
  var select = document.getElementById("select53");
  if (f5Count === 2) {
    f5Count = 0;
  } else {
    f5Count++;
  }
  document.body.style.backgroundColor = select.value;
  select.value = select.options[f5Count].value;
}

// var handle5 = setInterval(f5, 2000);

function onBtn5Click() {
  clearInterval(handle5);
}
function f6() {}

// var handle6 = setInterval(f6, 500);

function onBtn6Click() {
  clearInterval(handle6);
}
