import './Header.styles.css'
import brandIcon1 from '../../assets/icons/part1.svg'
import brandIcon2 from '../../assets/icons/part2.svg'
import telegramIcon from '../../assets/icons/telegram.svg'
import phoneIcon from '../../assets/icons/phone.svg'
import whatsappIcon from '../../assets/icons/whatsapp.svg'

const Header = () => {
  return (
    <header className="header">
      <div className={'container'}>
        <div className="header__brand">
          <a className="header__brand-icons">
            <img src={brandIcon1} alt="part1.svg" />
            <img src={brandIcon2} alt="part1.svg" />
          </a>
          <p>крупный интегратор CRM в России и ещё 8 странах</p>
        </div>
        <div className="header__navbar-wrap">
          <ul className="header__navbar-menu">
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Виджеты</a></li>
            <li><a href="#">Интеграции</a></li>
            <li><a href="#">Кейсы</a></li>
            <li><a href="#">Сертификаты</a></li>
          </ul>
        </div>
        <ul className="header__contacts">
          <li><a href="#">+7 555 555-55-55</a></li>
          <li>
            <a href="#"><img src={telegramIcon} alt="telegram.svg" /></a>
          </li>
          <li>
            <a href="#"><img src={phoneIcon} alt="phone.svg" /></a>
          </li>
          <li>
            <a href="#"><img src={whatsappIcon} alt="whatsapp.svg" /></a>
          </li>
        </ul>
      </div>
    </header>

  );
};

export default Header;