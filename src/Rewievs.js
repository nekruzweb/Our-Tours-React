import React, { useState } from 'react'
import { FaQuoteLeft } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const Rewievs = (props) => {
    const [index , setIndex] = useState(0)

    const {id, name, job, image, text} = props.MAL[index]

    const NextData = ()=> {
        setIndex(index + 1)
        if (index === props.MAL.length -1) {
            setIndex(0)
        }
        
    }

    const PrevData = ()=> {
        setIndex(index - 1)
        if (index === 0) {
            setIndex(props.MAL.length -1)
        }
    }

    const RandomData = () => {
        setIndex(Math.round(Math.random() * 3 ))
    }
    
  return (
    <article className='review'>
        <div className='img-container'>
            <img className='person-img' src={image} />
            <span className='quote-icon'> <FaQuoteLeft/> </span>
        </div>
        <h4 className='author'> {name} </h4>
        <p className='job'> {job} </p>
        <p className='info'> {text} </p>
        <div className='button-container'>
            <button onClick={PrevData} className='prev-btn'>
                <FaChevronLeft />
            </button>
            <button onClick={NextData} className='next-btn'>
                <FaChevronRight />
            </button>
        </div>
        <button onClick={RandomData} className='random-btn'>surprise me</button>
    </article>
  )
}

export default Rewievs