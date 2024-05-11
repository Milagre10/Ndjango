
import Logo from '../../assets/Logo.png'
import  './Header.css'
function Header(){

    return(
        <>
        <div className='caixa'>
                <div className='menu_section left'>
                    <div className='menu_link'>
                        <li><a href="">Vender</a></li>
                        <li><a href="">Comprar</a></li>
                        <li><a href="">Aluguer</a></li>
                        <li><a href="">Agent Finder</a></li>
                    </div>
                </div>
                <div className='logo'>
                   <a href=""> <img src={Logo} alt="" /></a>
                </div>
                <div className='menu_section right'>
                    <div className='menu_link'>
                        <li><a href="" clas>Agent Manager</a></li>
                        <li><a href="">Publicar Imovel</a></li>
                        <li><a href="">Ajuda</a></li>
                        <li><a href="">Sign In</a></li>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Header;