import React from 'react';
import '../footer.css';

export function FooterComponent() {
    return (
        <footer>
        <br></br>
            <div className="content has-text-centered">
                    <em className="is-size-4"><b>Search Movies</b></em> by <a href="mailto:d.costa1990@outlook.com">Diego Alberto Costa</a>.
                    <p>Using the <em>Imdb API</em> to bring the movies to you.</p>
                    <p>You can contact me by my social networks pages:</p> 
                    <a href="https://www.linkedin.com/in/diego-alberto-costa-36338678/" className="fa fa-linkedin" aria-hidden="true"/>
                    <a href="https://www.facebook.com/Diego.LBT" className="fa fa-facebook" aria-hidden="true"/>
                    <a href="https://www.instagram.com/diegoalbertocosta/" className="fa fa-instagram" aria-hidden="true"/>
                    <a href="https://github.com/DiegoCosta1990" className="fa fa-github" aria-hidden="true"/>

            </div>
        </footer>
    )
}