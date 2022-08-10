// Global Variable to append bar div elements
var barContainer = document.querySelector("#bar_container");

// Will hold a collection of div elements
var bars;

// Array to track the number values in our array
var barArray = []

// The number of bars in our array
var barLength = 250;

// Factor to generate height style of bars
var height = 2;

// Variable to truck number of operations in each algorithm
var operations = 0;

// Variable to place output message in the footer
var message = document.querySelector("footer");



// Function changes height style and data attributes
function ChangeHeight(bar, data) {

    // Sets the data attribute of the div
    bar.setAttribute("data", data);

    // Sets the height style of the div
    bar.style.height = data * height + "px";
}

// Function to populate unsorted array
function CreateNewArray() {

    // Clear current array
    barArray = []

    // Clear the current contents of the div
    barContainer.innerHTML = "";

    // Iterate over each bar in the array
    for (let i = 0; i < barLength; i++) {

        // Create a new bar div and assign its class
        let bar = document.createElement("div")
        bar.setAttribute("class", "bar");

        // Create a random number value
        let number = Math.floor(Math.random() * 100 + 1)

        // Assign height and data value to bar
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
CreateNewArray();


// Recreates the array to maintain current dataset
function RecreateCurrentArray() {

    // Clear contents of current container
    barContainer.innerHTML = "";

    // Iterate over the present bar array
    for (let i = 0; i < barLength; i++) {

        // Create a new bar div and assign its class
        let bar = document.createElement("div")
        bar.setAttribute("class", "bar");

        // Assign height and data value to bar
        ChangeHeight(bar, barArray[i])

        // Populate the array to store data for later use
        barContainer.appendChild(bar);

    }
    // Create array of all bars and add to global variable
    bars = document.querySelectorAll(".bar");
}




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

    // Use an array maintaing the current dataset
    RecreateCurrentArray();

    // Track number of operations
    operations = 0;

    // Clear the output field
    message.innerHTML = "";

    // Iterate over the array
    for (let i = 0; i < barLength; i++) {

        // Assign current index as min value
        let min = i;

        // Iterate over the rest of the array beyond i
        for (let j = i + 1; j < barLength; j++) {

            // Bars turn grey to visualize searching the array
            bars[j].style.backgroundColor = "grey";

            // Check if current position is smaller than the min
            if (Number(bars[j].getAttribute("data")) < Number(bars[min].getAttribute("data"))) {

                // Increase count for greater value comparison
                operations++;

                // Sleep function to animate searching
                // https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
                await new Promise(r => setTimeout(r, 1));

                // Revert previous minimum color
                bars[min].style.backgroundColor = "aqua";
                min = j;
                operations++;

                // Assign new min bar to green
                bars[min].style.backgroundColor = "lime";

            }

            // Change the color back at the end of the loop
            bars[j].style.backgroundColor = "aqua";

            // Increase operation count for end of loop
            operations++;
        }

        // After the loop, if min is not index bar
        // Turn min bar green and swap with index bar
        // Increase operation count for swap
        if (min !== i) {
            Swap(bars[i], bars[min])
            bars[min].style.backgroundColor = "lime";
            operations++;
        }

        // Turn the sorted bar green
        bars[i].style.backgroundColor = "lime";

        // Increase operation count for end of loop
        // Output operation count to user
        operations++;
        message.innerHTML = "Selection Sort:<p>" + operations + " Operations</p>";
    }
}

// SelectionSort();

// BubbleSort Algorithm
async function BubbleSort() {

    // Use an array maintaining the current dataset
    RecreateCurrentArray()

    operations = 0;
    message.innerHTML = "";

    // Iterate through the bars array
    for (let i = 0; i < barLength; i++) {
        for (let j = 0; j < barLength - i - 1; j++) {

            // Change colors of blocks being compared
            bars[j].style.backgroundColor = "lightgrey";
            bars[j + 1].style.backgroundColor = "grey";


            // Compare the height values of two bars
            if (Number(bars[j].getAttribute("data")) >
                Number(bars[j + 1].getAttribute("data"))) {

                // Operation for greater than check
                operations++

                // Sleep to visualize array animation
                await new Promise(r => setTimeout(r, 1));
                bars[j].style.backgroundColor = bars[j + 1].style.backgroundColor

                // The larger bar is swapped towards the right
                Swap(bars[j], bars[j + 1]);
                operations++;
            }


            // Revert colors after comparison complete
            bars[j].style.backgroundColor = "aqua";
            bars[j + 1].style.backgroundColor = "aqua";

            // Increase operation count for end of loop
            operations++;
        }

        // Once correctly sorted, turn color green
        bars[barLength - i - 1].style.backgroundColor = "lime";

        // Increase operation count for end of loop
        // Output operation count
        operations++;
        message.innerHTML = "Bubble Sort:<p>" + operations + " Operations</p>";
    }
}

// Insertion Sort Algorithm
async function InsertionSort() {

    // Generate same array to preserve dataset
    RecreateCurrentArray()

    operations = 0;
    message.innerHTML = "";

    for (let i = 1; i < barLength; i++) {

        // Store value of current bar
        let current = Number(bars[i].getAttribute("data"));
        operations++;

        let j = i - 1;
        operations++;

        let jBarData;


        while ((j > -1) && (current < (jBarData = Number(bars[j].getAttribute("data"))))) {


            // Change color to grey and sleep to visualize sorting animation
            bars[j].style.backgroundColor = "grey";
            await new Promise(r => setTimeout(r, 1));

            // Adjust height
            ChangeHeight(bars[j + 1], jBarData);
            operations++;

            bars[j + 1].style.backgroundColor = "lime";

            j--;
            operations++;

            // Increase operation count for end of loop
            operations++;
        }
        bars[j + 1].style.backgroundColor = "lime";

        // Adjust the height of the element
        ChangeHeight(bars[j + 1], current);
        operations++;

        // Increase operation count for end of loop
        operations++;

        // Output operation count
        message.innerHTML = "Insertion Sort:<p>" + operations + " Operations</p>";
    }

}


// Bind sorting algorithms to HTML buttons with onlick events

document.querySelector("#create-new-array").addEventListener("click", CreateNewArray);
document.querySelector("#bubble-sort").addEventListener("click", BubbleSort);
document.querySelector("#selection-sort").addEventListener("click", SelectionSort);
document.querySelector("#insertion-sort").addEventListener("click", InsertionSort);
