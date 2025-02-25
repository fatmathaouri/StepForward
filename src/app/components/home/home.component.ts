import { Component } from '@angular/core';
import { ArticleCardsService } from 'src/app/services/article-cards.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  articles: any[] = [];

  constructor(private articleService: ArticleCardsService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }
}
