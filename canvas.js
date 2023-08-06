let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//API
let tool = canvas.getContext("2d");

tool.strokeStyle = "blue";
tool.lineWidth = "8";

tool.beginPath(); // new graphic (path) (line)
tool.moveTo(10, 10); //start point
tool.lineTo(100, 150); // end point
tool.stroke(); // fill color (fill graphic)

tool.beginPath();
tool.moveTo(10, 10)
tool.lineTo(200, 200);
tool.stroke();
