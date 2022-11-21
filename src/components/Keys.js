import React from 'react'

export const Keys = ({lastItem}) => {
// si viene tal propiedad(colesterol, glicemia, imc, etc) pues imprimirla 
  return (
    <p> {lastItem.colesterol ? 'colesterol' : lastItem.diastolica_bi ? 'diastole' : lastItem.glicemia ? 'glicemia' : lastItem.imc ? 'imc' : lastItem.circunferencia ? 'circunferencia' : ""}:  </p>
     
  )
}
