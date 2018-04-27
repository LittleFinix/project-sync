import * as React from "react"
import * as ReactDOM from "react-dom"
import FunnyButton from "./ReactTut/reactTut"

let app : HTMLElement = document.createElement("div");

ReactDOM.render(<FunnyButton buttonText= "Clicke me" />, app);

document.body.appendChild(app);






