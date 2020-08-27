import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith, filter} from 'rxjs/operators';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
 
  fName: string
  lName: string
  skill1: string
  skill2: string
  skill3: string
  options: string[] = ["Java", "C++", "python", "Matlab", "Git", "VsCode", "Data structures", "Communication skills"]

  skill1Control = new FormControl();
  skill2Control = new FormControl();
  skill3Control = new FormControl();

  filteredOptions1: Observable<string[]>
  filteredOptions2: Observable<string[]>
  filteredOptions3: Observable<string[]>  

  nameInvalid = "lNameInput.invalid && lNameInput.touched"


  constructor() { }

  ngOnInit(): void {

    this.fName = localStorage.getItem("fname") ? localStorage.getItem("fname").toString() : "";
    this.lName = localStorage.getItem("fname") ? localStorage.getItem("lname").toString() : "";
    this.skill1Control.setValue(localStorage.getItem("skill1") ? localStorage.getItem("skill1").toString() : "");
    this.skill2Control.setValue(localStorage.getItem("skill2") ? localStorage.getItem("skill2").toString() : "");
    this.skill3Control.setValue(localStorage.getItem("skill3") ? localStorage.getItem("skill3").toString() : "");


    this.filteredOptions1 = this.skill1Control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))

    )

    this.filteredOptions2 = this.skill2Control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )
  
  this.filteredOptions3 = this.skill3Control.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value))
  )
  }
  


  private _filter(value: string): string[]{
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
      )
  }




  onSubmit(){
    // we will grab the values 
    
    localStorage.setItem("fname",this.fName);
    localStorage.setItem("lname",this.lName);
    localStorage.setItem("skill1",this.skill1Control.value);
    localStorage.setItem("skill2",this.skill2Control.value);
    localStorage.setItem("skill3",this.skill3Control.value);



  }


}
