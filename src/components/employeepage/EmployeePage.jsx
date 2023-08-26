import "./employeepage.css";
import Header from "../header/Header";
// import EmployeeListItem from '../employeelistitem/EmployeeListItem'
export default function EmployeePage({employee}) {
  return (
    <div className="EmployeePage">
      <Header title="Employee" />
      <div className="employeeOverview">
        <div className="profile-icon"></div>
        <div className="profile-info">
          <h2>{employee.name}</h2>
          <h4>{employee.title}</h4>
        </div>
      </div>
      <div className="employeeOffice">
        <h3>Call Office</h3>
        <p>222-333-4567</p>
      </div>
      <div className="employeeMobile">
        <h3>Call Mobile</h3>
        <p>720-333-8786</p>
      </div>
      <div className="employeeSMS">
        <h3>SMS</h3>
        <p>478-553-456</p>
      </div>
      <div className="employeeEmail">
        <h3>Email</h3>
        <p>asdflkj@gmail.com</p>
      </div>
    </div>
  );
}
