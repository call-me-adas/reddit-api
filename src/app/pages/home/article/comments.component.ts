import {Component, Input} from "@angular/core";

@Component({
    selector: 'comments',
    template: `
        <ng-container *ngFor="let comment of comments">
            <mat-card *ngIf="comment.data.author" class="comment-container">
                <ul>
                    <li>
                        <strong>{{comment.data.author}} wrote:</strong><br>
                        {{comment.data.body}}
                        <comments [comments]="comment.data.replies.data.children" *ngIf="comment.data.replies"></comments>
                    </li>
                </ul>
            </mat-card>
        </ng-container>
  `,
    styleUrls: ['./comments.component.scss']
})
export class CommentComponent {
    @Input() comments;
}
