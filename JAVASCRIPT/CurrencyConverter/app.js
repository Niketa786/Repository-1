const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Populate dropdowns with currency codes from codes.js
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    
    // Set default selections
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  
  // Validation for empty or negative input
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  const from = fromCurr.value.toLowerCase();
  const to = toCurr.value.toLowerCase();
  
  // The API requires the base currency followed by .json
  const URL = `${BASE_URL}/${from}.json`;

  try {
    msg.innerText = "Getting exchange rate...";
    let response = await fetch(URL);
    if (!response.ok) throw new Error("Network response was not ok");
    
    let data = await response.json();
    
    // The API returns data as { "date": "...", "usd": { "inr": 83.5, ... } }
    let rate = data[from][to];

    let finalAmount = (amtVal * rate).toFixed(2);
    msg.innerText = `${amtVal} ${from.toUpperCase()} = ${finalAmount} ${to.toUpperCase()}`;
  } catch (error) {
    msg.innerText = "Error fetching rate. Check internet.";
    console.error("Fetch Error:", error);
  }
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

// Event listener for the Get Exchange Rate button
btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

// Fetch exchange rate automatically on page load
window.addEventListener("load", () => {
  updateExchangeRate();
});