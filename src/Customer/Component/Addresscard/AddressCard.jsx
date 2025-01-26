import React from 'react'

const AddressCard = ({item}) => {
  return (
    <div>
        <div className = 'space-y-2'>
            <p className = 'font-semibold'>{item?.firstName} {item?.lastName}</p>
            <p>{item?.streetAddress}</p>
            <p>{item?.city},{item?.state},{item?.zipCode}</p>      
            <div className = 'space-y-1 font-semibold'>
                <p>{item?.phoneNumber}</p>
            </div>
        </div>
    </div>
  )
}

export default AddressCard