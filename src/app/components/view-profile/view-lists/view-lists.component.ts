import { Component, OnInit } from '@angular/core';
import { ArtableService } from 'src/app/service/artable.service';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-lists.component.html',
  styleUrls: ['./view-lists.component.css']
})

export class ViewListsComponent implements OnInit {
  pageData:any;
  constructor(private _service:ArtableService){}
  ngOnInit(): void {
    this._service.refreshgridSubject.subscribe((response: any) => {
      this.pageData = this._service.getPropertyList();
    })
  }


  // AddProperty
}
