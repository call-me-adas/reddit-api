import {getTestBed, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {CommentsService} from "@logic/services/comments/comments.service";

describe('Comments service', () => {
    let injector: TestBed;
    let service: CommentsService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                CommentsService
            ]
        });
        injector = getTestBed();
        service = injector.get(CommentsService);
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should return comments as observable when make get method', () => {
        const mock = {
            kind: 'Listing'
        };

        service.getArticleComments({category: 'Awww', id: 'ba5f1v'}).subscribe((res: {kind}) => {
            console.log(res);
            expect(res.kind).toEqual(mock.kind);
        });

        const req = httpMock.expectOne(`https://www.reddit.com/r/Awww/comments/ba5f1v.json`);
        expect(req.request.method).toBe('GET');
        req.flush(mock);
    });

});
