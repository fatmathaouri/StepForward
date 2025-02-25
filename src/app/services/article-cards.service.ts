import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleCardsService {
  private articles = [
    {
      id: 1,
      title: 'Card 1',
      theme: 'Alcool',
      text: 'L’addiction : perçue comme une maladie...',
      imageUrl: 'assets/images/3.jpeg'
    },
    {
      id: 2,
      title: 'Card 2',
      theme: 'Tabac',
      text: 'Campagne contre le trafic de drogue...',
      imageUrl: 'assets/images/3.jpeg'
    },
    {
      id: 3,
      title: 'Card 3',
      theme: 'Ecran',
      text: 'Cocaïne : comment expliquer l\'explosion...',
      imageUrl: 'assets/images/3.jpeg'
    },
    {
      id: 4,
      title: 'Card 4',
      theme: 'Cannabis',
      text: 'Alcool : ces jeunes adultes expliquent...',
      imageUrl: 'assets/images/3.jpeg'
    },
    {
      id: 5,
      title: 'Card 5',
      theme: 'Cocaine',
      text: 'Lutte contre les addictions : nouvelles drogues...',
      imageUrl: 'assets/images/3.jpeg'
    }
  ];

  constructor() { }

  // Récupérer tous les articles
  getArticles() {
    return this.articles;
  }

  // Cette méthode pourra être modifiée plus tard pour appeler une API
}
