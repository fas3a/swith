import React, { useState } from 'react'
import products from './data'
// import Favorite from '@material-ui/icons/Favorite'
import Header from './Header'
import { Delete, FavoriteBorderOutlined } from '@material-ui/icons/'
const Cart = () => {
  return (
    <>
      <Header />
      <div style={{ background: '#062B46' }} className='py-4'>
        <div
          className='grid grid-cols-1 md:grid-cols-6 gap-3 sm:columns-6 mx-auto  my-3'
          style={{ width: '80vw' }}
        >
          {products.map((product) => {
            const { id, name, image, description, amount, deduct, seller } =
              product
            return (
              <>
                <aside className='col-span-3 w-full flex overflow-hidden shadow-lg rounded hover:shadow-2xl bg-white'>
                  <img
                    src={image}
                    alt={name}
                    className='w-24 h-12 my-auto mx-2'
                  />
                  <div className='ml-2 flex flex-col align-middle justify-evenly'>
                    <div>
                      <p className='text-sm'>{seller}</p>
                      <p className='text-sm'>{description}</p>
                    </div>
                    <div className='flex align-bottom justify-between mt-2 w-full'>
                      <div className='hover:cursor-pointer font-semibold text-sm mr-4'>
                        <FavoriteBorderOutlined /> MOVE TO SAVE ITEM
                      </div>
                      <button className=' uppercase text-sm font-semibold'>
                        <Delete className='text-black' /> Remove
                      </button>
                    </div>
                  </div>
                </aside>
                <aside className='col-span-1 max-w-sm sm:max-w-xs flex flex-col align-middle justify-center rounded overflow-hidden shadow-lg hover:shadow-2xl bg-white p-2'>
                  <select name='' id=''>
                    <option value='select'>select</option>
                    <option value='select'>1</option>
                  </select>
                </aside>
                <aside className='col-span-1 max-w-sm sm:max-w-xs flex flex-col align-middle justify-center rounded overflow-hidden shadow-lg hover:shadow-2xl bg-white p-2 text-center'>
                  <p className='text-sm font-bold'>#{amount - deduct}</p>
                  <p className='text-sm line-through font-semibold mt-8'>
                    #{amount}
                  </p>
                  <p className='text-xs'>#{deduct}</p>
                  <p className='text-xs text-green-500'>saving</p>
                </aside>
                <aside className='col-span-1 max-w-sm sm:max-w-xs flex flex-col align-middle justify-center rounded overflow-hidden shadow-lg hover:shadow-2xl bg-white p-2'>
                  <p className='text-sm text-center font-bold text-opacity-70'>
                    #{amount - deduct}
                  </p>
                </aside>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Cart
