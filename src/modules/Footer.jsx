export const Footer =()=> {
    return (
        <footer className="footer">
        <div className="container footer-container">
            <a href="" className="footer__logo-link">
                <img src="./image/logo (1).svg" alt="Logo Cup Time" className="footer__logo"/>
            </a>
            <div className="footer__nav">
                <ul className="footer__menu">
                    <li className="footer__menu-item">
                        <a href="#" className="footer__menu-link">Чай</a>
                    </li>
                    <li className="footer__menu-item">
                        <a href="#" className="footer__menu-link">Кофе</a>
                    </li>
                    <li className="footer__menu-item">
                        <a href="#" className="footer__menu-link">Чайники</a>
                    </li>
                    <li className="footer__menu-item">
                        <a href="#" className="footer__menu-link">Турки</a>
                    </li>
                    <li className="footer__menu-item">
                        <a href="#" className="footer__menu-link">Прочее</a>
                    </li>
                </ul>
            </div>
            <div className="footer__info">
                <p className="footer__copyright">©CUPTIME, 2024</p>
                <ul className="footer__developers">
                    <li className="footer__developer">Designer: 
                        <a href="#" className="footer__developer-link"> Anastasia Ilina</a>
                    </li>
                    <li className="footer__developer">Developer: 
                        <a href="#" className="footer__developer-link"> Albert Aliev</a>
                    </li>
                </ul>
            </div>
            <div className="footer__contacts">
                <a href="mailto:CUPTIME@gmail.com" className="footer__email">CUPTIME@gmail.com</a>
                <ul className="footer__social">
                    <li className="social__item">
                        <a href="#" className="footer__item-link"><img src="./image/tg.png" alt="tg logo"/></a>
                    </li>
                    <li className="social__item">
                        <a href="#" className="footer__item-link"><img src="./image/yt.png" alt="youtube logo"/></a>
                    </li>
                    <li className="social__item">
                        <a href="#" className="footer__item-link"><img src="./image/VK.png" alt="vk logo"/></a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    )
}