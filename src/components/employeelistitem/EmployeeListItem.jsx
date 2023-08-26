import React from "react";
import { useState } from "react";
import "./employeeListItem.css";
import EmployeePage from "../employeepage/EmployeePage";

export default function EmployeeListItem({
  employeeImage,
  employeeName,
  employeeTitle,
  handleUserClick,
}) {
  return (
    <div onClick={() =>{handleUserClick({img:employeeImage,name:employeeName, title: employeeTitle})}} /*invoke function*/className="EmployeeListItem">
      {/* <img>{employeeImage}</img> */}
      <h3>{employeeName}</h3>
      <p>{employeeTitle}</p>
    </div>
  );
}
