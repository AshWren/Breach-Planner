import { Component, OnInit, Input } from '@angular/core';
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
  public schools: Array<any>;
  data: Data[] = [];
  filteredSchool = [];
  image: string;
  url: string;



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
        value: 'Battle',
        checked: false
      },
      {
        value: 'Dark',
        checked: false
      },
      {
        value: 'Shadow',
        checked: false
      },
      {
        value: 'Tech',
        checked: false
      },
      {
        value: 'Veil Demon',
        checked: false
      }
    ]
  }

  buildImgPaths(data) {
    let myImgPath = './assets/images/';
    let imgType = '_icon.png';
    for(let i = 0; i < data.length; i++) {
      data[i].relativeImgPath = myImgPath + data[i].slug + '/' + data[i].img + imgType;
      console.log('rel', data[i].relativeImgPath)
    }
    return data;
  }

  


  ngOnInit() {
     this.dataService.getData()
      .subscribe((data) => {
        this.data = this.buildImgPaths(data);
      });
    

    this.createFilters();

  }

}
