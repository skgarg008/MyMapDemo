import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IModelAddress } from '../Models/IModelAddress';

interface ICommonState {
  listAddress: IModelAddress[];
  showLoader: boolean;
}

const initialState: ICommonState = {
  listAddress: [],
  showLoader: false,
};

export const getCommonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    showLoading: (state, action: PayloadAction<boolean>) => {
      state.showLoader = action.payload;
    },

    saveAddress: (state, action: PayloadAction<IModelAddress[]>) => {
      state.listAddress = action.payload;
    },

    addAddress: (state, action: PayloadAction<IModelAddress>) => {
      if (
        state.listAddress.some(
          address => address.placeId === action.payload.placeId,
        )
      ) {
        // If the address already exists, do not add it again
        return;
      }
      state.listAddress.push(action.payload);
    },
    addRemoveAddress: (state, action: PayloadAction<IModelAddress>) => {
      if (
        state.listAddress.some(
          address => address.placeId === action.payload.placeId,
        )
      ) {
        state.listAddress = state.listAddress.filter(
          address => address.placeId !== action.payload.placeId,
        );
        return;
      }
      state.listAddress.push(action.payload);
    },

    removeAddress: (state, action: PayloadAction<IModelAddress>) => {
      state.listAddress = state.listAddress.filter(
        address => address.placeId !== action.payload.placeId,
      );
    },
  },
});

export default getCommonSlice.reducer;

// Action creators are generated for each case reducer function
export const { showLoading, saveAddress, addRemoveAddress, removeAddress } =
  getCommonSlice.actions;

// Selectors
export const isShowLoader = (state: RootState) => state.auth.showLoader;
export const listAddress = (state: RootState) => state.auth.listAddress;
