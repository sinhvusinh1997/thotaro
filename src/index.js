import "./assets/scss/index.scss";
import {
    Components,
    renderPageSelected,
    transferData,
} from "./assets/admin/Controller.js";


const DOMRoot = document.getElementById("root");


function renderFirst(root, components) {
    /** Note:
     * 1. Loop through Components, if isFirstRender === true, then:
     *  1.1. to create div#id and call render() of each component
     *  1.2. innerHTML component into root 
     */

    transferData();

    components.forEach(item => {
        if (item.isFirstRender) {
            const typeContainer = document.createElement("div");
            typeContainer.id = item.name.id;
            typeContainer.innerHTML = item.name.render();
            root.appendChild(typeContainer);
        }
    });
};

function pagesDirector() {
    /** Note: 
     * 1. Get value of data attribute [data-nav-director] in headerContainer
     * 2. Tranfer valueNav to Controller to get render of target page
     * 3. Add target page
     */

    const DOMNavDirector = document.querySelectorAll("[data-nav-directors]");

    DOMNavDirector.forEach(navDirector => {
        navDirector.addEventListener("click", e => {
            const pageLabel = e.target.dataset.navDirectors;
            const getHTML = renderPageSelected(pageLabel);
            DOMRoot.children[2].innerHTML = getHTML;
        })
    });

}


/** 
 * 1. For first time: render list of parent componets
 * 2. Select Root
 * 3. AppendChild for headerContainer, bannerContainer, contentContainer, footerContainer
 */
window.addEventListener("DOMContentLoaded", renderFirst(DOMRoot, Components));

window.addEventListener("load", pagesDirector());



// switch (document.readyState) {
//     case "loading":
//         console.log("Loading...");
//         break;
//     case "interactive":
//         // The document has finished loading. We can now access the DOM elements.
//         // But sub-resources such as scripts, images, stylesheets and frames are still loading.
//         console.log("Interactive...");
//         break;
//     case "complete":
//         // The page is fully loaded.
//         console.log("Complete!");
//         break;
// }