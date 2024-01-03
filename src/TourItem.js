import React, { useState } from 'react'

const TourItem = (props) => {
    const [show , setShow] = useState(true)
    const {name, img, id, info, price} = props
    const NewInfo = info.substring(0, 200)

    const GetId = () => {
        props.idFFF(id)
    }

  return (
    <>
        <article>
            <img src={img} alt={name} />
        </article>
        <footer>
            <div className='tour-info'>
                <h4>{name}</h4>
                <div className='tour-price'>$ {price}</div>
            </div>
            <p>
                {show?NewInfo:info}
                <button onClick={ () => setShow(!show) }>{show?"Read More":"Show Less"}</button>
            </p>
            <button onClick={GetId} className='delete-btn'>not interested</button>
        </footer>
    </>
  )
}

export default TourItem