import "./script/component/app-bar.js";
import "regenerator-runtime";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "dark-mode-switch/dark-mode.css";
import "dark-mode-switch/dark-mode-switch.js";

import logo from "./style/img/logo-small.png";
document.querySelector('#logo').src = logo;

import main from "./script/view/main.js";
document.addEventListener("DOMContentLoaded", main);