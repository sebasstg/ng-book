import { Article } from './article.model';
import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.classs') cssClass='row';

  @Input()
  article:Article;

  constructor() { 
   // this.article= new Article('Angular 2','http://angular.io',10);

  }
  voteUp():boolean{
    this.article.voteUp();
    return false;
  }
  voteDown():boolean{
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
