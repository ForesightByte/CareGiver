import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-nearby',
  templateUrl: './nearby.page.html',
  styleUrls: ['./nearby.page.scss'],
})
export class NearbyPage implements OnInit {
  public zip_code: string;
  public placeToSearch: string;
  public placesResult: any[] = [{name: 'Empty List.'}];

  private httpClient: HttpClient;

  constructor(http: HttpClient) {
    this.httpClient = http;
  }

  ngOnInit() {
  }

  public async getPlacesNearby(url: string): Promise<any> {
    const proxyurl = 'https://thingproxy.freeboard.io/fetch/';
    const result = await fetch(proxyurl + url); // https://thingproxy.freeboard.io/fetch/https://example.com
    return await result.json();
  }

  public async searchByZipcode(location: string) {
    if (location && this.placeToSearch) {
      const zipcode = location;
      console.log('zip', zipcode);
      const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + zipcode + '&rankby=distance&type=' + this.placeToSearch + '&keyword=' + this.placeToSearch + '&key=AIzaSyBrkk2S7tZy3HzSZeAudzCFE1JY15HLgug';
      const placesFromSearch = await this.getPlacesNearby(url);
      if (String(placesFromSearch.status) === 'OK') {
        this.placesResult = placesFromSearch.results.length > 0 ? placesFromSearch.results : [{name: 'Got zero result.'}];
        console.log(this.placesResult);
      } else {
        this.placesResult = [{name: 'Got No result.'}];
      }
    }
  }

  zipToLocation() {
    const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + this.zip_code + '&key=AIzaSyBrkk2S7tZy3HzSZeAudzCFE1JY15HLgug';
    fetch(url).then(res => res.json())
    .then(res => {
      const objectData = [];
      objectData.push(res);
      const geo = objectData[0].results[0].geometry.location;
      const location = geo.lat + ',' + geo.lng;
      console.log('location', location);
      this.searchByZipcode(location);
    })
  }

}
