import React from 'react'
import { Keys } from './Keys';

export const Accordion = () => {

    const examHistory = {
        'Perfil Lipídico': [
            {
                name: 'Perfil Lipídico',
                code: 'PL001',
                colesterol: 201,
                date: '2022-09-02T00:00:00.000Z',
                trigliceridos: 301,
                origen: 'EMP'
            },
            {
                name: 'Perfil Lipídico',
                code: 'PL001',
                colesterol: 200,
                date: '2022-08-30T00:00:00.000Z',
                trigliceridos: 300
            },
            {
                name: 'Perfil Lipídico',
                code: 'PL001',
                colesterol: 200,
                date: '2022-08-26T00:00:00.000Z',
                trigliceridos: 300
            },
            {
                name: 'Perfil Lipídico',
                code: 'PL001',
                colesterol: 200,
                date: '2022-08-25T00:00:00.000Z',
                trigliceridos: 300
            },
            {
                name: 'Perfil Lipídico',
                code: 'PL001',
                colesterol: 200,
                date: '2022-08-05T00:00:00.000Z',
                trigliceridos: 300
            },
            {
                name: 'Perfil Lipídico',
                code: 'PL001',
                colesterol: 200,
                date: '2022-07-28T00:00:00.000Z',
                trigliceridos: 300
            },
            {
                name: 'Perfil Lipídico',
                code: 'PL001',
                colesterol: 200,
                date: '2022-07-27T00:00:00.000Z',
                trigliceridos: 300
            },
            {
                name: 'Perfil Lipídico',
                code: 'PL001',
                colesterol: 200,
                date: '2022-07-01T00:00:00.000Z',
                trigliceridos: 300
            },
            {
                name: 'Perfil Lipídico',
                code: 'PL001',
                colesterol: 200,
                date: '2022-06-30T00:00:00.000Z',
                trigliceridos: 300
            },
            {
                name: 'Perfil Lipídico',
                code: 'PL001',
                colesterol: 200,
                date: '2022-06-25T00:00:00.000Z',
                trigliceridos: 300
            },
            {
                name: 'Perfil Lipídico',
                code: 'PL001',
                colesterol: 200,
                date: '2022-06-23T00:00:00.000Z',
                trigliceridos: 300
            }
        ],
        'Presion arterial': [
            {
                name: 'Presion arterial',
                code: 'PA001',
                sistolica_bi: 110,
                date: '2022-08-30T00:00:00.000Z',
                diastolica_bi: 121
            },
            {
                name: 'Presion arterial',
                code: 'PA001',
                sistolica_bi: 90,
                date: '2022-08-26T00:00:00.000Z',
                diastolica_bi: 121
            },
            {
                name: 'Presion arterial',
                code: 'PA001',
                sistolica_bi: 90,
                date: '2022-08-25T00:00:00.000Z',
                diastolica_bi: 121
            },
            {
                name: 'Presion arterial',
                code: 'PA001',
                sistolica_bi: 90,
                date: '2022-08-05T00:00:00.000Z',
                diastolica_bi: 121
            },
            {
                name: 'Presion arterial',
                code: 'PA001',
                sistolica_bi: 90,
                date: '2022-07-28T00:00:00.000Z',
                diastolica_bi: 121
            },
            {
                name: 'Presion arterial',
                code: 'PA001',
                sistolica_bi: 90,
                date: '2022-07-27T00:00:00.000Z',
                diastolica_bi: 121
            },
            {
                name: 'Presion arterial',
                code: 'PA001',
                sistolica_bi: 90,
                date: '2022-07-01T00:00:00.000Z',
                diastolica_bi: 121
            },
            {
                name: 'Presion arterial',
                code: 'PA001',
                sistolica_bi: 90,
                date: '2022-06-30T00:00:00.000Z',
                diastolica_bi: 120
            },
            {
                name: 'Presion arterial',
                code: 'PA001',
                sistolica_bi: 90,
                date: '2022-06-25T00:00:00.000Z',
                diastolica_bi: 121
            },
            {
                name: 'Presion arterial',
                code: 'PA001',
                sistolica_bi: 80,
                date: '2022-06-23T00:00:00.000Z',
                diastolica_bi: 120
            }
        ],
        'Glicemia en ayunas': [
            {
                name: 'Glicemia en ayunas',
                code: 'GL001',
                ayunas: false,
                date: '2022-10-17T00:00:00.000Z',
                glicemia: 200
            },
            {
                name: 'Glicemia en ayunas',
                code: 'GL001',
                ayunas: true,
                date: '2022-10-05T00:00:00.000Z',
                glicemia: 125
            },
            {
                name: 'Glicemia en ayunas',
                code: 'GL001',
                ayunas: true,
                date: '2022-10-04T00:00:00.000Z',
                glicemia: 118
            },
            {
                name: 'Glicemia en ayunas',
                code: 'GL001',
                ayunas: true,
                date: '2022-09-09T00:00:00.000Z',
                glicemia: 200
            },
            {
                name: 'Glicemia en ayunas',
                code: 'GL001',
                ayunas: false,
                date: '2022-09-06T00:00:00.000Z',
                glicemia: 200
            },
            {
                name: 'Glicemia en ayunas',
                code: 'GL001',
                ayunas: false,
                date: '2022-09-02T00:00:00.000Z',
                glicemia: 201
            },
            {
                name: 'Glicemia en ayunas',
                code: 'GL001',
                ayunas: false,
                date: '2022-08-30T00:00:00.000Z',
                glicemia: 200
            },
            {
                name: 'Glicemia en ayunas',
                code: 'GL001',
                ayunas: false,
                date: '2022-08-26T00:00:00.000Z',
                glicemia: 200
            },
            {
                name: 'Glicemia en ayunas',
                code: 'GL001',
                ayunas: false,
                date: '2022-08-25T00:00:00.000Z',
                glicemia: 200
            },
            {
                name: 'Glicemia en ayunas',
                code: 'GL001',
                ayunas: false,
                date: '2022-08-05T00:00:00.000Z',
                glicemia: 201
            },
            {
                name: 'Glicemia en ayunas',
                code: 'GL001',
                ayunas: false,
                date: '2022-07-28T00:00:00.000Z',
                glicemia: 200
            },
            {
                name: 'Glicemia en ayunas',
                code: 'GL001',
                ayunas: false,
                date: '2022-07-27T00:00:00.000Z',
                glicemia: 200
            },
            {
                name: 'Glicemia en ayunas',
                code: 'GL001',
                ayunas: false,
                date: '2022-06-23T00:00:00.000Z',
                glicemia: 200
            }
        ],
        Imc: [
            {
                name: 'Imc',
                code: 'IMC001',
                peso: 75,
                date: '2022-10-17T00:00:00.000Z',
                altura: 178,
                imc: 23.67
            },
            {
                name: 'Imc',
                code: 'IMC001',
                peso: 80,
                date: '2022-10-05T00:00:00.000Z',
                altura: 155,
                imc: 33.3
            },
            {
                name: 'Imc',
                code: 'IMC001',
                peso: 90,
                date: '2022-10-04T00:00:00.000Z',
                altura: 178,
                imc: 28.41
            },
            {
                name: 'Imc',
                code: 'IMC001',
                peso: 90,
                date: '2022-09-09T00:00:00.000Z',
                altura: 175,
                imc: 27.2
            },
            {
                name: 'Imc',
                code: 'IMC001',
                peso: 75,
                date: '2022-06-30T00:00:00.000Z',
                altura: 1.8,
                imc: 23.15
            },
            {
                name: 'Imc',
                code: 'IMC001',
                peso: 75,
                date: '2022-06-25T00:00:00.000Z',
                altura: 1.8,
                imc: 23.15
            },
            {
                name: 'Imc',
                code: 'IMC001',
                peso: 75,
                date: '2022-06-23T00:00:00.000Z',
                altura: 1.8,
                imc: 23.15
            }
        ],
        'Circunferencia abdominal': [
            {
                name: 'Circunferencia abdominal',
                code: 'CIA001',
                circunferencia: 55,
                date: '2022-10-17T00:00:00.000Z'
            },
            {
                name: 'Circunferencia abdominal',
                code: 'CIA001',
                circunferencia: 90,
                date: '2022-10-05T00:00:00.000Z'
            },
            {
                name: 'Circunferencia abdominal',
                code: 'CIA001',
                circunferencia: 44,
                date: '2022-10-04T00:00:00.000Z'
            },
            {
                name: 'Circunferencia abdominal',
                code: 'CIA001',
                circunferencia: 80,
                date: '2022-09-09T00:00:00.000Z'
            },
            {
                name: 'Circunferencia abdominal',
                code: 'CIA001',
                circunferencia: 80,
                date: '2022-09-06T00:00:00.000Z'
            },
            {
                name: 'Circunferencia abdominal',
                code: 'CIA001',
                circunferencia: 81,
                date: '2022-09-02T00:00:00.000Z'
            },
            {
                name: 'Circunferencia abdominal',
                code: 'CIA001',
                circunferencia: 65,
                date: '2022-08-30T00:00:00.000Z'
            },
            {
                name: 'Circunferencia abdominal',
                code: 'CIA001',
                circunferencia: 56,
                date: '2022-08-26T00:00:00.000Z'
            },
            {
                name: 'Circunferencia abdominal',
                code: 'CIA001',
                circunferencia: 55,
                date: '2022-08-25T00:00:00.000Z'
            }
        ]
    }
    
    return (
        <div className="accordion vh-100" id="accordionExample">
            {Object.entries(examHistory).map((entry, i) => {
                const category = entry[0];//key
                const itemList = entry[1];//value de examHistory
                const lastItem = itemList.shift();
                return (

                    <div key={i} className="accordion-item pb-3 border border border-white">
                        <h2 className="accordion-header" id={`heading${i}`}>
                            <button className="accordion-button text-white mt-4 " type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${i}`} aria-expanded="true" aria-controls={`collapse${i}`}>
                                {category}
                            </button>
                        </h2>

                        <div id={`collapse${i}`} className="accordion-collapse collapse mb-2 " aria-labelledby={`heading${i}`} data-bs-parent="#accordionExample">
                            <div className="accordion-body d-flex flex-column text-dark">
                                <h6 className='text-dark'>Ultimo resultado</h6>
                                <div className='d-flex flex-row'>
                                    <div className='col-2 '>
                                        <div className='d-flex'>
                                            <Keys lastItem={lastItem} />

                                            <p className='ms-2'> {lastItem.colesterol || lastItem.diastolica_bi || lastItem.glicemia || lastItem.imc || lastItem.circunferencia} </p>
                                        </div>
                                        <div>
                                            {lastItem.date.substring(0, 10)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id={`collapse${i}`} className="accordion-collapse collapse " aria-labelledby={`heading${i}`} data-bs-parent="#accordionExample">
                            <div className="accordion-body overflow-auto d-flex flex-column">
                                <h6 className='py-6'>Historial</h6>
                                {itemList.map((item, i) => (
                                    <div key={i} className='row'>
                                        <div className='col-6'>
                                            <p>  {item.date.substring(0, 10)}</p>
                                        </div>
                                        <div className='d-flex flex-row col-6'>
                                            <Keys lastItem={lastItem} />
                                            <p className='ms-2'>  {item.colesterol || item.diastolica_bi || item.glicemia || item.imc || item.circunferencia}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
