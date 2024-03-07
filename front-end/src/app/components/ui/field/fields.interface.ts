import { FieldError } from 'react-hook-form'
import { InputHTMLAttributes } from 'react'

export interface IFieldProps {
	error?: FieldError
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputPropsField {}
