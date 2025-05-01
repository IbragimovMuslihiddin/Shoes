import React from 'react'
import Deletebtn from '@/components/Deletebtn'
import EditUser from '@/components/EditUser'
import Image from 'next/image'

const CardUser = ({ e }) => {
	return (
		<div className='w-[300px] p-4 shadow-md'>
			{e.images?.map(img => (
				<Image
					key={img.id}
					src={`https://to-dos-api.softclub.tj/images/${img.imageName}`}
					alt='product image'
					width={250}
					height={200}
					className='object-contain mx-auto mb-2'
				/>
			))}

			<h3 className='text-xl text-center font-semibold mt-2'>{e.name}</h3>
			<p className='text-lg text-center text-gray-600'>{e.description}</p>
			<p className='mt-1 text-center'>
				14.000₽ <del className='text-xs text-gray-500 ml-1'>17.000₽</del>
			</p>

			<div className='mt-2 flex justify-center gap-3'>
				<Deletebtn id={e.id} />
				<EditUser
					id={e.id}
					initialName={e.name}
					initialDescription={e.description}
				/>
			</div>
		</div>
	)
}

export default CardUser
