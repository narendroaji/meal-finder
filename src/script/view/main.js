import "../component/meal-list.js";
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const mealListElement = document.querySelector("meal-list");

    // !Menggunakan Async/Await
    // const onButtonSearchClicked = async () => {
    //     try{
    //         const result = await DataSource.searchMeal(searchElement.value);
    //         renderResult(result);
    //     } catch (message) {
    //         fallbackResult(message);
    //     }
    // };

    // *Menggunakan Promise
    // ?Bebas pilih mana saja tergantung kesukaaan
    const onButtonSearchClicked = () => {
        DataSource.searchMeal(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = results => {
        mealListElement.meals = results;
    };

    const fallbackResult = message => {
        mealListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;