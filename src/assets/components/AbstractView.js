'use strict';


export default class AbstractView {
    constructor(id, data) {
        this.id = id || "Don't have id, yet!";
        this.data = data || "Don't have data, yet!";
    }

    showData() {
        return `Data ${this.id}: ${JSON.stringify(this.data)}`;
    }

    setData(data) {
        return this.data = data;
    };

    render() { "" }
}