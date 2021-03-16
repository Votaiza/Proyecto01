import React from 'react';
import { Link }  from 'react-router-dom';

export default function Navigation() {
    return (
        <nav class="uk-navbar-container" uk-navbar>
            <div class="uk-navbar-left uk-background-secondary">

                <ul class="uk-navbar-nav">
                    <li class="uk-active">
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>                        
                    </li>
                </ul>

            </div>
        </nav>
    )
}
