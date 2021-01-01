import React, {useState} from 'react'
import people from './Review-data'
import { FaChevronLeft, FaQuoteRight, FaChevronRight } from 'react-icons/fa';



    const Review = () =>{
    const [index, setIndex] =useState(0)
    const {name, job, image, text} = people[index]
    const checkPerson = (number) =>{
        if(number > people.length - 1){
            return 0;
        }
        if(number < 0){
            return people.length -1;
        }        
        return number
    }    

    const nextPerson = () =>{
        setIndex((index) =>{
            let newIndex = index - 1;
            return checkPerson(newIndex);
        })
    }    
    
    const previousPerson = () =>{
        setIndex((index) =>{
            let newIndex = index + 1;
            return checkPerson(newIndex);
        })
    } 
    
    return(
        <article className="review-container">
          <div className="image-container">
            <img src={image} alt={name} className="person-image" />
          </div>
            <h4 className="employee">{name}</h4>
            <p className="job">{job}</p>
            <p className="text">{text}</p>
            <button className="prev-btn " onClick={previousPerson} >
                <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={nextPerson}>
                <FaChevronRight />
            </button>
        </article>
    )
}

export default Review