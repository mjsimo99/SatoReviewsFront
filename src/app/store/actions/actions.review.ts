import { createAction, props } from '@ngrx/store';
import { Review } from 'src/app/models/Review';

export const loadReviews = createAction('[Review] Load Reviews');
export const loadReviewsSuccess = createAction('[Review] Load Reviews Success', props<{ reviews: Review[] }>());
export const loadReviewsFailure = createAction('[Review] Load Reviews Failure', props<{ error: any }>());

export const addReview = createAction('[Review] Add Review', props<{ review: Review }>());
export const addReviewSuccess = createAction('[Review] Add Review Success', props<{ addedReview: Review }>());
export const addReviewFailure = createAction('[Review] Add Review Failure', props<{ error: any }>());

export const updateReview = createAction('[Review] Update Review', props<{ review: Review }>());
export const updateReviewSuccess = createAction('[Review] Update Review Succe', props<{ updatedReview: Review }>());
export const updateReviewFailure = createAction('[Review] Update Review Failure', props<{ error: any }>());

export const deleteReview = createAction('[Review] Delete Review', props<{ reviewId: number }>());
export const deleteReviewSuccess = createAction('[Review] Delete Review Success', props<{ deletedReviewId: number }>());
export const deleteReviewFailure = createAction('[Review] Delete Review Failure', props<{ error: any }>());
