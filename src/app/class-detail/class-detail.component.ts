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

    this.dataService.getData()
      .subscribe((data) => {
        this.data = data;
        console.log('data on subscribe', data);
        // this.currentClass = this.getCurrentClass(data);
        this.currentClass = data.find(item => item.slug === this.slug);
        console.log('currentClass in subscribe', this.currentClass);
      })  

      console.log('on init slug', this.slug);
      
      console.log('currentClass on init', this.currentClass);
      
  }



}
