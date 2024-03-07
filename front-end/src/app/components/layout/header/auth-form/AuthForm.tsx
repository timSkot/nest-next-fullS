import { FC, useState } from 'react'
import { useOutside } from '../../../../hooks/useOutside'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthFields } from './auth-form.interface'

import styles from './AuthForm.module.scss'
import stylesIcon from '../icons-right/IconsRight.module.scss'
import { FaUserCircle } from 'react-icons/fa'
import Field from '../../../ui/field/Field'
import { validEmail } from './auth.valid'
import Button from '../../../ui/button/Button'
import { useActions } from '../../../../hooks/useActions'
import { useAuth } from '../../../../hooks/useAuth'

const AuthForm: FC = () => {
	const { ref, isShow, setIsShow } = useOutside(false)

	const [type, setType] = useState<'login' | 'register'>('login')

	const { login, register: registerAction } = useActions()

	const { isLoading } = useAuth()

	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<IAuthFields>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthFields> = data => {
		if (type === 'login') login(data)
		else if (type === 'register') registerAction(data)
	}

	return (
		<div className={styles.wrapper} ref={ref}>
			<button className={stylesIcon.button} onClick={() => setIsShow(!isShow)}>
				<FaUserCircle fill='#A4A4A4' />
			</button>

			{isShow && (
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Field
						{...register('email', {
							required: 'E-mail required!',
							pattern: {
								value: validEmail,
								message: 'Invalid E-mail'
							}
						})}
						placeholder='E-mail'
						error={errors.email}
					/>
					<Field
						{...register('password', {
							required: 'Password required',
							minLength: {
								value: 6,
								message: 'Min 6 symbols'
							}
						})}
						placeholder='Password'
						error={errors.password}
						type='password'
					/>
					<div className={styles['button-wr']}>
						<Button onClick={() => setType('login')} disabled={isLoading}>
							Log In
						</Button>
					</div>
					<button
						className={styles.register}
						onClick={() => setType('register')}
						disabled={isLoading}
					>
						Register
					</button>
				</form>
			)}
		</div>
	)
}

export default AuthForm
