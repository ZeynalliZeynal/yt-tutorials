import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeAccount: {
    id: 1,
    userName: 'Zeyn104',
    fullName: 'Zeynal Zeynalli',
    avatar:
      'https://pbs.twimg.com/profile_images/1712849601143668736/eQBQnqw-_400x400.jpg',
  },
  accounts: [
    {
      id: 1,
      userName: 'Zeyn104',
      fullName: 'Zeynal Zeynalli',
      avatar:
        'https://pbs.twimg.com/profile_images/1712849601143668736/eQBQnqw-_400x400.jpg',
    },
    {
      id: 2,
      userName: 'BoomYouDead',
      fullName: 'Only Black Apples',
      avatar:
        'https://us-tuna-sounds-images.voicemod.net/98aa0924-ae07-498f-a190-3c12716a757e-1711939527728.png',
    },
  ],
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload,
      );
      // if (state.activeAccount && action.payload === state.activeAccount.id)
      //   this._setCurrentAccount(false);
    },
    _setCurrentAccount: (state, action) => {
      state.activeAccount = action.payload;
    },
  },
});

export const { _addAccount, _removeAccount, _setCurrentAccount } =
  authSlice.actions;
export default authSlice.reducer;
