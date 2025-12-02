import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Navbar(){
const linkClass = ({isActive}) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
return (
<nav className="bg-white shadow">
<div className="container mx-auto px-4 py-4 flex items-center justify-between">
<div className="space-x-4">
<NavLink to="/" className={linkClass}>Home</NavLink>
<NavLink to="/students" className={linkClass}>Students</NavLink>
<NavLink to="/students/add" className={linkClass}>Add Student</NavLink>
</div>
</div>
</nav>
)
}