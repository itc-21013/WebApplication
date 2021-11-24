// 関数コンポーネント内で state を扱えるようにするため、React を import 時に useState を読み込む
import React, { useState } from 'react'
import './styles.css'

const InputSelectBox = () => {
  const [selectedValue, setSelectedValue] = useState('HTML')

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
        <option value='HTML'>HTML</option>
        <option value='CSS'>CSS</option>
        <option value='JavaScript'>JavaScript</option>
      </select>
    </div>
  )
}

export default function App () {
  return <InputSelectBox />
}
