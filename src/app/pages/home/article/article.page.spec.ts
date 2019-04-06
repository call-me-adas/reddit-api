import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from '@shared/core.module';
import { SharedModule } from '@shared/shared.module';
import { ArticlePage } from './article.page';
import {CommentComponent} from '@pages/home/article/comments.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

describe('ArticlePage', () => {
    let component: ArticlePage;
    let commentsEl: DebugElement;
    let fixture: ComponentFixture<ArticlePage>;

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
            declarations: [ArticlePage, CommentComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ArticlePage);
        component = fixture.componentInstance;
        commentsEl  = fixture.debugElement.query(By.css('.comments-element')); // find hero element
        commentsEl.nativeElement.comments = [];

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

