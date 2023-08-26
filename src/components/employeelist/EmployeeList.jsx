import "./employeelist.css";
import EmployeeListItem from "../employeelistitem/EmployeeListItem";
export default function employeelist({handleUserClick}) {
  const employeeObjectList = [
    { name: "James King", title: "President and CEO", img:"./components/images/img1.png"},
    { name: "Julie Taylor", title: "Security Analyst", img:"./components/images/img2.png" },
    { name: "Paul Jones", title: "Help Desk", img: "./components/images/img3.png"},
    { name: "Eugene Lee", title: "Head Of Sales", img:"./components/images/img4.png"},
    { name: "John Williams", title: "Software Engineer",img:"./components/images/img5.png"},
  ];
  return (
    <div className="EmployeeList">
      {employeeObjectList.map((item) => {
        return (
          <EmployeeListItem
          handleUserClick={handleUserClick}
            employeeImage={item.img}
            employeeName={item.name}
            employeeTitle={item.title}
          />
        );
      })}
      {/* <EmployeeListItem
        employeeName="James King"
        employeeTitle="President and CEO"
      /> */}
      {/* <EmployeeListItem
        employeeName="Julie Taylor"
        employeeTitle="VP of Marketing"
      />
      <EmployeeListItem
        employeeName="Paul Jones"
        employeeTitle="President and CEO"
      />
      <EmployeeListItem
        employeeName="Eugene Lee"
        employeeTitle="President and CEO"
      />
      <EmployeeListItem
        employeeName="John Williams"
        employeeTitle="President and CEO"
      />
      */}
    </div>
  );
}
