/*
I got rid of the extraneous code so I focus on just the first block
*/

// functions to attach events to buttons
addShowCAFieldsEvent();

// declare global variable for total current assets


// set event to show the current asset label and input "fields" 
function addShowCAFieldsEvent() {
    buttonCAF.addEventListener('click', showCAFields);
}
// function to show current asset fields and calculate total assets (TCA)
function showCAFields() {
    // declare local variables
    /* The problem here is use var to declare. You should use let or const (in this case let). 
    Notice you are declare iCash,etc as a number, then switching it to an element.

    */
    //var iCash = 0, iInventory = 0, iSupplies = 0, iTempInv = 0, TCA = 0; <-- moved to global.
 
    const lineBreak = document.createElement("br");  //you don't need to do a line break if you use an element with a line break.
    // declare new node paragrah for displaying the fields
    let node = document.createElement("P");
    
    //
    let tCash = document.createTextNode("Cash:  ");
    // cash input variable with event listener
    var iCash = document.createElement("input");
    iCash.setAttribute("type", "number");
    iCash.setAttribute("id", "cash")
    
    //you don't need an event listener here and need to use an arrow function if you did
    //it this point you are showing the input box, but there is nothing in it. So
    //setting the data doesn't work here.
    
    /*
    iCash.addEventListener("input", calcTotal());
    // function to add the input cash to TCA

        function calcTotal() {
            TCA += iCash;
        }
        */

    // similar variables and functions for the other current assets
    let tInventory = document.createTextNode("Inventory:  ");
    let iInventory = document.createElement("input");
    iInventory.setAttribute("type", "number");
    iInventory.setAttribute("id", "inventory");
   
    let tSupplies = document.createTextNode("Supplies:  ");
    let iSupplies = document.createElement("input");
    iSupplies.setAttribute("type", "number");
    iSupplies.setAttribute("id", "supplies");
    
    let tTempInv = document.createTextNode("Temporary Investments: ");
    let iTempInv = document.createElement("input");
    iTempInv.setAttribute("type", "number");
    iTempInv.setAttribute("id", "tempinv");
 
    //let totCurrentAssets = document.createTextNode("Total Current Assets: "); 
    let totCurrentAssets = document.createElement("span");
    totCurrentAssets.setAttribute("id", "total-current-assets")
    totCurrentAssets.innerHTML = "Total Current Assets: ";

    // appending the current assets nodes for display
    node.appendChild(tCash);
    node.appendChild(iCash);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(tInventory);
    node.appendChild(iInventory);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(tSupplies);
    node.appendChild(iSupplies);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(tTempInv);
    node.appendChild(iTempInv);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(totCurrentAssets);
    document.getElementById("assetsCurrent").appendChild(node);

    // configuring the current asset button so that it won't display the current asset fields again
    document.getElementById("buttonCAF").style.display = "none";

    
    // returning TCA for use in calculating total position 
    //return (TCA) <-- you don't need to return this.
}

function calculatePosition() {           
    let cash = parseFloat(document.getElementById("cash").value);
    let inventory = parseFloat(document.getElementById("inventory").value);
    let supplies = parseFloat(document.getElementById("supplies").value);
    let tempInv = parseFloat(document.getElementById("tempinv").value);
    let TCA = cash + inventory + supplies + tempInv;
    let totCurrentAssets = document.getElementById("total-current-assets");
    totCurrentAssets.innerHTML = "Total Current Assets: " + TCA;
    console.log(TCA);
    
    //let textTCA = TCA;
    //var node = document.createTextNode(TCA);
    //document.getElementById("showTCA").appendChild(node);
}

