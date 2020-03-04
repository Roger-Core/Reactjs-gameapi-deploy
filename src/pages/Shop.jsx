import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function Shop() {

    const textStyle = {
        color: 'gainsboro',
        borderRadius: '15px'
    }

    useEffect(() => {
        fetchGames()
    }, [])


    const [games, setGames] = useState([])

    const fetchGames = async () => {
        const data = await fetch('https://api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added')

        const games = await data.json()
        console.log(games.results)
        setGames(games.results)
    }

    return (
        <div className='game'>
            {games.map(game => (
                <h1 className='gameText' key={game.id}>
                    <div>
                        <img src={game.background_image} style={textStyle} width='560' height='400' alt="" />
                    </div>
                    <Link style={textStyle} to={`/shop/${game.id}`}>{game.name}</Link>
                </h1>
            ))}
        </div>
    )
}

export default Shop
