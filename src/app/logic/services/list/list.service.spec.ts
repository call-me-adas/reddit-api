import {getTestBed, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {ListService} from "@logic/services/list/list.service";

describe('List service', () => {
  let injector: TestBed;
  let service: ListService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ListService
      ]
    });
    injector = getTestBed();
    service = injector.get(ListService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return list as observable when make get method', () => {
    const mock = {
      kind: 'Listing'
    };

    service.getNews({category: 'memes'}).subscribe((res: {kind}) => {
      expect(res.kind).toEqual(mock.kind);
    });

    const req = httpMock.expectOne(`https://www.reddit.com/r/memes/new.json`);
    expect(req.request.method).toBe('GET');
    req.flush(mock);
  });

});
