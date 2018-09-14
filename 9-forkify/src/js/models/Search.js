import axios from 'axios';
import { APIkey } from '../../../key';

export default class Search {
    constructor( query ) {
        this.query = query;
    }
    async getResults() {
        const key = APIkey;
        try {
            const res = await axios( `http://food2fork.com/api/search?key=${ key }&q=${ this.query }` );
            this.result = res.data.recipes;
        } catch ( error ) {
            alert( error );
        }
    }
}








