import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from '@shared/core.module';
import { SharedModule } from '@shared/shared.module';
import { ArticlePage } from './article.page';
import {Component, Input} from '@angular/core';
import {CommentComponent} from '@pages/home/article/comments.component';

@Component({
    selector: 'test-component-comment',
    template: '<comments [comments]="comments"></comments>'
})
class TestCommentComponent {
    comments = [];
}

describe('CommentsCompoennt', () => {
    let component: CommentComponent;
    let fixture: ComponentFixture<TestCommentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                FlexLayoutModule,
                SharedModule,
                RouterTestingModule,
                ReactiveFormsModule,
                CoreModule
            ],
            declarations: [CommentComponent, TestCommentComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestCommentComponent);
        component = fixture.debugElement.children[0].componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});



