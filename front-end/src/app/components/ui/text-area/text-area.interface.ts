import { TextareaHTMLAttributes } from 'react'
import { IFieldProps } from '../field/fields.interface'

type TypeInputPropsField = TextareaHTMLAttributes<HTMLAreaElement> & IFieldProps

export interface ItextArea extends TypeInputPropsField {}
