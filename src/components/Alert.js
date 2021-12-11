import React, { useState } from 'react'

const Alert = ({ children }) => {
   const [unmount, setUnmount] = useState(false)
   return (
      <div className={`animate__animated ${unmount ? 'animate__fadeOutDown' : 'animate__fadeInUp'} `} style={{ overflow: 'hidden' }}>
         {children}
         <button onClick={() => setUnmount(true)}>x</button>
      </div>
   )
}

export default Alert
