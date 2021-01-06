import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getBeerList() {
    return this.http.get<Beer>('https://api.openbrewerydb.org/breweries');
  }

  getBeer(id: number = 0) {
    return this.http.get(`https://api.openbrewerydb.org/breweries/${id}`);
  }

  searchBeerList(query: string = '') {
    return this.http.get<Beer>(
      `https://api.openbrewerydb.org/breweries/search?query=${query}`
    );
  }
}

export interface Beer {
  id: number;
  name: string;
  country: string;
  brewery_type: string;
  street: string;
  city: string;
  state: string;
}
