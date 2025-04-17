import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div class="section section-3 mt-4" id="services">
     <div class="d-flex flex-column gap-3 col-12 col-md-12 col-lg-11 col-xl-8 mx-auto">

        <h2 class="text-center my-4">Services that we offer</h2>
        
        {/* Collision Repair  */}
        <div class="card mb-3" id="collision-repair">
            <div class="row g-0">
              <div class="services col-md-4">
                <img src={'./collision-repair.jpg'} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title">Collision Repair</h3>
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus tempora consectetur. 
                    Labore aperiam nostrum illo molestias odio perspiciatis, officiis fugiat dolor sequi qui soluta itaque 
                    quae reprehenderit sunt ullam, ex esse repellendus? Obcaecati inventore earum.</p>
                    <button type="button" class="btn btn-dark">Read More</button>
                </div>
              </div>
            </div>
        </div>

        {/* Painting  */}
        <div class="card mb-3" id="painting">
            <div class="row">
              <div class="services col-md-4">
                <img src={'./painting.jpg'} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title">Painting</h3>
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus tempora consectetur. 
                    Labore aperiam nostrum illo molestias odio perspiciatis, officiis fugiat dolor sequi qui soluta itaque 
                    quae reprehenderit sunt ullam, ex esse repellendus? Obcaecati inventore earum.</p>
                    <Link to='/PaintDetailsPage'> <button type="button" class="btn btn-dark">Read More</button> </Link>
                </div>
              </div>
            </div>
        </div>

        {/* Specialty Painting  */}
        <div class="card mb-3" id="specialty-painting">
            <div class="row g-0">
                <div class="services col-md-4">
                <img src={'./specialty-painting.jpg'} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8 m-0 p-0">
                <div class="card-body m-0">
                    <h3 class="card-title">Specialty Painting</h3>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus tempora consectetur. 
                        Labore aperiam nostrum illo molestias odio perspiciatis, officiis fugiat dolor sequi qui soluta itaque 
                        quae reprehenderit sunt ullam, ex esse repellendus? Obcaecati inventore earum.</p>
                    <button type="button" class="btn btn-dark">Read More</button>
                </div>
                </div>
            </div>
        </div>

     </div>   
    </div>    
  )
}
