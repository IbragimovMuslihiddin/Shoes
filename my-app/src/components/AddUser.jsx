'use client'
import React, { useState } from 'react'
import axios from 'axios'

const API = 'https://to-dos-api.softclub.tj/api/to-dos'

const AddUser = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState([])
  const [add, setAdd] = useState(false)


  const addData = async () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('description', description)
    for (let i = 0; i < image.length; i++) {
      formData.append('images', image[i])
    }

    try {
      await axios.post(API, formData)
		location.reload()
      setName('')
      setDescription('')
      setImage([])
      setAdd(false) 
    } catch (error) {
      console.error('Add product failed:', error)
    }
  }

  return (
    <div>
      <button
        onClick={() => setAdd(true)}
        className="bg-[#57BFC1] text-white p-2 rounded-2xl mb-20"
      >
        Add Products +
      </button>

      {add && (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-[gray] mx-10"
            placeholder="Add name"
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-[gray]"
            placeholder="Add description"
          />
          <input
            type="file"
            onChange={(e) => setImage(e.target.files)}
            multiple
          />
          <button onClick={addData} className="bg-black text-white mt-2">
            Done
          </button>
        </>
      )}
    </div>
  )
}

export default AddUser
