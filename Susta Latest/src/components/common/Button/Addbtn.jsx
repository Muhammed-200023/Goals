import { PlusCircleOutlined } from '@ant-design/icons'
import React from 'react'

function Addbtn() {
  return (
    <div className='flex gap-1 '>
    <PlusCircleOutlined className='text-[#014D4E] text-[15px]'/><button className='pb-[2px]   text-[#014D4E] font-semibold'>Add</button>
    </div>
  )
}

export default Addbtn
