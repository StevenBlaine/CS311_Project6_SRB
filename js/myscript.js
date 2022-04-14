// functions to attach events to buttons
addShowCAFieldsEvent();
addShowCLFieldsEvent();
addShowIPEFieldsEvent();
addShowLTLFieldsEvent();
addShowIntFieldsEvent();

// set event to show the current asset label and input "fields" 
function addShowCAFieldsEvent() {
    buttonCAF.addEventListener('click', showCAFields);
}

// function to show current asset fields
function showCAFields() {
    const lineBreak = document.createElement("br");
    let node = document.createElement("P");
    
    let tCash = document.createTextNode("Cash:  ");
    var iCash = document.createElement("input");
    iCash.setAttribute("type", "number");
    iCash.setAttribute("id", "cash");
  
    let tInventory = document.createTextNode("Inventory:  ");
    var iInventory = document.createElement("input");
    iInventory.setAttribute("type", "number");
    iInventory.setAttribute("id", "inventory");

    let tSupplies = document.createTextNode("Supplies:  ");
    var iSupplies = document.createElement("input");
    iSupplies.setAttribute("type", "number");
    iSupplies.setAttribute("id", "supplies");
    
    let tTempInv = document.createTextNode("Temporary Investments: ");
    var iTempInv = document.createElement("input");
    iTempInv.setAttribute("type", "number");
    iTempInv.setAttribute("id", "tempinv");

    let totCurrentAssets = document.createElement("span");
    totCurrentAssets.setAttribute("id", "total-current-assets");
    totCurrentAssets.innerHTML = "Total Current Assets: $"; 

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

    // configuring current asset button so it won't display current asset fields again
    document.getElementById("buttonCAF").style.display = "none";
}

// similar code for the other sections of balance sheet 
function addShowCLFieldsEvent() {
    buttonCLF.addEventListener('click', showCLFields);
}

function showCLFields() {
    const lineBreak = document.createElement("br");
    let node = document.createElement("P");
    
    let tAcctsPay = document.createTextNode("Accounts Payable:  ");
    var iAcctsPay = document.createElement("input");
    iAcctsPay.setAttribute("type", "number");
    iAcctsPay.setAttribute("id", "acctspay");

    let tNotesPay = document.createTextNode("Notes Payable:  ");
    var iNotesPay = document.createElement("input");
    iNotesPay.setAttribute("type", "number");
    iNotesPay.setAttribute("id", "notespay");

    let tIntPay = document.createTextNode("Interest Payable:  ");
    var iIntPay = document.createElement("input");
    iIntPay.setAttribute("type", "number");
    iIntPay.setAttribute("id", "intpay");

    let tWagesPay = document.createTextNode("Wages Payable: ");
    var iWagesPay = document.createElement("input");
    iWagesPay.setAttribute("type", "number");
    iWagesPay.setAttribute("id", "wages");

    let tAccruedExp = document.createTextNode("Accrued Expenses: ");
    var iAccruedExp = document.createElement("input");
    iAccruedExp.setAttribute("type", "number");
    iAccruedExp.setAttribute("id", "accexp");

    let totCurrentLiab = document.createElement("span");
    totCurrentLiab.setAttribute("id", "total-current-liab");
    totCurrentLiab.innerHTML = "Total Current Liabilities: ";

    node.appendChild(tAcctsPay);
    node.appendChild(iAcctsPay);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(tNotesPay);
    node.appendChild(iNotesPay);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(tIntPay);
    node.appendChild(iIntPay);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(tWagesPay);
    node.appendChild(iWagesPay);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(tAccruedExp);
    node.appendChild(iAccruedExp);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(totCurrentLiab);
    document.getElementById("liabilitiesCurrent").appendChild(node);

    document.getElementById("buttonCLF").style.display = "none";
}

function addShowIPEFieldsEvent() {
    buttonIPEF.addEventListener('click', showIPEFields);
}

function showIPEFields() {
    const lineBreak = document.createElement("br");
    let node = document.createElement("P");
    
    let tLand = document.createTextNode("Land:  ");
    var iLand = document.createElement("input");
    iLand.setAttribute("type", "number");
    iLand.setAttribute("id", "land");

    let tBldg = document.createTextNode("Building and Improvements:  ");
    var iBldg = document.createElement("input");
    iBldg.setAttribute("type", "number");
    iBldg.setAttribute("id", "bldg");

    let tEquip = document.createTextNode("Equipment:  ");
    var iEquip = document.createElement("input");
    iEquip.setAttribute("type", "number");
    iEquip.setAttribute("id", "equip");
 
    let tTempInv2 = document.createTextNode("Temporary Investments: ");
    var iTempInv2 = document.createElement("input");
    iTempInv2.setAttribute("type", "number");
    iTempInv2.setAttribute("id", "tempinv2");
    
    let totInvPropEqip = document.createElement("span");
    totInvPropEqip.setAttribute("id", "total-inv-prop-equip");
    totInvPropEqip.innerHTML = "Total Investment Property and Equipment: $";

    node.appendChild(tLand);
    node.appendChild(iLand);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(tBldg);
    node.appendChild(iBldg);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(tEquip);
    node.appendChild(iEquip);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(tTempInv2);
    node.appendChild(iTempInv2);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(totInvPropEqip);
    document.getElementById("investments").appendChild(node);

    document.getElementById("buttonIPEF").style.display = "none";
}

function addShowLTLFieldsEvent() {
    buttonLTLF.addEventListener('click', showLTLFields);
}

function showLTLFields() {
    const lineBreak = document.createElement("br");
    var node = document.createElement("P");
    
    let tNotesPay = document.createTextNode("Notes Payable:  ");
    var iNotesPay = document.createElement("input");
    iNotesPay.setAttribute("type", "number");
    iNotesPay.setAttribute("id", "notespay2");

    let tBondsPay = document.createTextNode("Bonds Payable:  ");
    var iBondsPay = document.createElement("input");
    iBondsPay.setAttribute("type", "number");
    iBondsPay.setAttribute("id", "bondspay");

    let totLongTermLiab = document.createElement("span"); 
    totLongTermLiab.setAttribute("id", "total-longterm-liab");
    totLongTermLiab.innerHTML = "Total Long-Term Liabilities: $"; 

    node.appendChild(tNotesPay);
    node.appendChild(iNotesPay);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(tBondsPay);
    node.appendChild(iBondsPay);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(totLongTermLiab);
    document.getElementById("liabilitiesLongTerm").appendChild(node);

    document.getElementById("buttonLTLF").style.display = "none";
}

function addShowIntFieldsEvent() {
    buttonInt.addEventListener('click', showIntFields);
}

function showIntFields() {
    const lineBreak = document.createElement("br");
    var node = document.createElement("P");
    
    let tTradeNames = document.createTextNode("Trade Names:  ");
    var iTradeNames = document.createElement("input");
    iTradeNames.setAttribute("type", "number");
    iTradeNames.setAttribute("id", "tradenames");

    let tGoodwill = document.createTextNode("Goodwill:  ");
    var iGoodwill = document.createElement("input");
    iGoodwill.setAttribute("type", "number");
    iGoodwill.setAttribute("id", "goodwill");

    let totIntangibles = document.createElement("span"); 
    totIntangibles.setAttribute("id", "total-intangibles");
    totIntangibles.innerHTML = "Total Intangibles: $"; 

    node.appendChild(tTradeNames);
    node.appendChild(iTradeNames);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(tGoodwill);
    node.appendChild(iGoodwill);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(totIntangibles);
    document.getElementById("intangibles").appendChild(node);

    document.getElementById("buttonInt").style.display = "none";
}

// code for calcuating total position
function calculatePosition() {
    let cash = parseFloat(document.getElementById("cash").value);
    let inventory = parseFloat(document.getElementById("inventory").value);
    let supplies = parseFloat(document.getElementById("supplies").value);
    let tempInv = parseFloat(document.getElementById("tempinv").value);
    let TCA = cash + inventory + supplies + tempInv;
    let totCurrentAssets = document.getElementById("total-current-assets");
    totCurrentAssets.innerHTML = "Total Current Assets: $"+TCA;
    console.log(TCA);       

    let acctspay = parseFloat(document.getElementById("acctspay").value);
    let notespay = parseFloat(document.getElementById("notespay").value);
    let intpay = parseFloat(document.getElementById("intpay").value);
    let wages = parseFloat(document.getElementById("wages").value);
    let accexp = parseFloat(document.getElementById("accexp").value);
    let TCL = acctspay + notespay + intpay + wages + accexp;
    let totCurrentLiab = document.getElementById("total-current-liab");
    totCurrentLiab.innerHTML = "Total Current Liabilities: $"+TCL;
    console.log(TCL);

    let land = parseFloat(document.getElementById("land").value);
    let bldg = parseFloat(document.getElementById("bldg").value);
    let equip = parseFloat(document.getElementById("equip").value);
    let tempinv2 = parseFloat(document.getElementById("tempinv2").value);
    let TIPE = land + bldg + equip + tempinv2;
    let totInvProp = document.getElementById("total-inv-prop-equip");
    totInvProp.innerHTML = "Total Investment Property and Equipment: $"+TIPE;
    console.log(TIPE);

    let notespay2 = parseFloat(document.getElementById("notespay2").value);
    let bondspay = parseFloat(document.getElementById("bondspay").value);
    let TLTL = notespay2 + bondspay;
    let totLongTermLiab = document.getElementById("total-longterm-liab");
    totLongTermLiab.innerHTML = "Total Long-Term Liabilities: $"+TLTL;
    console.log(TLTL);

    let tradenames = parseFloat(document.getElementById("tradenames").value);
    let goodwill = parseFloat(document.getElementById("goodwill").value);
    let TI = tradenames + goodwill;
    let totIntangibles = document.getElementById("total-intangibles");
    totIntangibles.innerHTML = "Total Intangibles: $"+TI;
    console.log(TI); 

    document.getElementById("totalAssets").innerHTML = "Total Assets: $"+(TCA+TIPE+TI);
    document.getElementById("totalAssets").style.fontWeight = "bold";    
    document.getElementById("totalLiab").innerHTML = "Total Liabilities: $"+(TCL+TLTL);
    document.getElementById("totalLiab").style.fontWeight = "bold";
    document.getElementById("position").innerHTML = "Position: $"+((TCA+TIPE+TI)-(TCL+TLTL));
    document.getElementById("position").style.fontWeight = "bold";
}