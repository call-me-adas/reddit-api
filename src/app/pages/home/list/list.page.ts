import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {combineLatest, Subscription} from "rxjs";

@Component({
    selector: 'page-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss']
})

export class ListPage implements OnInit, OnDestroy {
    category: string;
    public parametersObservable: Subscription;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.parametersObservable = combineLatest(this.route.params).subscribe((res) => {
            this.category = res[0].category;
        });
    }

    public ngOnDestroy(): void {
        this.parametersObservable.unsubscribe();
    }

}
