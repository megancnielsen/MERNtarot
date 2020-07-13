import React from 'react';
import NavBar from '../components/NavBar';

const AboutView = props => {
    return (
        <container>
        <NavBar />
            <div>
                <h1 class="text-center">About Juanita</h1>
            </div>
            <p>
                Once upon a time....
            </p>
        </container>
    )
}

export default AboutView;