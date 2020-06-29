import './meal-item.js';

class MealList extends HTMLElement {
    
    set meals(meals) {
        this._meals = meals;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this._meals.forEach(meal => {
            const mealItemElement = document.createElement("meal-item");
            mealItemElement.meal = meal
            this.appendChild(mealItemElement);
        })
    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `
        <style>
            .alert {
                width: 80%;
                margin: auto;
            }
        </style>
        
        <div class="alert alert-danger" role="alert">${message}</div>`;
    }
}

customElements.define("meal-list", MealList);