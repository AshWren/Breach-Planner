import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  image: string;
  url: string;

  public isCollapsed = true;

  @Input() item;
  @Input() slug;

  constructor() { }

  ngOnInit() {
    let image = this.item.img;
    this.url = '../../assets/images/'+this.slug+'/'+image+'.png'
    console.log('url', this.url)
  }

}
