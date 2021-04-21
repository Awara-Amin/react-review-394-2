// var React = require("react");
import React from "react";
// var ReactDOM = require("react-dom");
import ReactDOM from "react-dom";

// ReactDOM.render(what to SharedWorker, where to show it);
ReactDOM.render(
  <div>
    {/* imajin we write plain HTML in javaScript file WOW */}
    <h1> what to show kaka </h1>
    <p> here we try to have two elements in a div</p>
  </div>,
  document.getElementById("root")
);

// THat is how we used to write in Vanella javaScript
var h1 = document.createElement("h1");
h1.innerHTML = "This way is like how we used to do it using vanella javaScript";
document.getElementById("root").appendChild(h1);
