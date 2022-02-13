function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const pin = getPin();
  //Methods 1
  //   const generatedPin = document.getElementById("show-pin");
  //   generatedPin.value = pin;
  //Method 2
  document.getElementById("show-pin").value = pin;
}
//calculator
document.getElementById("key-pad").addEventListener("click", function (event) {
  const calcInput = event.target.innerText;
  const displayKey = document.getElementById("display-key");
  if (isNaN(calcInput)) {
    if (calcInput == "C") {
      displayKey.value = "";
    }
  } else {
    const previusNumber = displayKey.value;
    const currentNumber = previusNumber + calcInput;
    displayKey.value = currentNumber;
  }
});

//Pin Matching
function varifyPin() {
  const displayKey = document.getElementById("display-key");
  const inputField = displayKey.value;
  const showPin = document.getElementById("show-pin");
  const pinInput = showPin.value;
  const successed = document.getElementById("success-massage");
  const faild = document.getElementById("fail-massage");
  if (pinInput == inputField) {
    successed.style.display = "block";
    faild.style.display = "none";
    displayKey.value = "";
    showPin.value = "";
  } else {
    faild.style.display = "block";
    successed.style.display = "none";
  }
}
