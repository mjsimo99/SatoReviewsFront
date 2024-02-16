import { createReducer, on } from '@ngrx/store';
import * as ReviewActions from '../actions/actions.review';
import { Review } from 'src/app/models/Review';

export interface ReviewState {
    reviews: Review[];
    loading: boolean;
    error: any;
}

export const initialState: ReviewState = {
    reviews: [],
    loading: false,
    error: null,
};

export const reviewReducer = createReducer(
    initialState,
    on(ReviewActions.loadReviews, state => ({ ...state, loading: true, error: null })),
    on(ReviewActions.loadReviewsSuccess, (state, { reviews }) => ({ ...state, reviews, loading: false })),
    on(ReviewActions.loadReviewsFailure, (state, { error }) => ({ ...state, error, loading: false })),

    on(ReviewActions.addReview, state => ({ ...state, loading: true, error: null })),
    on(ReviewActions.addReviewSuccess, (state, { addedReview }) => ({ ...state, reviews: [...state.reviews, addedReview], loading: false })),
    on(ReviewActions.addReviewFailure, (state, { error }) => ({ ...state, error, loading: false })),

    on(ReviewActions.updateReview, state => ({ ...state, loading: true, error: null })),
    on(ReviewActions.updateReviewSuccess, (state, { updatedReview }) => {
        const updatedReviews = state.reviews.map(review => review.reviewId === updatedReview.reviewId ? updatedReview : review);
        return { ...state, equipes: updatedReview, loading: false };
    }),
    on(ReviewActions.updateReviewFailure, (state, { error }) => ({ ...state, error, loading: false })),

    on(ReviewActions.deleteReview, state => ({ ...state, loading: true, error: null })),
    on(ReviewActions.deleteReviewSuccess, (state, { deletedReviewId }) => ({
        ...state,
        reviews: state.reviews.filter(review => review.reviewId !== deletedReviewId),
        loading: false
    })),
    on(ReviewActions.deleteReviewFailure, (state, { error }) => ({ ...state, error, loading: false })),

);
