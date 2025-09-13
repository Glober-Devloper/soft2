import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { getQuizData } from '../data/quizData';
import { CheckCircle, XCircle, RotateCcw, Trophy, Clock } from 'lucide-react';

interface QuizSectionProps {
  darkMode: boolean;
}

const QuizSection: React.FC<QuizSectionProps> = ({ darkMode }) => {
  const { activeUnit } = useContent();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const quizData = getQuizData(activeUnit);

  if (!quizData) {
    return (
      <div className={`text-center py-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        <Trophy className="w-12 h-12 mx-auto mb-4 opacity-50" />
        <p>Quiz not available for this unit</p>
      </div>
    );
  }

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setQuizStarted(false);
  };

  const calculateScore = () => {
    let correct = 0;
    quizData.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  if (!quizStarted) {
    return (
      <div className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
        <div className="text-center py-12">
          <Trophy className="w-16 h-16 mx-auto mb-6 text-yellow-500" />
          <h1 className="text-3xl font-bold mb-4">Quiz Time!</h1>
          <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Test your knowledge with {quizData.questions.length} questions
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <Clock className="w-4 h-4" />
              <span>{quizData.questions.length * 2} min</span>
            </div>
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <Trophy className="w-4 h-4" />
              <span>{quizData.questions.length} questions</span>
            </div>
          </div>
          <button
            onClick={() => setQuizStarted(true)}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors duration-200"
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / quizData.questions.length) * 100);

    return (
      <div className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
        <div className="text-center py-12">
          <Trophy className={`w-16 h-16 mx-auto mb-6 ${percentage >= 70 ? 'text-yellow-500' : 'text-gray-400'}`} />
          <h1 className="text-3xl font-bold mb-4">Quiz Complete!</h1>
          <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {percentage}%
          </div>
          <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            You scored {score} out of {quizData.questions.length} questions correctly
          </p>
          
          <div className="space-y-4 mb-8 max-w-2xl mx-auto">
            {quizData.questions.map((question, index) => (
              <div key={index} className={`p-4 rounded-lg text-left ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex items-start space-x-3">
                  {selectedAnswers[index] === question.correctAnswer ? (
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  )}
                  <div>
                    <p className="font-medium mb-2">{question.question}</p>
                    <p className={`text-sm ${selectedAnswers[index] === question.correctAnswer ? 'text-green-600' : 'text-red-600'}`}>
                      Your answer: {question.options[selectedAnswers[index]]}
                    </p>
                    {selectedAnswers[index] !== question.correctAnswer && (
                      <p className="text-sm text-green-600">
                        Correct answer: {question.options[question.correctAnswer]}
                      </p>
                    )}
                    <p className={`text-xs mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {question.explanation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={resetQuiz}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors duration-200 mx-auto"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake Quiz</span>
          </button>
        </div>
      </div>
    );
  }

  const question = quizData.questions[currentQuestion];

  return (
    <div className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Question {currentQuestion + 1} of {quizData.questions.length}
          </span>
          <div className={`w-64 h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / quizData.questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-6">{question.question}</h2>
      </div>

      <div className="space-y-3 mb-8">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            className={`w-full p-4 text-left rounded-lg border transition-colors duration-200 ${
              selectedAnswers[currentQuestion] === index
                ? darkMode
                  ? 'bg-blue-900/50 border-blue-400 text-blue-200'
                  : 'bg-blue-50 border-blue-300 text-blue-800'
                : darkMode
                  ? 'bg-gray-800 border-gray-700 hover:border-gray-600'
                  : 'bg-white border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selectedAnswers[currentQuestion] === index
                  ? 'border-blue-500 bg-blue-500'
                  : darkMode
                    ? 'border-gray-500'
                    : 'border-gray-300'
              }`}>
                {selectedAnswers[currentQuestion] === index && (
                  <CheckCircle className="w-4 h-4 text-white" />
                )}
              </div>
              <span>{option}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
          disabled={currentQuestion === 0}
          className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
            currentQuestion === 0
              ? darkMode ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
          }`}
        >
          Previous
        </button>
        
        <button
          onClick={nextQuestion}
          disabled={selectedAnswers[currentQuestion] === undefined}
          className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
            selectedAnswers[currentQuestion] === undefined
              ? darkMode ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
          }`}
        >
          {currentQuestion === quizData.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
        </button>
      </div>
    </div>
  );
};

export default QuizSection;