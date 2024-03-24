var slider = document.getElementById("mySlider");
var output = document.querySelector(".text-value");
var grid_container = document.querySelector(".grid-container");
output.style.textAlign = "center";
output.style.marginTop = "20px";
output.style.fontWeight = "bold";
var gridItem = document.querySelectorAll(".grid-item");
var menu = document.getElementById("menu");
var closebtn = document.getElementById("btn-close");
var sidebar = document.getElementById("sidebar");
var hamburger = document.getElementById("hamburger-menu");
var InputColumns = document.getElementById("columns");
var InputRows = document.getElementById("rows");
var InputColor = document.getElementById("color");

output.innerHTML = slider.value + "°"; // Display the default slider value
slider.oninput = function () {
  output.innerHTML = this.value + "°";
  grid_container.style.transform = "rotate(" + this.value + "deg)";
};

slider.parentNode.insertBefore(output, slider.nextSibling);

gridItem.forEach(function (element) {
  element.addEventListener("click", function (event) {
    if (element.style.opacity >= 1 || !element.style.opacity) {
      element.style.opacity = "0";
    } else {
      element.style.opacity = "1";
    }
  });
});


menu.addEventListener("click", function () {
  sidebar.style.translate = "0";
});

closebtn.addEventListener("click", function () {
  sidebar.style.translate = "-100%";
});

document.addEventListener("click", function (event) {
  if (
    !sidebar.contains(event.target) &&
    event.target !== closebtn &&
    event.target !== hamburger
  ) {
    sidebar.style.translate = "-100%";
  }
});


function gridColor(c) {
  for(i=0;i<gridItem.length;i++){
    gridItem[i].style.border =`5px solid ${c}`
  }
}

InputColor.oninput = function () {
  if (isHexColor(InputColor.value)) {
    InputColor.style.border = "2px solid rgba(21, 194, 36)";
    InputColor.style.backgroundColor = "rgba(21, 194, 36)";
    gridColor(InputColor.value)
  } else {
    InputColor.style.border = "2px solid rgba(214, 13, 36)";
    InputColor.style.backgroundColor = "rgba(214, 13, 36)";
  }
};


InputRows.oninput = function() {
  
}

function isHexColor(value) {
  // Regular expression for validating hexadecimal color code
  var hexColorRegex = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

  // Test the input value against the regular expression
  return hexColorRegex.test(value);
}

