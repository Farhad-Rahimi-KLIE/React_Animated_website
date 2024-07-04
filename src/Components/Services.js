import React from 'react'
import Card from './Card'
import Sdata from './Sdata'
const Services = () => {
  return (
    <div>
        <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              {
                Sdata.map((curElem,id)=>{
                 return <Card key={id} imgsrc={curElem.imgsrc} title={curElem.title}/>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
