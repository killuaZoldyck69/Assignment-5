// get element by id
function getEleID(id) {
  return document.getElementById(id);
}

// get input form value
function getValue(id) {
  return document.getElementById(id).value;
}

// get innet text
function getInnerText(id) {
  return document.getElementById(id).innerText;
}

// donet function
function donetFunction(id1, id2, id3) {
  getEleID(id1).addEventListener("click", function (event) {
    event.preventDefault();

    const currentBalance = parseFloat(getInnerText("current-balance"));
    const donetAmount = parseFloat(getValue(id2));
    const noakhaliBalance = parseFloat(getInnerText(id3));
    if (donetAmount > 0 && currentBalance > 0) {
      const newBalance = currentBalance - donetAmount;
      document.getElementById("current-balance").innerText =
        newBalance + " BDT";
      const totalDonet = noakhaliBalance + donetAmount;
      document.getElementById(id3).innerText = totalDonet + " BDT";
    } else {
      alert("You can not donet");
    }
  });
}
