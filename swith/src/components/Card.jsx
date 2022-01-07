import React, { useState } from 'react'
import products from './data'
// import { Rating } from 'react-simple-star-rating'
import ReactStars from 'react-rating-stars-component'
import Favorite from '@material-ui/icons/Favorite'
// import { ArrowDownwardIcon } from '@material-ui/icons/'
import { KeyboardArrowDown } from '@material-ui/icons/'
const Card = () => {
  const [rating, setRating] = useState(0)
  // const handleRating = (rate) => {
  //   setRating(rate)
  //   // other logic
  // }
  let rate
  const ratingChanged = (newRating) => {
    setRating(newRating)
  }
  // const handleClick = (id) => {
  //   console.log(rate)
  //   if (id) {
  //     setRating(rate)
  //   }
  // }
  return (
    <>
      <div className='container grid grid-cols-2 md:grid-cols-4 gap-3 w-full sm:columns-6 mx-auto  my-3 text-center'>
        {products.map((product) => {
          const { id, name, image, description, rate } = product
          return (
            <>
              <article
                key={id}
                className=' max-w-sm sm:max-w-xs flex-1 rounded overflow-hidden shadow-lg hover:shadow-2xl bg-white'
              >
                <img
                  src={image}
                  alt={name}
                  className='mx-auto w-36 h-28 mt-2'
                />
                <div className='px-2 py-4'>
                  <p className='text-left text-lg capitalize font-bold'>
                    {name}
                  </p>
                  <p className='text-left text-xs'>{description}</p>
                </div>
                <div className='flex justify-between align-middle p-2 mx-1'>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor='#ffd700'
                    size={18}
                  />
                  {/* <span>{rating}</span> */}
                  <button className='w-20 h-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold border border-blue-500 hover:border-transparent rounded'>
                    <Favorite className='mr-1 text-xs' />
                    <span className='text-sm'>Watch</span>
                  </button>
                </div>
              </article>
            </>
          )
        })}
      </div>
      <div className='flex flex-row align-middle mt-4 justify-center'>
        <button
          className='p-3 hover:bg-blue-500 text-blue-700 font-semibold border hover:border-blue rounded-full'
          style={{ backgroundColor: '#ebf2ff' }}
        >
          Show More <KeyboardArrowDown />
        </button>
      </div>
    </>
  )
}

export default Card
