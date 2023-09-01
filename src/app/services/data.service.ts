import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private httpClient: HttpClient) { }
    baseURL = "https://fakestoreapi.com";
    getAllRiskData() {
        return this.httpClient.get(`${this.baseURL}/products/categories`);
    }

    getAllScoreData() {
        return this.httpClient.get(`${this.baseURL}/products`);
    }

}
