import { IsEmail, IsString, MinLength } from 'class-validator'

export class AuthDto {
	@IsEmail()
	email: string
	@MinLength(6, {
		message: 'Min length 6 symbols!'
	})
	@IsString()
	password: string
}
