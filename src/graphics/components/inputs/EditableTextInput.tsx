export interface StandardInputProps {
	classNames?: string,
	text?: string,
	value: string,
	setValue: (value: string) => void,
	editMode: boolean
}
const EditableTextInput = ({ classNames, text, value, setValue, editMode }: StandardInputProps) => {

	const onChangeEvent = (event: { target: { value: string; }; }) => setValue(event.target.value);

	return (
		<>
			{editMode ? <input type="text" className={"border rounded-sm pl-2 min-w-fit text-sm " + classNames} value={value} onChange={onChangeEvent} /> : text
			}
		</>
	)
}

export default EditableTextInput
