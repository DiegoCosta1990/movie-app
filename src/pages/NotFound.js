import React from 'react';
import { ButtonBackToHome } from '../component/ButtonBackToHome';

export const NotFound = () => (
    <div>
        <h1 className='title'>Error 404</h1>
        <h2 className='subtitle'>Page not found</h2>
        <br />
        <h4 className="subtitle">Go back to the home page to continue the Movie Search</h4>
        <ButtonBackToHome />
        
    </div>
)
