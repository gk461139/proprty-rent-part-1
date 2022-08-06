import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArtableService } from 'src/app/service/artable.service';

@Component({
  selector: 'app-add-profiles',
  templateUrl: './add-profiles.component.html',
  styleUrls: ['./add-profiles.component.css']
})
export class AddProfilesComponent implements OnInit {
  submitted = false;
  propertyFrom:FormGroup;
  constructor(private fb:FormBuilder,private _service:ArtableService) {
    this.propertyFrom = this.fb.group({
      Name:[''],
      Description:[''],
      Size:['']
    });
  }
  ngOnInit(): void {
  }

  get f(){
    return this.propertyFrom.controls;
  }
  onSave() {
    const data = {
      name: this.propertyFrom.get('Name')?.value,
      description: this.propertyFrom.get('Description')?.value,
      size: this.propertyFrom.get('Size')?.value
    }
    this._service.addProperty(data);
    this._service.refreshgridSubject.next(data);
    this.propertyFrom.reset();
  }

}
