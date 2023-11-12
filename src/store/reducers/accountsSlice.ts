import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountInterface } from '../../utils/interfaces';
import { AccountsListFakeData } from '../../utils/constants';

export const accountThunkRequest = createAsyncThunk('accountThunkRequest', async (method) => method);

const list: AccountInterface[] = AccountsListFakeData;

const initialState = {
	list,
};

const accountsSlice = createSlice({
	name: 'accounts',
	initialState,
	reducers: {
		bulkAccountsData: (state, action: PayloadAction<Array<AccountInterface>>) => {
			state.list = [...action.payload];
		},
		editAccount: (state, action: PayloadAction<AccountInterface>) => {
			const index = state.list.findIndex((account) => account.id === action.payload.id);
			if (index !== -1) {
				state.list[index] = { ...action.payload };
			}
		}
	},
});

export const { bulkAccountsData, editAccount } = accountsSlice.actions;
export default accountsSlice.reducer;
