import React, { useState } from "react";
import GameStart from "../src/components/GameStart"

export default function MemoryGame() {
    const [gameVisible, setGameVisible] = useState(true)

    return (
        <GameStart show={gameVisible} />
    )
}