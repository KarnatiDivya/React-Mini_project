import React, { createContext, useState, useEffect } from 'react'


export const StudentsContext = createContext()


export function StudentsProvider({ children }){
const [students, setStudents] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)


useEffect(()=>{
async function fetchStudents(){
setLoading(true)
try{
const res = await fetch('https://jsonplaceholder.typicode.com/users')
if(!res.ok) throw new Error('Network error')
const data = await res.json()
const mapped = data.map(u=>({ id: String(u.id), name: u.name, email: u.email, course: 'Computer Science' }))
setStudents(mapped)
}catch (err) {
  console.error(err)
  setStudents([])   // fallback
  setError('Unable to load students')
}
finally{
setLoading(false)
}
}
fetchStudents()
},[])


const addStudent = (student)=>{
setStudents(prev => [{ ...student, id: String(Date.now()) }, ...prev])
}


const value = { students, addStudent, loading, error }
return <StudentsContext.Provider value={value}>{children}</StudentsContext.Provider>
}