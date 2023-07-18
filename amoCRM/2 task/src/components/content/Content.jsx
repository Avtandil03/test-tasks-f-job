import './Content.styles.css'

const Content = () => {
  return (
    <section className="content">
  <div className="container">
    <div className="content__suggestion">
      <h1 className="content__suggestion-title">
        Зарабатывайте
        <br /> больше
        <br /> <span>с WELBEX</span>
      </h1>
      <p className="content__suggestion-subtitle">
        Развиваем и контролируем <br /> продажи за вас
      </p>
    </div>
    <div className="content__consultation">
      <h4 className="content__consultation-title">
        Вместе с{' '}
        <span>
          БЕСПЛАТНОЙ <br /> КОНСУЛЬТАТЦИЕЙ
        </span>{''}
        мы дарим:
      </h4>
      <ul className="content__consultation-lists">
        <li className="content__consultation-item widgets">
          <h5 className="content__item-title">
            <span className="mobile">30 ВИДЖЕТОВ</span>
            <span className="desctop">ВИДЖЕТЫ</span>
          </h5>
          <p className="content__item-subtitle">30 готовых решений</p>
        </li>
        <li className="content__consultation-item dashboard">
          <h5 className="content__item-title">DASHBOARD</h5>
          <p className="content__item-subtitle">
            c показателями вашего бизнеса
          </p>
        </li>
        <li className="content__consultation-item skypeAudit">
          <h5 className="content__item-title">SKYPE АУДИТ</h5>
          <p className="content__item-subtitle">
            отдела продаж
            <br /> и CRM системы
          </p>
        </li>
        <li className="content__consultation-item _35days">
          <h5 className="content__item-title">
            <span className="mobile">МЕСЯЦ AMOCRM</span>
            <span className="desctop">35 ДНЕЙ</span>
          </h5>
          <h5>
            <p className="content__item-subtitle">использования CRM</p>
          </h5>
        </li>
      </ul>
      <button className="content__consultation-button">
        <a href="#">Получить консультацию</a>
      </button>
    </div>
  </div>
</section>

  );
};

export default Content;