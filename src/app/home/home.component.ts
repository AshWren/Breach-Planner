import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';


import { Data } from '../shared/data';
import { DataService } from '../shared/services/data.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [  
    NgbDropdownConfig, 
    DataService
  ]

})



export class HomeComponent implements OnInit {
  // public charClass: Array<any>;
  public schools: Array<any>;


  data: Data[] = [];
  filteredSchool = [];
  

  
  constructor(
    private dataService: DataService,
    config: NgbDropdownConfig,
    ) { 
    config.placement = 'bottom';
    config.autoClose = false;
  }


  checked() {
    return this.schools.filter(item => {return item.checked; });
    
  }

  onSchoolCheck(school, isChecked){
    if (isChecked){
      this.filteredSchool.push(school);
    }else{
      console.log(school);
      this.filteredSchool = this.filteredSchool.filter(item => item !== school);
    }
  }

  createFilters() {
    this.schools = [
      {
        value: 'Arcane',
        checked: false
      },
      {
        value: 'Hedge',
        checked: false
      }
    ]
  }

  ngOnInit() {
    this.dataService.getData()
      .subscribe(data => this.data = data);
    

    this.createFilters();


  }

}
