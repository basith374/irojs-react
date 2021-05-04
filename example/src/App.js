import React, { useState } from 'react'

import { ColorPicker } from 'package'
import 'package/dist/index.css'

const App = () => {
  const [color, setColor] = useState('#000');
  return <div className="container" style={{ background: color }}>
    <div className="box">
      <h1>Color picker</h1>
      <ColorPicker setColor={setColor} color={color} />
    </div>
  </div>
}

export default App
