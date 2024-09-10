import React from 'react'
import { CloseCircleOutlined } from '@ant-design/icons'

export default function Deletebtn() {
  return (
    <div className='flex gap-1 '>
      <CloseCircleOutlined className='text-[#F22F23] text-[15px]'/>
      <button className='pb-[2px] text-[#F22F23] font-semibold'>Delete</button>
      </div>)
}
