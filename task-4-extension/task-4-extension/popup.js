// chrome.storage.local.get("timeData", (res) => {
//   const summary = document.getElementById("summary");
//   const data = res.timeData || {};
//   let html = "";
//   for (let site in data) {
//     const min = Math.round(data[site] / 60000);
//     html += `<p><b>${site}</b>: ${min} min</p>`;
//   }
//   summary.innerHTML = html;
// });