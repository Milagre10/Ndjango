import Logo from '../../assets/Logo.png'
import './Footer.css'
import { FaBeer, FaPhone } from 'react-icons/fa';
 
function Footer(){
    return(
        <>
            <div className="caixinha">
                <div className="item">
                    <img src={Logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blandit.</p>
                </div>
                <div className="item">
                <h3>Nossos servicos</h3>
                    <ul>
                       
                    <li><a href="">Comprar</a></li>
                        <li><a href="">Vender</a></li>
                        <li><a href="">Aluguer</a></li>
                        <li><a href="">Reserva</a></li>
                    </ul>
                </div>
                <div className="item">
                <h3>FAQ</h3>
                    <ul>
                        
                        <li><a href="">Como Comprar</a></li>
                        <li><a href="">Como vender</a></li>
                        <li><a href="">Como Alugar</a></li>
                        <li><a href="">Central de Ajuda</a></li>
                    </ul>
                </div>
                <div className="item">
                <h3>Sobre a empresa</h3>
                    <ul>
                    <li><span>Av. Namaacha, Luis Cabral, Josina</span></li>
                        <li><span></span> <FaPhone />      848347066</li>
                        <li><a href="#">Ajuda</a></li>
                        <li><a href="">Agent Manager</a></li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright 2024 Milagre Technologies All Rigths reserved </p>
                <div className='termos'> 
                    <li><a href="">Termos</a></li>
                    <li><a href="">Privacidade</a></li>
                    <li><a href="">Cookies</a></li>
                </div>
            </div>
        </>
    )
}
export default Footer;