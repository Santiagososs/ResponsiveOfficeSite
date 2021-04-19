import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards"> 
            <h1>Conheça nossos serviços</h1>
              <div className="cards__container"> 
                  <div className="cards__wrapper">
                      <ul className="cards__items" >
                           <CardItem
                             src="img-2.jpg"
                             text="A KLADV tem advogados especialistas
                                   em direito trabalhista prontos para 
                                    lhe auxiliar imediatamente"
                             label="Direito Trabalhista"
                             path="/services"
                           />
                           <CardItem
                             src="img-1.jpg"
                             text="A KLADV tem advogados especialistas
                                   em direito criminal prontos para 
                                    lhe auxiliar imediatamente"
                             label="Direito Criminal"
                             path="/services"
                           />
                      </ul>
                      <ul className="cards__items">
                           <CardItem
                             src="img-8.jpg"
                             text="A KLADV tem advogados especialistas
                                   em direito ambiental prontos para 
                                    lhe auxiliar imediatamente"
                              label="Direito Ambiental"
                              path="/services"
                           />
                           <CardItem
                             src="img-homepage.jpg"
                             text="A KLADV tem advogados especialistas
                                   em direito tributario prontos para 
                                    lhe auxiliar imediatamente"
                                 label="Direito de tributario"
                             path="/services"
                           />
                           <CardItem
                             src="img-Direito-Digital.jpg"
                             text="A KLADV tem advogados especialistas
                                   em direito digital prontos para 
                                    lhe auxiliar imediatamente"
                                 label="Direito digital"
                             path="/services"
                           />
                      </ul>
                  </div>            
              </div>
        </div>
    )
}

export default Cards
