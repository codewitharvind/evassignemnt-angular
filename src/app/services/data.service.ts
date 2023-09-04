/*
#############################################################################
# Name : data.service.ts
# Created by : Arvind Yadav
# Date       : 2nd Sept 2023
# Purpose    : This file is used to provide API data 
#############################################################################
*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

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
