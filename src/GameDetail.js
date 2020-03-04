import React, { useState, useEffect } from 'react'


function GameDetail({ match }) {

    const textStyle = {
        color: 'gainsboro',
        borderRadius: '15px'
    }

    useEffect(() => {
        fetchGame()
        console.log(match)
    }, [])


    const [game, setGame] = useState({
        developers: {},
        clip: {},
        clips: {}
    })


    const fetchGame = async () => {
        const fetchGame = await fetch(`https://api.rawg.io/api/games/${match.params.id}`)
        const game = await fetchGame.json()
        setGame(game)
        console.log(game)
    }




    return (
        <div>
            <h1 style={textStyle}>{game.name}</h1>
            <video style={textStyle} src={game.clip.clip} controls autoPlay width='760' alt="" />
            <h2 style={textStyle}>{game.website}</h2>
        </div>
    )
}

export default GameDetail
