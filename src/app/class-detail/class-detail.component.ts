import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { Data } from '../shared/data';
import { DataService } from '../shared/services/data.service';


@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.scss'],
  providers: [  
    DataService
  ]
})
export class ClassDetailComponent implements OnInit {
  slug: string;
  data: Data[];
  currentClass: Data;


  getCurrentClass(data){
    this.currentClass = this.data.find(item => item.slug === this.slug);
  }

  constructor(private route: ActivatedRoute, public sanitizer: DomSanitizer, private dataService: DataService) { }


  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['slug'] !== undefined) {
      this.slug = params['slug'];}});

    this.initializeData();
      
  }

  async initializeData() {
    this.data = await this.dataService.getDataPromise();
    this.currentClass = this.data.find(x => x.slug === this.slug);
    console.log('current class', this.currentClass);
  }

}
