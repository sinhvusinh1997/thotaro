'use strict';

import AbstractView from "./AbstractView";

function test() {
    console.log(this.data);
}

export default class Banner extends AbstractView{
    constructor(id, data) {
        super(id, data)
    }

    

    render() {
        return `
            <h1
                onClick="test1"
            >This is Banner</h1>
        `
    }
}