import './header.css'
import logo from './../../image/logo copy 1.svg'
import dino from'./../../image/din 1.png'

function Header() {
    return (

        <header className="header">
            
            <div className="container">

                <div className="header_row">

                    <div className="header_logo">
                    
                        <img src={logo} alt='logo' />

                    </div>

                    <nav className="header_nav">

                        <ul>
                            <li><a href="!#">О нас</a></li>
                            <li><a href="!#">Услуги</a></li>
                            <li><a href="!#">Аренда</a></li>
                        </ul>

                    </nav>

                    <div className="header_button"><a href="!#" className='header_btn'>Связаться</a></div>
                </div>

                <div className="header_content">
                    <div className="header_content_text">
                        <h1>Веломастерская “Велозар”</h1>

                        <h4>Мы, мастера веломастерской «Велозар», 
                            как раз те самые счастливые люди,
                            которые смогли превратить свое увлечение и хобби в профессию.
                            Мы сами любим кататься и хотим чтобы 
                            Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.

                        </h4>
                    </div>

                    

                    <img src={dino} alt='dino' />

                </div>

            </div>

        </header>
    )
}

export default Header;