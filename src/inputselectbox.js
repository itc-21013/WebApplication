import React, { useState } from 'react'
/* export const values = [
  { id: 1, item: 'HTML' },
  { id: 2, item: 'CSS' },
  { id: 3, item: 'JavaScript' }
]
*/
const values = [
  { id: 1, item: 'HTML' },
  { id: 2, item: 'CSS' },
  { id: 3, item: 'JavaScript' }
]

export const SelectItems = values.map(value => {
  return (
    <option value={value.item} key={value.id}>
      {value.item}
    </option>
  )
})

export const InputSelectBox = props => {
  // export const InputSelectBox = values => {
  // const [selectedValue, setSelectedValue] = useState('HTML')
  const [selectedValue, setSelectedValue] = useState(props.values)
  // const [selectedValue, setSelectedValue] = useState(values[0].item)

  const handleChange = e => {
    setSelectedValue(e.target.value)
  }

  return (
    <div className='App'>
      <p>
        現在選択されている値：
        <b>{selectedValue}</b>
      </p>

      <select value={selectedValue} onChange={handleChange}>
        {SelectItems}
      </select>
    </div>
  )
}
