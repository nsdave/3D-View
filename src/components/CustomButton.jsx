import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'
import { getContrastingColor } from '../config/helpers'

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state)

  const generateStyle = (type) => {
    if(type === 'filed') {
      return {
        // backgeoundColor: snap.color,
        color: getContrastingColor(snap.color)
      }
    } else if(type === "outline") {
      return {
        borderWidth: '1px',
        borderColor: snap.color,
        color: snap.color
      }
    }
  }

  return (
    <button
      className={`px-6 py-1.5 flex-1 rounded-md 
      inline-flex h-12 animate-shimmer items-center 
      justify-center border border-slate-800 
      bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
      bg-[length:200%_100%] font-bold text-slate-400 transition-colors 
      focus:outline-none focus:ring-2 focus:ring-slate-400 
      focus:ring-offset-2 focus:ring-offset-slate-50
      ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      { title }
    </button>
  )
}

export default CustomButton