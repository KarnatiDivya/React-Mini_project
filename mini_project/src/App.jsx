import React from 'react'
import { Routes, Route } from 'react-router-dom'
import StudentsList from './pages/StudentsList'
import Home from './pages/Home'
import AddStudent from './pages/AddStudent'
import StudentDetails from './pages/StudentDetails'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
<div className="min-h-screen bg-gray-50">
  <h1 style={{textAlign:"center", margin:"5px"}}>Student DashBoard</h1>
<Navbar />
<main className="p-6">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/students" element={<StudentsList />} />
<Route path="/students/add" element={<AddStudent />} />
<Route path="/students/:id" element={<StudentDetails />} />
<Route path="*" element={<div>Page not found</div>} />
</Routes>
</main>
<footer>
  © {new Date().getFullYear()} All rights reserved by Divya Karnati
</footer>

</div>
)
}

export default App
