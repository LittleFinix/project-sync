import * as React from "react"
import * as ReactDOM from "react-dom"
import FunnyButton, { MenuBar } from "./ReactTut/reactTut"



let app : HTMLElement = document.createElement("div");
let menu : HTMLElement = document.createElement("div");

menu.className = "MenuContainer";

ReactDOM.render(<MenuBar/>, menu);
ReactDOM.render(<FunnyButton buttonText= "Clicke me" />, app);





document.body.appendChild(app);
document.body.appendChild(menu);







