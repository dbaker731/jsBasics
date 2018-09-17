import Search from "./models/Search";
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from "./views/base";

const state = {};

const ctrlSearch = async () => {
    // get query from view
    const query = searchView.getInput(); //TODO   

    if ( query ) {
        // New search object and add it to state
        state.search = new Search( query );

        // Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader( elements.searchRes );

        // Search for recipies
        await state.search.getResults();

        // Render results on UI
        clearLoader();
        searchView.rederResults( state.search.result );
        
    }
}

elements.searchForm.addEventListener( 'submit', e => {
    e.preventDefault();
    ctrlSearch();
} );







