//creating Grids Script

const boxes = document.getElementById("boxes");
function makeRows(rows, cols) {
  boxes.style.setProperty('--grid-rows', rows);
  boxes.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    boxes.appendChild(cell).className = "grid-item";
  };
  var pixels =document.getElementById("boxes").childNodes;
  for(var i =0; i< pixels.length; i++){
    pixels[i].id="gridElement"+i;
}
};
//Slider for pixels number function
var range = document.getElementById("range");
makeRows(range.value, range.value)

range.oninput = function(){
  let Pixels = boxes.querySelectorAll('div');
  Pixels.forEach(Pixels => Pixels.remove());
  var rows =document.getElementById("range").value;
  var cols = rows;
  var colsVal= document.getElementById("cols");
  var rowsVal = document.getElementById("rows");
  rowsVal.value = rows;
  colsVal.value = rows;
  makeRows(rows, cols);
};


//Drawing On Pixels function
boxes.onmouseover= function(e) {
  var selectedColor = document.getElementById("colorPicker").value;
  var target = document.getElementById(e.target.id);
  target.style.backgroundColor = selectedColor;
  
}
// Clear function
function clearFunc(){
  var pixels =document.getElementById("boxes").childNodes;
  for(var i =0; i< pixels.length; i++){
    var gridItemId="gridElement"+i;
    var gridItem= document.getElementById(gridItemId);
    gridItem.style.backgroundColor ="white";
    console.log(gridItem)

}
}
