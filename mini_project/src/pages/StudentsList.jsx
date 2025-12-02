import React, { useMemo, useState, useCallback } from 'react'
import useFetchStudents from '../hooks/useFetchStudents'
import StudentCard from '../components/StudentCard'
import '../pages/List.css'


export default function StudentsList(){
const { students, loading, error } = useFetchStudents()
const [query, setQuery] = useState('')


const handleSearch = useCallback((e)=> setQuery(e.target.value), [])


// useMemo to filter
const filtered = useMemo(()=>{
const q = query.trim().toLowerCase()
if(!q) return students
return students.filter(s => s.name.toLowerCase().includes(q) || s.email.toLowerCase().includes(q))
}, [students, query])


if(loading) return <div>Loading students...</div>
if(error) return <div className="text-red-600">Error: {error}</div>


return (
<div className="container mx-auto">
<div className="flex items-center justify-between mb-4">
<h2 className="text-2xl font-semibold">Students</h2>
<input placeholder="Search by name or email" value={query} onChange={handleSearch} className="border rounded px-3 py-1" />
</div>
<div className="student-grid">
  {filtered.map(s => <StudentCard key={s.id} student={s} />)}
</div>

{filtered.length === 0 && <div className="mt-6 text-gray-600">No students found.</div>}
</div>
)
}