import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthData } from '../../services/auth/auth.helper'
import { IAuthFields } from '../../components/layout/header/auth-form/auth-form.interface'
import { AuthService } from '../../services/auth/auth.service'
import { toastr } from 'react-redux-toastr'
import { toastError } from '../../utils/api.utils'

export const register = createAsyncThunk<IAuthData, IAuthFields>(
	'auth/register',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthService.register(email, password)
			toastr.success('Sign Up', 'Registered successfully')
			return response
		} catch (e) {
			toastError(e)
			return thunkAPI.rejectWithValue(e)
		}
	}
)

export const login = createAsyncThunk<IAuthData, IAuthFields>(
	'auth/login',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthService.login(email, password)
			toastr.success('Sign In', 'Login successfully')
			return response
		} catch (e) {
			toastError(e)
			return thunkAPI.rejectWithValue(e)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	return {}
})
