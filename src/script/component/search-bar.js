class SearchBar extends HTMLElement {
    
    constructor(){
        super();
    }
    
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = 
        `<div class="row justify-content-center mx-3">
            <input class="form-control form-control-lg col-sm-6 bg-light mx-1 text-dark" type="text" id="searchElement" placeholder="Enter keyword">
            <button id="searchButtonElement" type="submit" class="btn btn-primary btn-lg mb-2">Search</button>
        </div>`;
        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);