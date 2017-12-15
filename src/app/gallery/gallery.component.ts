import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service';
import { Input } from '@angular/core';
import { Http } from '@angular/http';
import { AfService } from '../services/af.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  search:string="";
  gallery:any;
  totalPages:any;
  currentPage:number=1;
  size:number=10;
  pages:Array<number>=[];

  opn:any;
  
  constructor(private galleryService:GalleryService, private http:Http, private af:AfService) {

    console.log(this.opn);
    console.log(af.isUserEmailLoggedIn);
  
   }

  ngOnInit() {
    this.http.get('https://pixabay.com/api/?key=6708230-4929b5ae64d06354de62b0389&q=rouge')
    .map(resp => resp.json()).subscribe(data=>{
      console.log(data);
    })
  }


  searchImages(data) {
        this.gallery=this.galleryService.getSearchGallery(data.search,this.size,this.currentPage)
    .subscribe(data=>{
      this.gallery=data;
      this.totalPages=data.totalHits/this.size;
      if(data.totalHits % this.size!=0) ++this.totalPages;
      this.pages=new Array(this.totalPages);
      console.log(this.gallery);
    })
  }

  goToPage(i) {
    this.currentPage=i+1;
    this.searchImages({search:this.search});
  }

}
