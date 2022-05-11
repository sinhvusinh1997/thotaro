'use strict';
// Component Parents
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Banner from "../components/Banner";
import Home from "../components/Home.js";
import Product from "../components/Product.js";
import About from "../components/About.js";
import Artical from "../components/Artical.js";

import { data } from "./HandleFetchData.js";

// Object Compn
const Components = [
    {
        label: "header",
        isFirstRender: true,
        name: new Header("headerContainer"),
    },
    {
        label: "banner",
        isFirstRender: true,
        name: new Banner("bannerContainer"),
    },
    {
        label: "home",
        isFirstRender: true,
        name: new Home("homeContainer"),
    },
    {
        label: "footer",
        isFirstRender: true,
        name: new Footer("footerContainer"),
    },
    {
        label: "product",
        isFirstRender: false,
        name: new Product("productContainer"),
    },
    {
        label: "about",
        isFirstRender: false,
        name: new About("aboutContainer"),
    },
    {
        label: "artical",
        isFirstRender: false,
        name: new Artical("articalContainer"),
    },
];

function transferData() {
    console.log(data);

    Components.forEach(cp => {
        for (const label in data) {
            if (cp.label === label) {
                cp.name.setData(data[label]);
            }
        }
    })
}

function renderPageSelected(pageLabel) {
    const targetPage = Components.filter(cp => cp.label === pageLabel);
    console.log(targetPage[0].name.showData());
    return targetPage[0].name.render();

}

export { Components, renderPageSelected, transferData };