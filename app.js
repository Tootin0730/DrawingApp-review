const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200, 200, 20, 100);
ctx.fillRect(240, 200, 100, 200);
ctx.fillRect(360, 200, 20, 100);
ctx.arc(290, 130, 60, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(310, 110, 8, Math.PI, 2 * Math.PI);
ctx.arc(270, 110, 8, Math.PI, 2 * Math.PI);
ctx.fill();

