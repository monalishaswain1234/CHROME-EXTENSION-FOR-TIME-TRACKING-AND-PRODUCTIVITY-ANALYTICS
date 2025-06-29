// const socket = io();

// function sendMessage() {
//   const user = document.getElementById("username").value;
//   const msg = document.getElementById("message").value;
//   if (user && msg) {
//     socket.emit("chat message", `${user}: ${msg}`);
//     document.getElementById("message").value = "";
//   }
// }

// socket.on("chat message", function(msg) {
//   const msgDiv = document.createElement("div");
//   msgDiv.textContent = msg;
//   document.getElementById("messages").appendChild(msgDiv);
// });