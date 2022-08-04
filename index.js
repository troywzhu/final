let new_array = document.querySelector("#create-new-array");
let sort = document.querySelector("#sort");
let bars_container = document.querySelector("#bars_container");
let select_algo = document.querySelector("#algo");
var numBars = 300;
let height = 1;

// let sort1 = document.querySelector("#sort1")
// .addEventListener("click", SelectionSort);


function createArray() {
  bars_container.innerHTML = "";
  for (let i = 0; i < numBars; i++) {
		let bar = document.createElement("div");
		bar.classList.add("bar");
    let value = Math.floor(Math.random() * 100 + 1);
		bar.style.height =  value * 2 + "px";
    let barLabel = document.createElement("label");
    barLabel.classList.add("bar__id");
    barLabel.innerHTML = value; 
    bar.appendChild(barLabel);
		bars_container.appendChild(bar);
	}
}
createArray();
new_array.addEventListener("click", createArray);



// asynchronous function to perform "Selection Sort"
async function SelectionSort(delay = 300) {
  let bars = document.querySelectorAll(".bar");
  // Assign 0 to min_idx
   var min_idx = 0;
   for (var i = 0; i < bars.length; i += 1) {
  
    // Assign i to min_idx
    min_idx = i;
  
    // Provide darkblue color to the ith bar
    bars[i].style.backgroundColor = "darkblue";
    for (var j = i + 1; j < bars.length; j += 1) {
  
      // Provide red color to the jth bar
      bars[j].style.backgroundColor = "red";
        
      // To pause the execution of code for 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );
  
      // To store the integer value of jth bar to var1 
      var val1 = parseInt(bars[j].childNodes[0].innerHTML);
  
      // To store the integer value of (min_idx)th bar to var2 
      var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
        
      // Compare val1 & val2
      if (val1 < val2) {
        if (min_idx !== i) {
  
          // Provide skyblue color to the (min-idx)th bar
          bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
        }
        min_idx = j;
      } else {
  
        // Provide skyblue color to the jth bar
        bars[j].style.backgroundColor = "  rgb(24, 190, 255)";
      }
    }
  
    // To swap ith and (min_idx)th bar
    var temp1 = bars[min_idx].style.height;
    var temp2 = bars[min_idx].childNodes[0].innerText;
    bars[min_idx].style.height = bars[i].style.height;
    bars[i].style.height = temp1;
    bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
    bars[i].childNodes[0].innerText = temp2;
      
    // To pause the execution of code for 300 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 300)
    );
  
    // Provide skyblue color to the (min-idx)th bar
    bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
  
    // Provide lightgreen color to the ith bar
    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }
