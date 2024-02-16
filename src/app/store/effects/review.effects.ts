import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as ReviewActions from '../../store/actions/actions.review';
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { Injectable } from "@angular/core";
import { ReviewService } from "src/app/services/reviews/review.service";

@Injectable()
export class ReviewEffects {

    loadReviews$ = createEffect(() => this.actions$.pipe(
        ofType(ReviewActions.loadReviews),
        mergeMap(() => this.reviewService.getReviews()
            .pipe(
                tap(reviews => console.log('Données récupérées depuis le service:', reviews)),
                map(reviews => ReviewActions.loadReviewsSuccess({ reviews })),
                catchError((error) => {
                    console.error('Erreur lors de la récupération des avis:', error);
                    return of(ReviewActions.loadReviewsFailure({ error }));
                })
            ))
    ));

    // addEquipe$ = createEffect(() => this.actions$.pipe(
    //     ofType(ReviewActions.addReview),
    //     mergeMap(({ equipe }) => this.reviewService.add(equipe).pipe(
    //         map(addedReviews => addedReviews[0]),
    //         map(addedReview => ReviewActions.addReviewSuccess({ addedReview })),
    //         catchError(error => of(ReviewActions.addEquipeFailure({ error })))
    //     ))
    // ));

    constructor(
        private actions$: Actions,
        private reviewService: ReviewService,
    ) { }

}