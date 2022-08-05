var barContainer = document.querySelector("#bar_container");
var barLength = 100;
var height = 2;
var bars;
var barArray = [] 
var numberOfSteps;


// Function changes height style and data attributes
function ChangeHeight(bar, data){

  // Sets the data attribute of the div 
  bar.setAttribute("data", data);

  // Sets the height style of the div 
  bar.style.height = data * height + "px";
}

// Function to populate unsorted array 
function CreateArray() {

  // Clear the current contents of the div
  barContainer.innerHTML = "";

  // Iterate over each bar in the array
  for (let i = 0; i < barLength; i++) {

    // Create a new bar div and assign its class
	  let bar = document.createElement("div")
    bar.setAttribute("class", "bar");

    let number = Math.floor(Math.random() * 100 + 1)

    // Randomly assign a height and value to the bar
    ChangeHeight(bar, number)

    // Populate the array to store data for later use
    barArray.push(number)

    // Add the bar to the bar container 
	  barContainer.appendChild(bar);
	}

  // Create array of all bars and add to global variable 
  bars = document.querySelectorAll(".bar");
}


// Call function at the start of the app
CreateArray();


// Function to swap the values of 2 bars 
function Swap(bar1, bar2) {
  
      // Create temporary variable to swap the data 
      let temp = bar1.getAttribute("data");

      // Use helper function to swap the data 
      ChangeHeight(bar1, bar2.getAttribute("data"));
      ChangeHeight(bar2, temp);

}


// Selection Sort Algorithm
async function SelectionSort() {

    for (let i = 0; i < barLength; i++) {
    
      // Assign i as the minimum value 
      let min = i;

      for (let j = i + 1; j < barLength; j++) {
    
        // Provide grey color to the jth bar
        bars[j].style.backgroundColor = "grey";
          
       // To pause the execution of code for 1 milliseconds
       await new Promise((resolve) =>
       setTimeout(() => {
         resolve();
       }, 1)
     );
    
        // Check for a number smaller than current min
        if (Number(bars[min].getAttribute("data")) > Number(bars[j].getAttribute("data"))) 
        {
          if (min !== i) 
          {
    
            // Provide skyblue color to the (min-idx)th bar
            bars[min].style.backgroundColor = "red";
          }

          min = j;
        } 
        
        else {
    
          // Provide skyblue color to the jth bar
          bars[j].style.backgroundColor = "aqua";
        }
      }
    
      // To pause the execution of code for 300 milliseconds
      // await new Promise((resolve) =>
      //   setTimeout(() => {
      //     resolve();
      //   }, 1)
      // );
    
      Swap(bars[i], bars[min])

      // Provide skyblue color to the (min-idx)th bar
      bars[min].style.backgroundColor = "red";
    
      // Provide lightgreen color to the ith bar
      bars[i].style.backgroundColor = "lime";
    }
  }


// Asynchronous BubbleSort function
async function BubbleSort() {


    // BubbleSort Algorithm
    for (let i = 0; i < barLength; i++) {
        for (let j = 0; j < barLength - i - 1; j++) {
  
            // To change background-color of the
            // blocks to be compared
            bars[j].style.backgroundColor = "grey";
            bars[j + 1].style.backgroundColor = "grey";
  
            // To wait for .1 sec
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, )
            );
  
            // To compare value of two blocks
            if (Number(bars[j].getAttribute("data")) > 
            Number(bars[j + 1].getAttribute("data"))) {
                Swap(bars[j], bars[j + 1]);
            }
  
            // Changing the color to the previous one
            bars[j].style.backgroundColor = "aqua";
            bars[j + 1].style.backgroundColor = "aqua";
        }
  
        //changing the color of greatest element 
        //found in the above traversal
        bars[barLength - i - 1].style.backgroundColor = "lime";
    }
}



// Asynchronous function to perform "Insertion Sort"
async function InsertionSort() {

    for (let i = 1; i < barLength; i++) {
    
      // To store the integer value of ith bar to key 
      let current = Number(bars[i].getAttribute("data"));

      // Assign i-1 to j
      let j = i - 1;
  
      // To pause the execution of code for 600 milliseconds
      await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 10)
    );
    
      // For placing selected element at its correct position 

      let jBarData;

      while ((j > -1) && (current < (jBarData = Number(bars[j].getAttribute("data"))))) {
          
        // Provide darkblue color to the jth bar
        bars[j].style.backgroundColor = "grey";
          
        // For placing jth element over (j+1)th element
        ChangeHeight(bars[j + 1], jBarData);

    
        // To pause the execution of code for 600 milliseconds
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 50)
        );

        bars[j].style.backgroundColor = "lime";

        // Assign j-1 to j
        j -= 1;
      }
    
      // Placing the selected element to its correct position
      ChangeHeight(bars[j + 1], current);

         
      // To pause the execution of code for 600 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 10)
      );

    }
  }

  document.querySelector("#create-new-array").addEventListener("click", CreateArray);
  document.querySelector("#bubble-sort").addEventListener("click", BubbleSort);
  document.querySelector("#selection-sort").addEventListener("click", SelectionSort);
  document.querySelector("#insertion-sort").addEventListener("click", InsertionSort);
