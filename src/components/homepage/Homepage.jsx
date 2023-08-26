import React from 'react'
import './homepage.css'
import Header from '../header/Header'
import SearchBar from '../searchbar/SearchBar'
import EmployeeList from '../employeelist/EmployeeList'
export default function Homepage({handleUserClick}){
    return(
    <div className='Homepage'>
        {/* This is homepage */}
        <Header title = "Employee Directory"/>
        <SearchBar />
        <EmployeeList handleUserClick={handleUserClick}/>
    </div>
    )
}