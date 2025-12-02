import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetchStudents from '../hooks/useFetchStudents'


export default function AddStudent(){
const { addStudent } = useFetchStudents()
const navigate = useNavigate()


const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [course, setCourse] = useState('')
const [error, setError] = useState(null)


function validate(){
if(!name.trim()) return 'Name is required'
if(!email.includes('@')) return 'Valid email required'
return null
}


function handleSubmit(e){
e.preventDefault()
const v = validate()
if(v){ setError(v); return }
addStudent({ name: name.trim(), email: email.trim(), course: course || 'Undeclared' })
navigate('/students')
}


return (
<div className="container mx-auto max-w-md">
<h2 className="text-2xl font-semibold mb-4">Add Student</h2>
{error && <div className="text-red-600 mb-2">{error}</div>}
<form onSubmit={handleSubmit} className="space-y-3 bg-white p-4 rounded shadow">
<div>
<label className="block text-sm">Name</label>
<input className="border rounded w-full px-2 py-1" value={name} onChange={e=>setName(e.target.value)} />
</div>
<div>
<label className="block text-sm">Email</label>
<input className="border rounded w-full px-2 py-1" value={email} onChange={e=>setEmail(e.target.value)} />
</div>
<div>
<label className="block text-sm">Course</label>
<input className="border rounded w-full px-2 py-1" value={course} onChange={e=>setCourse(e.target.value)} />
</div>
<div className="text-right">
<button className="px-4 py-1 rounded bg-blue-600 text-white" type="submit">Add</button>
</div>
</form>
</div>
)
}