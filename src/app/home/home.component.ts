import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';


import { Data } from '../shared/data';
import { DataService } from '../shared/services/data.service';

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

  data: Data[];
  

  constructor(
    private dataService: DataService,
    config: NgbDropdownConfig,
    ) { 
    config.placement = 'bottom';
    config.autoClose = false;
  }

  ngOnInit() {
    this.dataService.getData()
      .subscribe(data => this.data = data);
    




  }

}
