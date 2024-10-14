import React, { Children } from 'react'

export default function Button({
    type = "button",
    children,
    className = "",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    ...props
}) {
  return (
    <div>
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}{...props}>{children}</button>
    </div>
  )
}

