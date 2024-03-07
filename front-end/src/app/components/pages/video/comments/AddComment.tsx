import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ICommentDto } from '../../../../types/comment.interface'
import { commentApi } from '../../../../store/api/comment.api'
import styles from './Comment.module.scss'
import Field from '../../../ui/field/Field'
import { MdSend } from 'react-icons/md'

const AddCommentForm: FC<{ videoId: number }> = ({ videoId }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<ICommentDto>({ mode: 'onChange' })

	const [writeComment, { isLoading }] = commentApi.useCreateCommentMutation()

	const onSubmit: SubmitHandler<ICommentDto> = async data => {
		writeComment({ ...data, videoId })
			.unwrap()
			.then(() => reset())
	}
	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div style={{ position: 'relative' }}>
				<Field
					{...register('message', { required: 'Message required!' })}
					placeholder='Write comment'
					error={errors.message}
				/>

				<button className={styles.button} disabled={isLoading}>
					<MdSend />
				</button>
			</div>
		</form>
	)
}

export default AddCommentForm
