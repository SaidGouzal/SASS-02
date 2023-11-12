export interface StandardInputProps {
 classNames?: string,
 text?: string,
 value: string,
 setValue: (value: string) => void,
 editMode: boolean
}

const EditableTextAreaInput = ({ classNames, text, value, setValue, editMode }: StandardInputProps) => {

 const onChangeEvent = (event: { target: { value: string; }; }) => setValue(event.target.value);

 return (
  <>
   {editMode ? <textarea style={{ fontSize: "0.875rem", lineHeight: "1.25rem", height: "100px" }} className={"border rounded-sm pl-1 w-full min-w-fit text-sm" + classNames} value={value} onChange={onChangeEvent} /> : text
   }
  </>
 )
}

export default EditableTextAreaInput
