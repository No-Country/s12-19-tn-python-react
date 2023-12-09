import React from 'react'
import SimpleFilter  from "../components/SimpleFilter"
import "../style/propiedad.css"


const Popiedad = () => {
  return (
    <section className='propiedad'>
        <SimpleFilter/>
        <article className='propiedad__filtros'>
        </article>

      <article className='propiedad__cards'>

      </article>
    </section>
  )
}

export default Popiedad