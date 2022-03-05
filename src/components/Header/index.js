import './styles.css';
import logo from '../../assets/logo.png'

export default function Header() {
    return (
        
        <header className='header_container'>
            <img src={logo} alt="logo" className='logo_header'/>
            <ul className='header_lista'>
                <li className='item_list_header'>Home</li>
                <li className='item_list_header'>Front-End</li>
                <li className='item_list_header'>Back-End</li>
            </ul>

        </header>
    )
}