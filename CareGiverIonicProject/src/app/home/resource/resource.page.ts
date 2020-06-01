import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {isNumber} from 'util';

@Component({
    selector: 'app-resource',
    templateUrl: './resource.page.html',
    styleUrls: ['./resource.page.scss'],
})
export class ResourcePage implements OnInit {

    public zipCodeLocation: string;
    public placeToSearch: string;
    public placesResult: any[] = [{name: 'Empty List.'}];

    private httpClient: HttpClient;

    constructor(http: HttpClient) {
        this.httpClient = http;
    }

    ngOnInit() {
    }

    public async getPlacesNearby(url: string): Promise<any> {
        const proxyurl = 'https://cors-anywhere.herokuapp.com/';
        const result = await fetch(proxyurl + url); // https://cors-anywhere.herokuapp.com/https://example.com
        return await result.json();
    }

    public async searchByZipcode() {
        if (isNumber(Number(this.zipCodeLocation)) && this.placeToSearch) {
            const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + this.zipCodeLocation + '&rankby=distance&type=' + this.placeToSearch + '&keyword=' + this.placeToSearch + '&key=AIzaSyA5U7_XDrz5HxBqPRlp8xlPJI7LIsZMMZk';
            const placesFromSearch = await this.getPlacesNearby(url);
            if (String(placesFromSearch.status) === 'OK') {
                this.placesResult = placesFromSearch.results.length > 0 ? placesFromSearch.results : [{name: 'Got zero result.'}];
                console.log(this.placesResult);
            } else {
                this.placesResult = [{name: 'Got No result.'}];
            }
        }
    }

}
