import { useState } from "react";
import "./index.scss";

const questions = [
  {
    title: "Кто был первым военным министром Российской империи?",
    variants: ["Аракчеев", "Барклай-де-Толли", "Вязмитинов", "Коновницын"],
    correct: 2,
  },
  {
    title: "Реки с каким названием нет на территории России?",
    variants: ["Спина", "Уста", "Палец", "Шея"],
    correct: 0,
  },
  {
    title: "Что Шекспир назвал «вкуснейшим из блюд в земном пиру»?",
    variants: ["Опьянение", "Любовь", "Уединение", "Сон"],
    correct: 3,
  },
  {
    title:
      "Кто из этих философов в 1864 году написал музыку на стихи А. С. Пушкина «Заклинание» и «Зимний вечер»?",
    variants: ["Юнг", "Ницше", "Шопенгауэр", "Гегель"],
    correct: 1,
  },
  {
    title: "С какой фигуры начинаются соревнования по городошному спорту?",
    variants: ["Часовые", "Артиллерия", "Пушка", "Пулемётное гнездо"],
    correct: 2,
  },
  {
    title: "Сколько раз в сутки подзаводят куранты Спасской башни Кремля?",
    variants: ["Один", "Два", "Три", "Четыре"],
    correct: 1,
  },
  {
    title:
      "Как назвали первую кимберлитовую трубку, открытую Ларисой Попугаевой 21 августа 1954 года?",
    variants: ["«Советская»", "«Зарница»", "«Удачная»", "«Мир»"],
    correct: 1,
  },
  {
    title:
      "Что Иван Ефремов в романе «Лезвие бритвы» назвал наивысшей степенью целесообразности?",
    variants: ["Красоту", "Мудрость", "Смерть", "Свободу"],
    correct: 0,
  },
  {
    title:
      "В какой из этих столиц бывших союзных республик раньше появилось метро?",
    variants: ["Ереван", "Тбилиси", "Баку", "Минск"],
    correct: 1,
  },
  {
    title: "Сколько морей омывают Балканский полуостров?",
    variants: ["3", "4", "5", "6"],
    correct: 3,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img
        alt="img"
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
      />
      <h2>
        Вы отгадали {correct} ответа из {questions.length}
      </h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ question, onClickVariant, step }) {
  const percentage = Math.round((step / questions.length) * 100);
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li key={text} onClick={() => onClickVariant(index)}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  const question = questions[step];
  return (
    <div className="App">
      {step !== questions.length ? (
        <Game question={question} onClickVariant={onClickVariant} step={step} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
