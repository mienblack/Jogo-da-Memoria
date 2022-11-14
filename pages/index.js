import React, { useEffect, useState } from "react";
import game from "../src/game"
import GameStart from "../src/components/GameStart"
import GameOver from "../src/components/GameOver"
import GameBoard from "../src/components/GameBoard";
import Timer from "../src/components/Timer"
import Results from "../src/components/Results"

export default function MemoryGame() {
    const [gameStartVisible, setGameStartVisible] = useState(false)
    const [gameOverVisible, setGameOverVisible] = useState(false)
    const [cards, setCards] = useState([])

    const [counter, setCounter] = useState("00:00:00")
    const [second, setSecond] = useState(0)
    const [minute, setMinute] = useState(0)
    const [hour, setHour] = useState(0)

    function startGame() {
        setGameStartVisible(false)
        setCards(game.createCardsFromCharacters())
    }

    function restartGame() {
        game.clearCards()
        setCards(game.createCardsFromCharacters())
    }

    useEffect(()=>{
        setCards(game.createCardsFromCharacters())
    },[])

    function handleFlip(card) {
        game.flipCard(card.id, () => {
            setGameOverVisible(true)
        }, () => {
            setCards([...game.cards])
        })
        setCards([...game.cards])        
    }
    /*
        useEffect(()=>{
            let cron = setInterval(() => {
                setSecond(prev=>prev+1)
                if (second == 60) {
                    second = 0
                    setMinute(prev=>prev+1)
                }
                if (minute == 60) {
                    minute = 0
                    setHour(prev=>prev+1)
                }
        
                setCounter((hour < 10 ? "0" + hour : hour) + ":" + (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second))
            }, 1000)
        },[counter])
    */
    return (
        <>
            <Timer counter={counter} />
            <GameStart show={gameStartVisible} onStart={startGame} />
            <GameBoard handleFlip={handleFlip} cards={cards} />
            <GameOver show={gameOverVisible} onRestart={restartGame} />
            <Results />
        </>
    )
}