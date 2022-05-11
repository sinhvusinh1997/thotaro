'use strict';

import AbstractView from "./AbstractView";

export default class Footer extends AbstractView {
    constructor(id, data) { 
        super(id, data)
    }

    render() {
        return `
            <h1>This is Footer</h1>
        `
    }
}