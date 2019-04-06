import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from '@shared/core.module';
import { SharedModule } from '@shared/shared.module';
import { ArticlePage } from './list.page';

describe('HomeComponent', () => {
    let component: ArticlePage;
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
            declarations: [ArticlePage]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ArticlePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
