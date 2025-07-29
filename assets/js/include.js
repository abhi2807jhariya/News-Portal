
function includeHTML(file, elementId) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error("Include file not found");
      return response.text();
    })
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(err => console.error("Error loading include file:", err));
}

document.addEventListener("DOMContentLoaded", function () {
  includeHTML("assets/include/header.html ", "header");
  includeHTML("assets/include/footer.html", "footer");
  includeHTML("assets/include/sidebar.html", "aside");
});



  function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    // leading zero add karna
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    document.getElementById("live-time").innerText = hours + ":" + minutes;
  }

  // pehli baar run
  updateTime();

  // har 1 second me update
  setInterval(updateTime, 1000);






