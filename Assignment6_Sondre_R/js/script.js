const taxEl = document.getElementById("tax");
const wealthEl = document.getElementById("wealth")
const incomeEl = document.getElementById("income")
// gets the element from html

function calTax() {
    taxEl.value = (0.35*incomeEl.value) + (0.25*wealthEl.value);
    // calculates the tax based on the income and wealth
}

incomeEl.addEventListener("change", calTax);
wealthEl.addEventListener("change", calTax);
// Added eventlistener on change on both income and wealth, which calculates the tax when either is changed
