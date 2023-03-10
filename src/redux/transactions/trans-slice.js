import { createSlice } from '@reduxjs/toolkit';

import {
  fetchTransactions,
  addTransaction,
  fetchPaginationTransactions,
  fetchStatistic,
  deleteTransaction,
} from './trans-operations';

const initialState = {
  statistic: { transactions: [], dateArr: {} },
  transactions: [],
  isLogin: false,
  loading: false,
  loadingAddTrans: false,
  error: null,
  firstLoading: false,
  pagination: {
    transactions: [],
    page: 1,
    limit: 1,
  },
};

const transactions = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [fetchStatistic.pending]: store => {
      store.firstLoading = true;
      store.loading = true;
      store.error = null;
    },

    [fetchStatistic.fulfilled]: (store, { payload }) => {
      store.firstLoading = false;
      store.loading = false;
      store.isLogin = true;
      const statistic = {
        transactions: payload.transactions,
        dateArr: payload.dateArr,
      };
      store.statistic = statistic;
    },
    [fetchStatistic.rejected]: (store, { payload }) => {
      store.firstLoading = false;
      store.loading = false;
      store.error = payload;
    },

    [fetchTransactions.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchTransactions.fulfilled]: (store, { payload }) => {
      store.transactions = payload;
      store.loading = false;
      store.error = null;
      store.loadingAddTrans = false;
    },
    [fetchTransactions.rejected]: (store, { payload }) => {
      store.error = payload;
      store.loading = false;
      store.loadingAddTrans = false;
    },

    [fetchPaginationTransactions.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchPaginationTransactions.fulfilled]: (store, { payload }) => {
      store.pagination.transactions = payload;
      store.loading = false;
      store.error = null;
    },
    [fetchPaginationTransactions.rejected]: (store, { payload }) => {
      store.error = payload;
      store.loading = false;
    },

    [addTransaction.pending]: store => {
      store.loadingAddTrans = true;
      store.loading = true;
    },
    [addTransaction.fulfilled]: (store, { payload }) => {
      store.transactions = payload.transactions;
      store.loading = false;
      store.error = null;
      store.loadingAddTrans = false;
    },
    [addTransaction.rejected]: (store, { payload }) => {
      store.error = payload;
      store.loading = false;
      store.loadingAddTrans = false;
    },
    [deleteTransaction.pending]: store => {
      store.loading = true;
    },
    [deleteTransaction.fulfilled]: (store) => {
      store.loading = false;
      store.error = null;
    },
    [deleteTransaction.rejected]: (store, { payload }) => {
      store.error = payload;
      store.loading = false;
    },
  },
});

export default transactions.reducer;
