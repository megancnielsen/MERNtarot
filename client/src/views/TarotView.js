import React from 'react';

const TarotView = () => {
    return (
        <container fluid>
            <div className="w-100 row">
                <div className="col">
                    <h1 class="text-justify">About Tarot...</h1>
                    <p>From Wikipedia, "The tarot is a pack of playing cards, used from the mid-15th century in various parts of Europe to play games such as Italian tarocchini, French tarot and Austrian Konigrufen, many of which are still played today. In the late 18th century, some tarot decks began to be used for divination via tarot card reading and cartomancy leading to custom decks developed for such occult purposes."</p>
                </div>
                <div className="col mr-1">
                    <img className="w-40" src="https://placeimg.com/300/300/people" alt=""/>
                </div>
            </div>
            <div className="row border border-dark m-5"></div>
            <div className="row">
                <p>Connect:
                Email: segoviatarot@gmail.com | Instagram: @t_n_tarot</p>
            </div>
        </container>
    )
}

export default TarotView;