import './header.css'
export default function Header(props/*{title}*/){
    return (
        <div className='Header'>
           {/* "Employee Directory" */}
           <h2>{props.title}</h2>
        </div>
    )
}