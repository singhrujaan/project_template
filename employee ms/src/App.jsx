import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Employee from './components/Employee'
import Category from './components/Category'
import Profile from './components/Profile'
import AddCategory from './components/AddCategory'
import AddEmployee from './components/AddEmployee'
import EditEmployee from './components/EditEmployee'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/adminlogin' element={<Login />}></Route>
      <Route path='/dashboard' element={<Dashboard />}>
      {/* <Route path='/dashboard' element={
        <PrivateRoute >
        <Dashboard />
        </PrivateRoute>
      }/> */}
      <Route path='/dashboard/employee' element={<Employee />}></Route>
      <Route path='/dashboard/category' element={<Category />}></Route>
      <Route path='/dashboard/profile' element={<Profile />}></Route>
      <Route path='/dashboard/add_category' element={<AddCategory />}></Route>
      <Route path='/dashboard/add_employee' element={<AddEmployee />}></Route>
      <Route path='/dashboard/edit_employee/:id' element={<EditEmployee />}></Route>
      </Route>
     </Routes>
     </BrowserRouter> 
  )
}

export default App
