import './Footer.styles.css'
import telegramIcon from '../../assets/icons/telegram.svg'
import phoneIcon from '../../assets/icons/phone.svg'
import whatsappIcon from '../../assets/icons/whatsapp.svg'

const Footer = () => {
  return (
    <footer className="footer">
  <div className="container">
    <div className="footer__inner">
      <div className="footer__top">
        <nav className="footer__nav">
          <div className="footer__nav-item">
            <p className="footer__nav-title">О КОМПАНИИ</p>
            <ul>
              <li>
                <a href="#" className="footer__nav-link">
                  Партнёрская программа
                </a>
              </li>
              <li>
                <a href="#" className="footer__nav-link">
                  Вакансии
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__nav-item">
            <p className="footer__nav-title">МЕНЮ</p>
            <ol className="footer__nav-nested">
              <ul className="footer__nested-item">
                <li><a href="#" className="footer__nav-link">Расчёт стоимости</a></li>
                <li><a href="#" className="footer__nav-link">Услуги</a></li>
                <li><a href="#" className="footer__nav-link">Виджеты</a></li>
                <li><a href="#" className="footer__nav-link">Интеграции</a></li>
                <li><a href="#" className="footer__nav-link">Наши клиенты</a></li>
              </ul>
              <ul className="footer__nested-item">
                <li><a href="#" className="footer__nav-link">Кейсы</a></li>
                <li><a href="#" className="footer__nav-link">Благодарственные письма</a></li>
                <li><a href="#" className="footer__nav-link">Сертификаты</a></li>
                <li><a href="#" className="footer__nav-link">Блог на Youtube</a></li>
                <li><a href="#" className="footer__nav-link">Вопрос / Ответ</a></li>
              </ul>
            </ol>
          </div>
          <div className="footer__nav-item">
            <p className="footer__nav-title">КОНТКТЫ</p>
            <a className="footer__phone" href="#">
              +7 555 555-55-55
            </a>
            <ul className="footer__contacts-icons">
              <li><a href="#"><img src={telegramIcon} alt="telegram.svg" /></a></li>
              <li><a href="#"><img src={phoneIcon} alt="phone.svg" /></a></li>
              <li><a href="#"><img src={whatsappIcon} alt="whatsapp.svg" /></a></li>
            </ul>
            <p className="footer__address">Москва, Путевой проезд 3с1, к 902</p>
          </div>
        </nav>
      </div>
      <div className="footer__bottom">
        <p className="footer__bottom-title">©WELBEX 2022. Все права защищены.</p>
        <a href="#" className="footer__bottom-subtitle">Политика конфиденциальности</a>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;