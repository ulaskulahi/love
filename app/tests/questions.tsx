import React, { useState } from "react";

type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

type Answer = {
  question: string;
  answer: string;
};

const questions: Question[] = [
  {
    question: "Kim daha çok seviyor?",
    options: ["Ulaş", "Gamze"],
    correctAnswer: "Ulaş",
  },
  {
    question: "İlk kim öptü?",
    options: ["Ulaş", "Gamze"],
    correctAnswer: "Ulaş",
  },
  {
    question: "Ulaş'ın en sevdiği renk?",
    options: ["Yeşil", "Mavi", "Gamze'nin gözlerinin rengi", "Sarı"],
    correctAnswer: "Gamze'nin gözlerinin rengi",
  },
  {
    question: "Ulaş'ın anneannesinin adı?",
    options: ["Cevdet", "Emel", "Evladiyelik", "Emine"],
    correctAnswer: "Emine",
  },
  {
    question:
      "Kim diğerinin müzik zevkini beğenmediğini söylemek yerine arabadan çalan müzikler için özür diledi?",
    options: ["Ulaş", "Gamze"],
    correctAnswer: "Gamze",
  },
  {
    question: "Ulaş Hacettepe'de hangi bölümü okuyordu?",
    options: [
      "İngiliz Dili ve Edebiyatı",
      "Alman Dili ve Edebiyatı",
      "Otomotiv",
      "Fransız Dili ve Edebiyatı",
    ],
    correctAnswer: "Alman Dili ve Edebiyatı",
  },
  {
    question: "Ulaş'ın Gamze'nin en sevdiği özelliği hangisi?",
    options: [
      "Çok güzel ve tatlı olması",
      "Dürüst ve anlayışlı olması",
      "Eğlenceli ve komik olması",
      "Dünyanın en iyi sevgilisi olması",
      "Hepsi",
    ],
    correctAnswer: "Hepsi",
  },
  {
    question: "Ulaş'ın telefon numarasi nedir?",
    options: [
      "+1-385-323-2298",
      "+1-986-232-2298",
      "+49-162-888-4287",
      "+1-385-232-9822",
    ],
    correctAnswer: "+1-385-232-9822",
  },
];

const getMessage = (score: number) => {
  if (score === 8)
    return "Sen bu ilişkinin ta kendisi olmuşsun. Seninle gurur duyuyorum";
  if (score < 8 && score >= 4)
    return "Çok iyi. Çalışman gereken bazı konular var.";
  if (score === 3) return "Yani. Son zamanlarda biraz boşladık galiba.";
  if (score === 2) return "Bu sonuç biraz düşündürdü.";
  return "Sen hiç emek vermemişsin ki bu ilişkiye.";
};

export default function QuizTest() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Answer[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleAnswerClick = (answer: string): void => {
    const isCorrect = answer === questions[currentQuestion].correctAnswer;

    setUserAnswers([
      ...userAnswers,
      { question: questions[currentQuestion].question, answer },
    ]);

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = (): void => {
    setCurrentQuestion(0);
    setScore(0);
    setUserAnswers([]);
    setShowResults(false);
  };

  return (
    <div className="flex flex-col items-center min-w-full">
      {!showResults ? (
        <div className="bg-white p-8 rounded-xl shadow-md max-w-[950px] w-full">
          <h2 className="text-cusRose text-xl font-semibold mb-4">
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <p className=" text-cusRose mb-6 text-lg">
            {questions[currentQuestion].question}
          </p>
          <div className=" flex flex-col space-y-4 items-center">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className=" bg-cusRose block md:w-[30%] w-[70%] text-white py-2 px-4 rounded-lg hover:bg-pink-200"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4 text-cusRose">
            Quiz Results
          </h2>
          <p className="text-lg mb-6">
            You scored {score} out of {questions.length}.
          </p>
          <p className="text-lg mb-6 font-bold">{getMessage(score)}</p>
          <h3 className="text-xl font-semibold mb-4 text-cusRose">
            Your Answers:
          </h3>
          <ul className="list-disc list-inside mb-4">
            {userAnswers.map((answerObj, index) => (
              <li key={index}>
                <strong>{answerObj.question}</strong> - {answerObj.answer}
              </li>
            ))}
          </ul>
          <button
            onClick={restartQuiz}
            className="bg-cusRose text-white py-2 px-4 rounded-lg hover:bg-pink-200"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}
