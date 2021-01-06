import { Component, OnInit } from '@angular/core';
import { Beer, HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  brewList: Beer | undefined;
  search: string = '';

  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this.loadBeer();
  }

  loadBeer() {
    this._http.getBeerList().subscribe((data) => {
      this.brewList = data;
    });
  }

  searchBeer() {
    if (this.search) {
      this._http.searchBeerList(this.search).subscribe((data) => {
        this.brewList = data;
      });
    } else {
      this.loadBeer();
    }
  }
}
