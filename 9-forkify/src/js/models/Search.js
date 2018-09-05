
import axios from 'axios';

export default class Search {
    constructor( query ) {
        this.query = query;
    }
    async getResults() {
        const key = '4931037c4da1dfcb2db81066924566d0';
        try {
            const res = await axios( `http://food2fork.com/api/search?key=${ key }&q=${ this.query }` );
            this.result = res.data.recipes;
        } catch ( error ) {
            alert( error );
        }
    }
}








