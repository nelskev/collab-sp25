import React from 'react';
import { Link } from 'react-router-dom';

export default function MissionStatement() {
  return (
        <div class="section section-1">

        <div class="black-background">
            <div class="section-text d-flex flex-column col-12 col-md-10 col-lg-8 col-xl-7">
                    <h1 class="fs-3">Scotts Auto Body - Collision Repair Specialists</h1>
                    <p>Serving the Treasure Valley since 1986, we are a trusted auto body shop and can help! We fix everything from small dents and scratches, to custom paint, and complete collision repair. Don't take our word for it, read our <Link to="/list_reviews"><a href="#reviews">reviews</a></Link> </p>
            </div>

        </div>  
    </div> 
  )
}
