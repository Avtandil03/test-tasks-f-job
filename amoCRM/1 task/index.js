// ## Задание 1

// Напишите реализацию таймера.

// Шаг анимации таймера 1 секунда.

// Форматирование таймера “hh:mm:ss”.

// Например 01:12:59 - один час, 12 минут, 59 секунд.

const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    const sec = seconds % 60;
    const min = Math.floor(seconds/60%60);
    const hour = Math.floor(seconds/60/60);
    timerEl.innerText = `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`
  };
};

const addZero = (num) => {
  return  num < 10 ? '0'+ num : num;
}

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  const target = e.target;
  if (target.value.match(/[^0-9]/g)) {
    target.value = target.value.replace(/[^0-9]/g, '');
  }

});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
