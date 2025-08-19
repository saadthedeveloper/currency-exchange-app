const BASE_URL =
    "https://hexarate.paikama.co/api/rates/latest/inr?target=pkr";

const dropdowns = document.querySelectorAll(".select-container select");
const button = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
let convertedAmountSlot = document.querySelector("#converted-amount-div")

for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append(newOption);
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if
            (select.name === "to" && currCode === "AUD") {
            newOption.selected = "selected";
        };
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
};

function updateFlag(element) {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newFlagLink = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newFlagLink;


    ; img.src = newFlagLink;


};

button.addEventListener("click", async(evt) => {
    evt.preventDefault();
    let amountInput = document.querySelector("form .amount input");
    let amountInputValue = Number(amountInput.value);
    console.log(amountInputValue);
    if (amountInputValue === "" || amountInputValue < 1) {
        amountInput.value = 1;
        amountInputValue = 1;
    }
    const URL = `https://hexarate.paikama.co/api/rates/latest/${fromCurr.value.toLowerCase()}?target=${toCurr.value.toLowerCase()}`;
    let response = await fetch(URL);
    console.log(response);
    let usableData = await response.json();
    let convertedAmount = usableData.data.mid * amountInputValue;

    convertedAmountSlot.innerText = convertedAmount;



});
