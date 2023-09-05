import "./employeelist.css";
import EmployeeListItem from "../employeelistitem/EmployeeListItem";
export default function employeelist(handleUserClick) {
  const employeeObjectList = [
    {img:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png", name: "James King", title: "President and CEO"},
    {img:"https://www.clipartmax.com/png/middle/171-1717870_stockvader-predicted-cron-for-may-user-profile-icon-png.png", name: "Julie Taylor", title: "VP of Marketing"},
    {img:"https://cdn-icons-png.flaticon.com/512/3135/3135823.png", name: "Eugene Lee", title: "CFO"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaZvb6lJBuvgYuI___kRDyfEeVIOq8a4DmKg&usqp=CAU", name: "John Williams", title: "VP Of Engineering"},
    {img:"https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png", name: "Ray Moore", title: "VP of Sales"},
  ];
  return (
    <div className="EmployeeList">
      {employeeObjectList.map((item) => {
        return (
          <EmployeeListItem
          handleUserClick={handleUserClick}
            employeeImage={item.img}
            // <img src="{item.img}" alt="itemImage" />
            employeeName={item.name}
            employeeTitle={item.title}
          />
        );
      })}
      {/* <EmployeeListItem
        employeeImage={<img src = "./components/images/img1.png" alt="img1"/>}
        employeeName="James King"
        employeeTitle="President and CEO"
      />
      <EmployeeListItem
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
      /> */}
    </div>
  );
}
