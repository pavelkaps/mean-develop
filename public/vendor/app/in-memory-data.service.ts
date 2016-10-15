/**
 * Created by Паша on 06.10.2016.
 */
import {InMemoryDbService} from 'angular-in-memory-web-api'

export class InMemoryDataService implements InMemoryDbService{
    createDb():{} {

        let books = [
            {id: 11, title: 'Mr. Nice', year: 1998, author: 'N/A'},
            {id: 12, title: 'Narco', year: 1800, author: 'N/A'},
            {id: 13, title: 'Bombasto', year: 1950, author: 'N/A'},
            {id: 14, title: 'Celeritas', year: 1475, author: 'N/A'},
            {id: 15, title: 'Magneta', year: 1990, author: 'N/A'},
            {id: 16, title: 'RubberMan',year: 1994, author: 'N/A'},
            {id: 17, title: 'Dynama', year: 1998, author: 'N/A'},
            {id: 18, title: 'Dr IQ',year: 1997, author: 'N/A'},
            {id: 19, title: 'Magma', year: 1998, author: 'N/A'},
            {id: 20, title: 'Tornado', year: 1992, author: 'N/A'}
        ];

        return {books};
    }

}