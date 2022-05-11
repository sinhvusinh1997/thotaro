'use strict';
import AbstractView from "./AbstractView.js";

function renderH1(title) {
    return `<h1>${title}</h1>`;
}

function renderNav() {

    const titles = ["home", "artical", "product", "about"];

    return (
        `
        <ul class="nav__list">
            <li class="nav__item" style="cursor: pointer" data-nav-directors=${titles[0]}>${titles[0]}</li>
            <li class="nav__item" style="cursor: pointer" data-nav-directors=${titles[1]}>${titles[1]}</li>
            <li class="nav__item" style="cursor: pointer" data-nav-directors=${titles[2]}>${titles[2]}</li>
            <li class="nav__item" style="cursor: pointer" data-nav-directors=${titles[3]}>${titles[3]}</li>
        </ul>
        `
    )
}

export default class Header extends AbstractView {
    constructor(id) {
        super(id);
    }

    render() {
        return `
            ${renderH1("This is Header")}
            ${renderNav()}
        `;
    }

};