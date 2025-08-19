const BASE_URL =
    "https://hexarate.paikama.co/api/rates/latest/inr?target=pkr";

const dropdowns = document.querySelectorAll(".select-container select");

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