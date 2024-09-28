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

      my_modal_5.showModal();

      // time
      const d = new Date();

      // history
      if (id1 === "noakhali-donet") {
        getEleID(
          "history"
        ).innerHTML += `<div class="border rounded-xl p-8 mb-6">
          <h1 class="text-xl font-semibold">
            ${donetAmount} Taka is Donated for Flood Relief in Noakhali, Bangladesh
          </h1>
          <p class="text-base font-light mt-4">Date: ${d} </p>
        </div>`;
      } else if (id1 === "feni-donet") {
        getEleID(
          "history"
        ).innerHTML += `<div class="border rounded-xl p-8 mb-6">
          <h1 class="text-xl font-semibold">
            ${donetAmount} Taka is Donated for Flood Relief in Feni, Bangladesh
          </h1>
          <p class="text-base font-light mt-4">Date: ${d} </p>
        </div>`;
      } else if (id1 === "quota-donet") {
        getEleID(
          "history"
        ).innerHTML += `<div class="border rounded-xl p-8 mb-6">
          <h1 class="text-xl font-semibold">
            ${donetAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh
          </h1>
          <p class="text-base font-light mt-4">Date: ${d} </p>
        </div>`;
      }
    } else {
      alert("You can not donet");
    }
  });
}

// show elements by id
function toggle(id) {
  getEleID("card-container").classList.add("hidden");
  getEleID("history").classList.add("hidden");
  getEleID(id).classList.remove("hidden");
}
