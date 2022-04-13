addShowCAFieldsEvent();
addShowCLFieldsEvent();
addShowIPEFieldsEvent();
addShowLTLFieldsEvent();
addShowIntFieldsEvent();
addCalcTotalEvent();

var TCA;

function addShowCAFieldsEvent() {
    buttonCAF.addEventListener('click', showCAFields);
}

function showCAFields() {
    var iCash = 0, iInventory = 0, iSupplies = 0, iTempInv = 0, TCA = 0; 
    const lineBreak = document.createElement("br");
    var node = document.createElement("P");
    
    var cash = document.createTextNode("Cash:  ");
    var iCash = document.createElement("input");
    iCash.setAttribute("type", "number");
    iCash.addEventListener("input", calcTotal());
    
        function calcTotal() {
            TCA += iCash;
        }

    var inventory = document.createTextNode("Inventory:  ");
    var iInventory = document.createElement("input");
    iInventory.setAttribute("type", "number");
    iInventory.addEventListener("input", calcTotal());
    
        function calcTotal() {
            TCA += iInventory;
        }

    var supplies = document.createTextNode("Supplies:  ");
    var iSupplies = document.createElement("input");
    iSupplies.setAttribute("type", "number");
    iSupplies.addEventListener("input", calcTotal());
    
        function calcTotal() {
            TCA += iSupplies;
        }
    
    var tempInv = document.createTextNode("Temporary Investments: ");
    var iTempInv = document.createElement("input");
    iTempInv.setAttribute("type", "number");
    iTempInv.addEventListener("input", calcTotal());
    
        function calcTotal() {
            TCA += iTempInv;
        }

    var totCurrentAssets = document.createTextNode("Total Current Assets: "); 


    node.appendChild(cash);
    node.appendChild(iCash);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(inventory);
    node.appendChild(iInventory);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(supplies);
    node.appendChild(iSupplies);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(tempInv);
    node.appendChild(iTempInv);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(totCurrentAssets);
    document.getElementById("assetsCurrent").appendChild(node);

    document.getElementById("buttonCAF").style.display = "none";

    return (TCA);
}

function addShowCLFieldsEvent() {
    buttonCLF.addEventListener('click', showCLFields);
}

function showCLFields() {
    const lineBreak = document.createElement("br");
    var node = document.createElement("P");
    
    var acctsPay = document.createTextNode("Accounts Payable:  ");
    var iAcctsPay = document.createElement("input");
    iAcctsPay.setAttribute("type", "number");

    var notesPay = document.createTextNode("Notes Payable:  ");
    var iNotesPay = document.createElement("input");
    iNotesPay.setAttribute("type", "number");

    var intPay = document.createTextNode("Interest Payable:  ");
    var iIntPay = document.createElement("input");
    iIntPay.setAttribute("type", "number");
 
    var wagesPay = document.createTextNode("Wages Payable: ");
    var iWagesPay = document.createElement("input");
    iWagesPay.setAttribute("type", "number");

    var accruedExp = document.createTextNode("Accrued Expenses: ");
    var iAccruedExp = document.createElement("input");
    iAccruedExp.setAttribute("type", "number");

    var totCurrentLiabilities = document.createTextNode("Total Current Liabilities: "); 

    node.appendChild(acctsPay);
    node.appendChild(iAcctsPay);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(notesPay);
    node.appendChild(iNotesPay);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(intPay);
    node.appendChild(iIntPay);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(wagesPay);
    node.appendChild(iWagesPay);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(accruedExp);
    node.appendChild(iAccruedExp);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(totCurrentLiabilities);
    document.getElementById("liabilitiesCurrent").appendChild(node);

    document.getElementById("buttonCLF").style.display = "none";
}

function addShowIPEFieldsEvent() {
    buttonIPEF.addEventListener('click', showIPEFields);
}

function showIPEFields() {
    const lineBreak = document.createElement("br");
    var node = document.createElement("P");
    
    var land = document.createTextNode("Land:  ");
    var iLand = document.createElement("input");
    iLand.setAttribute("type", "number");

    var bldg = document.createTextNode("Building and Improvements:  ");
    var iBldg = document.createElement("input");
    iBldg.setAttribute("type", "number");

    var equip = document.createTextNode("Equipment:  ");
    var iEquip = document.createElement("input");
    iEquip.setAttribute("type", "number");
 
    var tempInv2 = document.createTextNode("Temporary Investments: ");
    var iTempInv2 = document.createElement("input");
    iTempInv2.setAttribute("type", "number");

    var totInvPropEquip = document.createTextNode("Total Investment Property and Equipment: "); 

    node.appendChild(land);
    node.appendChild(iLand);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(bldg);
    node.appendChild(iBldg);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(equip);
    node.appendChild(iEquip);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(tempInv2);
    node.appendChild(iTempInv2);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(totInvPropEquip);
    document.getElementById("investments").appendChild(node);

    document.getElementById("buttonIPEF").style.display = "none";
}

function addShowLTLFieldsEvent() {
    buttonLTLF.addEventListener('click', showLTLFields);
}

function showLTLFields() {
    const lineBreak = document.createElement("br");
    var node = document.createElement("P");
    
    var notesPay = document.createTextNode("Notes Payable:  ");
    var iNotesPay = document.createElement("input");
    iNotesPay.setAttribute("type", "number");

    var bondsPay = document.createTextNode("Bonds Payable:  ");
    var iBondsPay = document.createElement("input");
    iBondsPay.setAttribute("type", "number");

    var totLongTermLiab = document.createTextNode("Total Long-Term Liabilities: "); 

    node.appendChild(notesPay);
    node.appendChild(iNotesPay);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(bondsPay);
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
    
    var tradeNames = document.createTextNode("Trade Names:  ");
    var iTradeNames = document.createElement("input");
    iTradeNames.setAttribute("type", "number");

    var goodwill = document.createTextNode("Goodwill:  ");
    var iGoodwill = document.createElement("input");
    iGoodwill.setAttribute("type", "number");

    var totIntangibles = document.createTextNode("Total Intangibles: "); 

    node.appendChild(tradeNames);
    node.appendChild(iTradeNames);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(goodwill);
    node.appendChild(iGoodwill);
    node.appendChild(lineBreak.cloneNode(true));
    node.appendChild(totIntangibles);
    document.getElementById("intangibles").appendChild(node);

    document.getElementById("buttonInt").style.display = "none";
}

function addCalcTotalEvent() {
    buttonCalcTot.addEventListener('click', calculatePosition(TCA));
        function calculatePosition(TCA) {
        /*  iCash = document.getElementsByName("iCash").value;
            iInventory = document.getElementByName("iInventory").value;
            iSupplies = document.getElementByName("iSupplies").value;
            iTempInv = document.getElementByName("iTempInv").value;
        */
            
            let textTCA = TCA.toString();
            var node = document.createTextNode(TCA);
            document.getElementById("showTCA").appendChild(node);
        }
}