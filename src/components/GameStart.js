import React, { useState } from "react"

export default function GameStart(props) {
    return (
        props.show ?
            <div id="game-start">
                <button id="start" onclick="startGame()">Começar Jogo</button>
            </div> :
            <></>
    )
}