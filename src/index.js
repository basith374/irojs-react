import React, { useEffect, useRef } from 'react'
import styles from './styles.module.css'
import iro from '@jaames/iro'

export default function ColorPicker({ setColor, color }) {
  const ref = useRef()
  const colorPicker = useRef()
  useEffect(() => {
    const cp = (colorPicker.current = new iro.ColorPicker(ref.current, {
      color
    }))
    cp.on('color:change', (color) => {
      if (setColor) setColor(color.hexString)
    })
  }, [])
  return <div className={styles.container} ref={ref} />
}
