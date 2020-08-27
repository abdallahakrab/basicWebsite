import { Component, OnInit, Input } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-article-image',
  templateUrl: './article-image.component.html',
  styleUrls: ['./article-image.component.scss']
})
export class ArticleImageComponent implements OnInit {
  @Input() imgSrc: string
  @Input() title: string
  @Input() coloredTitle: string
  @Input() text: string
  

  constructor() { }

  ngOnInit(): void {
    
  

  }

}
