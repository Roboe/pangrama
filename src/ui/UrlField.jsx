import { useRef } from 'react'

const UrlField = ({ value, handleClick, buttonChildren }) => {
  const inputRef = useRef()

  const handleClickButton = () => {
    handleClick()
    inputRef.current?.select()
  }

  return (
    <div className="pc-text-field pc-text-field_with-action">
      <input
        type="text"
        ref={inputRef}
        className="pc-text-field--input"
        readOnly
        value={value}
      />
      <button className="pc-text-field--button" onClick={handleClickButton}>
        {buttonChildren}
      </button>
    </div>
  )
}

export default UrlField
