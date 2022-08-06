import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class ArtableService {
  propertyList = [{
    name: 'xyz',
    description: 'abcdds',
    size: '12'
  }]
  refreshgridSubject = new BehaviorSubject({});
  constructor() { }

  public getPropertyList() {
    return this.propertyList;

  }
  public addProperty(data: any) {
    this.propertyList.push(data);
  }
}
