'use strict';
import AbstractView from "./AbstractView.js";

export default class Home extends AbstractView{
    constructor(id, data) { 
        super(id, data);
    }

    render() {
        return `
        <h1>This is ${this.data.label}</h1>
        <a href="">${this.data.link}</a>
        <p>${this.data.description}</p>
        `
    }
}

