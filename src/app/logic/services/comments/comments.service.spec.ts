import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CoreModule } from '@shared/core.module';
import { HttpCacheService } from '@shared/interceptors/http/http-cache.service';
import { CommentsService } from './list.service';

describe('ListService', () => {
  let quoteService: CommentsService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, HttpClientTestingModule],
      providers: [HttpCacheService, CommentsService]
    });
  }));

  beforeEach(inject(
    [HttpCacheService, CommentsService, HttpTestingController],
    (htttpCacheService: HttpCacheService, _quoteService: CommentsService, _httpMock: HttpTestingController) => {
      quoteService = _quoteService;
      httpMock = _httpMock;

      htttpCacheService.cleanCache();
    }
  ));

  afterEach(() => {
    httpMock.verify();
  });

  describe('getRandomQuote', () => {
    it('should return a random Chuck Norris list', () => {
      // Arrange
      const mockQuote = { value: 'a random list' };

      // Act
      const randomQuoteSubscription = quoteService.getRandomQuote({ category: 'toto' });

      // Assert
      randomQuoteSubscription.subscribe((quote: string) => {
        expect(quote).toEqual(mockQuote.value);
      });
      httpMock.expectOne({}).flush(mockQuote);
    });

    it('should return a string in case of error', () => {
      // Act
      const randomQuoteSubscription = quoteService.getRandomQuote({ category: 'toto' });

      // Assert
      randomQuoteSubscription.subscribe((quote: string) => {
        expect(typeof quote).toEqual('string');
        expect(quote).toContain('Error');
      });
      httpMock.expectOne({}).flush(null, {
        status: 500,
        statusText: 'error'
      });
    });
  });
});
