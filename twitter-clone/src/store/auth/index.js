import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentAccount: {
    id: 1,
    username: 'zzayn04',
    avatarURL:
      'https://pbs.twimg.com/profile_images/1712849601143668736/eQBQnqw-_400x400.jpg',
    fullName: 'Zeynalli Zeynal',
  },
  accounts: [],
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    _addAccounts: (state, action) => {
      state.accounts.push(action.payload)
    },
    _removeAccounts: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload,
      )
      if (state.currentAccount && action.payload !== state.currentAccount.id) {
        this._setCurrentAccount(false)
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload
    },
  },
})

export const { _addAccounts, _removeAccounts, _setCurrentAccount } =
  auth.actions
export default auth.reducer
