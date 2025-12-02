import { useContext } from 'react'
import { StudentsContext } from '../context/StudentsContext'
export default function useFetchStudents(){
return useContext(StudentsContext)
}