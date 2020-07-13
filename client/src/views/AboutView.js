import React from 'react';

const AboutView = () => {
    return (
        <container fluid>
            <div className="row">
                <div className="col-auto">
                    <img className="rounded-circle" src="https://placeimg.com/300/300/people" alt=""/>
                </div>
                <div className="col">
                    <h1 className="row text center ml-3 d-block">About Juanita</h1>
                    <p className="ml-4 d-block">
                        Once upon a time....
                    </p>
                    <p className="ml-4 d-block">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical Latin literature from 45 BC, 
                        making it over 2000 years old. Richard McClintock, a Latin professor 
                        at Hampden-Sydney College in Virginia, looked up one of the more 
                        obscure Latin words, consectetur, from a Lorem Ipsum passage, and 
                        going through the cites of the word in classical literature, 
                        discovered the undoubtable source. Lorem Ipsum comes from sections 
                        1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes 
                        of Good and Evil) by Cicero, written in 45 BC. This book is a treatise 
                        on the theory of ethics.
                    </p>
                </div>
            </div>   
            <div className="row">
                <p className="ml-4 mt-1 d-block">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum
                </p>
            </div>
            <div className="row border border-dark m-5"></div>  
            <div className="row">
                <p>Connect:
                Email: segoviatarot@gmail.com | Instagram: @t_n_tarot</p>
            </div>                 
        </container>
    )
}
export default AboutView;