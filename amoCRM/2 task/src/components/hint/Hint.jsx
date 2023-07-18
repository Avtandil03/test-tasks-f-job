import './Hint.styles.css'
// eslint-disable-next-line react/prop-types
const Hint = ({ close }) => {

  return (
    <div className='closeWrapper' onClick={close} >
      <div className="hint">
        <button className="hint__close-btn" onClick={close}>⨉</button>
        <p className="hint__text">Пожалуйста, откройте режим разработчика, нажав клавишу F12, и включите режим `Toggle device toolbar - Ctrl+Shift+M`. Предлагается там сравнивать масштаб выставив нужные размеры экрана, так как на разных устройствах настройки экрана отличаются.</p>
      </div>
    </div>

  );
};

export default Hint;
