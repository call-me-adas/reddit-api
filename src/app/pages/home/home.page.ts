import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { MediaObserver } from '@angular/flex-layout';

@Component({
    selector: 'page-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss']
})

export class HomePage implements OnInit {
    categories = ['Awww', 'memes', 'quantum', 'Music', 'BeAmazed'];

    constructor(private router: Router,
                private media: MediaObserver) {
    }

    ngOnInit() {
    }

    get isMobile(): boolean {
        return this.media.isActive('xs') || this.media.isActive('sm');
    }

}
