function myfunc() {
  const inputNumber = parseInt(document.getElementById("input").value);
  
  if (inputNumber >= 0 && inputNumber <= 100000) {
    const romanNumeral = intToRoman(inputNumber);
    Show.innerHTML = romanNumeral;
  } else {
    Show.innerHTML = "Input out of range";
  }
}

function intToRoman(num) {
  const romanSymbols = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
  ];

  let result = "";

  for (const symbol of romanSymbols) {
    while (num >= symbol.value) {
      result += symbol.symbol;
      num -= symbol.value;
    }
  }

  return result;
}