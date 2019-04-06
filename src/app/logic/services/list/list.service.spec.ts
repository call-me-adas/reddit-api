import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ListService } from './list.service';


describe('ListService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListService],
      imports: [HttpClientTestingModule]
    });
  });
  describe('ListService', () => {

    function setup() {
      const listService = TestBed.get(ListService);
      const httpTestingController = TestBed.get(HttpTestingController);
      return { listService, httpTestingController };
    }

    it('should call the google\'s map data', () => {
      const { listService, httpTestingController } = setup();
      const mock = { kind: 'Listing'};
      listService.getNews({category: 'memes'}).subscribe(data => {
        console.log(data);
        expect(data.kind).toEqual(mock);
      });

      const req = httpTestingController.expectOne('https://www.reddit.com/r/memes/new.json');
      expect(req.request.method).toBe('GET');


      req.flush({
        mapData: mock
      });
    });

    afterEach(() => {
      const { httpTestingController } = setup();
      httpTestingController.verify();
    });
  });
});
