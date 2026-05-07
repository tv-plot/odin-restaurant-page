import "./style.css";
import { renderHome, deactivate as deactivateHome } from "./home.js";
import { renderMenu, deactivate as deactivateMenu } from "./menu.js";
import { renderAbout, deactivate as deactivateAbout } from "./about.js";

const content = document.getElementById("content");

const homeNavBtn = document.getElementById("home-btn");
homeNavBtn.addEventListener("click", e => {
    homeNavBtn.classList.toggle('button-active');
    toggleButtonIfActive(menuNavBtn);
    toggleButtonIfActive(aboutNavBtn);
    deactivateMenu();
    deactivateAbout();
    renderHome();
});

const menuNavBtn = document.getElementById("menu-btn");
menuNavBtn.addEventListener("click", e => {
    menuNavBtn.classList.toggle('button-active');
    toggleButtonIfActive(homeNavBtn);
    toggleButtonIfActive(aboutNavBtn);
    deactivateHome();
    deactivateAbout();
    renderMenu();
});

const aboutNavBtn = document.getElementById("about-btn");
aboutNavBtn.addEventListener("click", e => {
    aboutNavBtn.classList.toggle('button-active');
    toggleButtonIfActive(menuNavBtn);
    toggleButtonIfActive(homeNavBtn);
    deactivateHome();
    deactivateMenu();
    renderAbout();
});

function toggleButtonIfActive(btn) {
    if (btn.classList.contains('button-active')) {
        btn.classList.toggle('button-active');
    }
}

renderHome();