class MealItem extends HTMLElement{

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="row justify-content-center">
            <div class="col-sm-10 rounded rounded-lg mb-4 bg-light shadow p-3">
                <table class="table table-sm table-borderless table-responsive text-dark">
                    <tr>
                        <td colspan="2"><img src="${this._meal.strMealThumb}" alt="Fan Art" width="40%" class="mx-auto d-block"></td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td class="text-justify">${this._meal.strMeal}</td>
                    </tr>
                    <tr>
                        <th>Category</th>
                        <td class="text-justify">${this._meal.strCategory}</td>
                    </tr>
                    <tr>
                        <th>Origin</th>
                        <td class="text-justify">${this._meal.strArea}</td>
                    </tr>
                    <tr>
                        <th>Instruction</th>
                        <td class="text-justify">${this._meal.strInstructions}</td>
                    </tr>
                </table>
            </div>
        </div>`;
    }
}

customElements.define("meal-item", MealItem);