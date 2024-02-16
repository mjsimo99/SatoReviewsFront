import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ReviewState } from "../reducers/reviews.reducer";

const getReviewsState = createFeatureSelector<ReviewState>('reviews');

export const getReviews = createSelector(getReviewsState, state => state.reviews);
export const getReviewsLoading = createSelector(getReviewsState, state => state.loading);
export const getReviewsError = createSelector(getReviewsState, state => state.error);
