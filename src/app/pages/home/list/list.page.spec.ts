import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from '@shared/core.module';
import { SharedModule } from '@shared/shared.module';
import { ListPage } from './list.page';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {OrderModule} from 'ngx-order-pipe';

describe('ListPage', () => {
    let component: ListPage;
    let fixture: ComponentFixture<ListPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                FlexLayoutModule,
                SharedModule,
                InfiniteScrollModule,
                OrderModule,
                RouterTestingModule,
                ReactiveFormsModule,
                CoreModule
            ],
            declarations: [ListPage]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
