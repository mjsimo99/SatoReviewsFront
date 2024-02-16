import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromReview  from 'src/app/store/selectors/review.selectors';
import * as ReviewActions  from 'src/app/store/actions/actions.review';
import { AppState } from 'src/app/store/state/review.state';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit{

  reviews$ = this.store.select(fromReview.getReviews);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(ReviewActions.loadReviews());
  }


}
