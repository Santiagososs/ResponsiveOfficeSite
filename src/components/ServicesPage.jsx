import React from 'react'
import CardItem from './CardItem'
import './ServicesPage.css'

function ServicesPage() {
    return (
        <>

           <div className="services-page">
                <h1>Os melhores serviços para você</h1>
               <div className="services-page-container">
                   <div className="services-page-inside">
                      <ul className="services-cards">
                         
                         <CardItem
                          src="img-1.jpg"
                          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                          label="Direito Trabalhista"
                          path="/services"
                                           
                         
                       />

                       <CardItem
                         src="img-2.jpg"
                         text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                         label="Direito Criminal"
                         path="/services"
 
                       />

                        <CardItem
                         src="img-Direito-Digital.jpg"
                         text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                         label="Direito digital"
                         path="/services"
 
                       />
                        
                        <CardItem
                         src="img-8.jpg"
                         text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                         label="Direito Tributario"
                         path="/services"
 
                       />


                      </ul>
                   </div>

               </div>
            
           </div>
   

        </>
            
        
    )
}

export default ServicesPage
