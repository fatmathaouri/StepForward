import { TestBed } from '@angular/core/testing';

import { ArticleCardsService } from './article-cards.service';

describe('ArticleCardsService', () => {
  let service: ArticleCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
