// chrome.storage.local.get("timeData", (res) => {
//   const data = res.timeData || {};
//   const labels = Object.keys(data);
//   const values = labels.map(site => Math.round(data[site] / 60000));

//   const ctx = document.getElementById("chart").getContext("2d");
//   new Chart(ctx, {
//     type: "bar",
//     data: {
//       labels: labels,
//       datasets: [{
//         label: 'Minutes Spent',
//         data: values,
//         backgroundColor: labels.map(site =>
//           site.includes("youtube") || site.includes("facebook")
//             ? "red"
//             : "green"
//         ),
//       }]
//     }
//   });
// });