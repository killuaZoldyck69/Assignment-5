getEleID("history-btn").addEventListener("click", function (event) {
  event.preventDefault();

  toggle("history");
  getEleID("history-btn").classList.add("bg-btnColor");
  getEleID("donation-btn").classList.remove("bg-btnColor");
});

getEleID("donation-btn").addEventListener("click", function (event) {
  event.preventDefault();

  toggle("card-container");
  getEleID("history-btn").classList.remove("bg-btnColor");
  getEleID("donation-btn").classList.add("bg-btnColor");
});
