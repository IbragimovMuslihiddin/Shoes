'use client'

import React, { useState } from 'react'
import axios from 'axios'

const EditUser = ({ id, initialName, initialDescription }) => {
  const [nameE, setNameE] = useState(initialName)
  const [descriptionE, setDescriptionE] = useState(initialDescription)
  const [edit, setEdit] = useState(false)

  const editData = async () => {
    try {
      await axios.put(`https://to-dos-api.softclub.tj/api/to-dos`, {
        id: id,
        name: nameE,
        description: descriptionE,
      })
      location.reload()
      setEdit(false)
    } catch (error) {
      console.error('PUT error:', error)
    }
  }

  return (
    <div className='flex flex-col items-center gap-2'>
      {edit ? (
        <>
          <input
            type='text'
            value={nameE}
            onChange={(e) => setNameE(e.target.value)}
            className="border border-[gray] mx-10"
            placeholder='Add name'
          />
          <input
            type='text'
            value={descriptionE}
            onChange={(e) => setDescriptionE(e.target.value)}
            className="border border-[gray] mx-10"
            placeholder='Add description'
          />
          <button
            onClick={editData}
            className='bg-black text-white px-3 py-1 rounded'
          >
            Done
          </button>
        </>
      ) : (
        <button
          onClick={() => setEdit(true)}
          className='bg-gray-400 text-white rounded-2xl p-2'
        >
          Edit
        </button>
      )}
    </div>
  )
}

export default EditUser
