import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './components/homepage/Homepage'
import EmployeePage from './components/employeepage/EmployeePage'
import './App.css'


function App() {
  const [currentEmployee, setCurrentEmployee] = useState({
    name:'James King',
    title:'President and CEO'
  })
  // function as prop
  function handleUserClick(employeeObject){
    // console.log("clicked");
    // console.log(employeeObject)
    setCurrentEmployee(employeeObject)
    // selecting a user in the list
    //updating the right side of the page for that information
  }
 

  return (
    <div className='App'>
      {/* This is App */}
      <Homepage handleUserClick={handleUserClick}/> {/*pass the function as a props*/}
      <EmployeePage employee={currentEmployee}/>
     
    </div>
  )
}

export default App
