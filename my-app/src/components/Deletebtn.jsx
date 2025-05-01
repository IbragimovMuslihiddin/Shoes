'use client'
import React from 'react'
import axios from 'axios'
const API = 'https://to-dos-api.softclub.tj/api/to-dos'

const Deletebtn = ({id}) => {
	const deleteData = async() => {
		try {
			await axios.delete(`${API}?id=${id}`)
			location.reload()
		} catch (error) {
			console.error(error);
		}
	}
  return (
	 <div>
		<button className='bg-red-500 text-white p-1 rounded-2xl p-2' onClick={deleteData}>delete</button>
	 </div>
  )
}

export default Deletebtn
