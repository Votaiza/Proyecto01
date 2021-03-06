import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

    const imgProduct = '/static/img/01.png';
    
    return (
        <div className="uk-container">
            <div className="uk-grid-medium uk-child-width-1-3"
                 uk-grid="true"
                 uk-height-viewport="expand: true"
                 uk-height-match="row:true">
                
                <div className="uk-margin-auto-vertical">
                    <div className="uk-margin-large-top uk-margin-medium-left">
                        <h1 className="uk-text-left">Organic kohaku water</h1>
                    </div>

                    <div className="uk-margin-medium uk-margin-medium-left uk-margin-medium-right">
                        <p className="price uk-text-left">$39.00</p>
                        <p>Fresh, tangy and zesty lime with refreshing minty notes</p>
                    </div>

                    <div className="uk-flex uk-flex-middle uk-margin-medium-bottom uk-margin-medium-left">
                        <div className="uk-margin-medium-right">
                            <button className="uk-button uk-button-secondary uk-border-pill">
                                <span uk-icon="icon: check; ratio: 1"></span>
                                Add to cart
                            </button>
                        </div>
                        
                        <div>
                            <button className="uk-button uk-button-link uk-text-danger" >

                                <span uk-icon="icon: heart; ratio: 1.5"></span>                                
                            </button>
                        </div>
                        
                    </div>
                </div>
                
                <div className="background-gray border-radius uk-inline">                    
                    
                    <div className="uk-position-large uk-position-top-right uk-margin-remove-right uk-button uk-button-secondary uk-border-pill">                        
                        <p className="uk-text-center uk-margin-auto-vertical"><span uk-icon="icon: instagram; ratio: 1"
                            className=""></span> Instagram</p>                        
                    </div>

                    <div className="uk-position-large uk-position-bottom-left uk-margin-remove-left uk-button uk-button-primary uk-border-pill">
                        <p className="uk-text-center uk-margin-auto-vertical"><span uk-icon="icon: facebook; ratio: 1"
                            className=""></span> Facebook</p> 
                    </div>

                    <div className="">
                        <img src={imgProduct}  width="300" alt="" uk-img="true"></img>
                    </div>                    
                                        
                </div>
                
                <div className="uk-flex uk-flex-column uk-flex-between uk-margin-auto-vertical">
                    <div className="uk-margin-large-top">
                        <button uk-icon="icon: arrow-left; ratio: 2">

                        </button>

                        <button uk-icon="icon: arrow-right; ratio: 2">

                        </button>
                    </div>

                    <div className="uk-margin-small-bottom">
                        <ul uk-accordion="collapsible: false">
                            <li>
                                <Link className="uk-accordion-title" to="#">Description</Link>
                                <div className="uk-accordion-content">
                                    <p>Fresh, tangy and zesty lime with refreshing minty notes</p>
                                </div>
                            </li>
                            <li>
                                <Link className="uk-accordion-title" to="#">Nutrition</Link>
                                <div className="uk-accordion-content">
                                    <p>Fresh, tangy and zesty lime with refreshing minty notes</p>
                                </div>
                            </li>
                            <li className="uk-open">
                                <Link className="uk-accordion-title" to="#">Ingredients</Link>
                                <div className="uk-accordion-content">
                                    <p>Fresh, tangy and zesty lime with refreshing minty notes</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
