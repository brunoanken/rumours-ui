export const TextInput = ({
  value,
  setValue,
  placeholder,
  className,
  type = "text",
  ...props
}) => (
  <input
    type={type}
    value={value}
    onChange={(e) => {
      setValue(e.currentTarget.value)
    }}
    placeholder={placeholder}
    className={`caret-pink-500 border-2 border-stone-200 rounded-lg px-3 py-1 w-full ${className}`}
    {...props}
  />
)
