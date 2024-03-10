import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { QUESTIONS_CHAP2 } from '../../constants';

export function QuizzScreen({ currentChap, setScreen }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [answerValidated, setAnswerValidated] = useState(true);

    const quizData = QUESTIONS_CHAP2;

    const handleAnswerValidation = () => {
        if (!currentAnswer) {
            alert('Veuillez sélectionner une réponse.');
            return;
        }
        setAnswerValidated(true);
        console.log("Handle Anwser Validation : " + answerValidated);
    };

    const goToNextQuestion = () => {
        const correctAnswer = quizData[currentQuestion]?.answer;
        if (correctAnswer === currentAnswer) {
            setScore((prevScore) => prevScore + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizData.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
        setCurrentAnswer(null);
        setAnswerValidated(false);
        console.log("Go to next question : " + answerValidated);
    };

    const handleRestart = () => {
        console.log("Restart : " + answerValidated);
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setAnswerValidated(false);
        console.log("Restart : " + answerValidated);
    };

    return (
        <View style={styles.container}>
            <Text>{currentChap.nom}</Text>
            {showScore ? (
                <View>
                    <Text style={styles.optionStyle}>{score}</Text>
                    <TouchableOpacity style={styles.optionContainer} onPress={handleRestart}>
                        <Text style={styles.restartButton}>Reset</Text>
                    </TouchableOpacity>
                </View>
            ) : !answerValidated ? (
                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>{quizData[currentQuestion]?.question}</Text>
                    {quizData[currentQuestion]?.options.map((option) => (
                        <TouchableOpacity
                            key={option}
                            onPress={() => setCurrentAnswer(option)}
                            style={[
                                styles.optionContainer,
                                currentAnswer === option
                                    ? { backgroundColor: 'lightblue', opacity: 1 } 
                                    : { opacity: 0.5 }, 
                            ]}
                        >
                            <Text style={styles.optionStyle}>{option}</Text>
                        </TouchableOpacity>
                    ))}

                    <TouchableOpacity onPress={handleAnswerValidation} style={styles.optionContainer}>
                        <Text>Valider</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>{quizData[currentQuestion]?.question}</Text>
                    {quizData[currentQuestion]?.options.map((option) => (
                        <View
                            key={option}
                            style={[
                                styles.optionContainer,
                                option === quizData[currentQuestion]?.answer
                                    ? styles.correctAnswer
                                    : answerValidated ? styles.wrongAnswer : {},
                            ]}
                        >
                            <Text style={[
                                styles.optionStyle,
                                option === quizData[currentQuestion]?.answer
                                    ? styles.correctAnswerText
                                    : answerValidated ? styles.wrongAnswerText : {},
                            ]}>{option}</Text>
                        </View>
                    ))}
                    <TouchableOpacity onPress={goToNextQuestion} style={styles.optionContainer}>
                        <Text>Suivant</Text>
                    </TouchableOpacity>
                </View>
            )}
            <TouchableOpacity onPress={() => setScreen("menu")} style={styles.menuButton}>
                <Text>Menu</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C9E7FA',
        alignItems: "center",
        justifyContent: "center",
    },
    questionContainer: {
        backgroundColor: '@DDDDDD',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    optionStyle: {
        padding: 5,
        alignSelf: "center",
        fontSize: 18,
    },
    optionContainer: {
        borderColor: "black",
        borderWidth: 2,
        marginTop: 15,
    },
    questionText: {
        fontSize: 24,
    },
    restartButton: {
        fontSize: 18,
        paddingHorizontal: 10,
    },
    correctAnswer: {
        color: 'green',
        borderColor: "green"
    },
    wrongAnswer: {
        color: 'red',
        borderColor: "red"
    },
    correctAnswerText: {
        color: 'green'
    },
    wrongAnswerText: {
        color: 'red'
    },
    selectedAnswer: {
        borderColor: "black"
    },
    unselectedAnswer: {
        borderColor: "grey"
    },
    selectedAnswerText: {
        color: "black"
    },
    unselectedAnswerText: {
        color: "grey"
    }
});
