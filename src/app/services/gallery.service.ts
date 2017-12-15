import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GalleryService {

  result:any;

  getSearchGallery(search,pPage,cPage){
    return this.http.get('https://pixabay.com/api/?key=6708230-4929b5ae64d06354de62b0389&q='+search+'&per_page='+pPage+'&page='+cPage)
    .map(resp => resp.json())
  }

  constructor(private http: Http) { }
  

}
