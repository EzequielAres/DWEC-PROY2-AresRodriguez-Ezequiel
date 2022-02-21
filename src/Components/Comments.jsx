import React from 'react'
import Crud from './Crud'

export const Comments = () => {
  return (
    <div className='comments' id='Comentarios'>
        <h1 className='comments-title'>Si has trabajado conmigo deja tu experiencia aqui abajo!</h1>
        <hr/>
        <Crud />
    </div>
  )
}
