import React from 'react';

export const Academics = () => {
  return <div className='academics' id='Experiencia'>
      <h1 className='academics-titulo'>Formación académica</h1>
      <div className='elementsContainer'>
        <div className='academics-element'>
          <h2 className="academics-element-title">FP Desarrollo de Aplicaciones Web</h2>
          <h3 className="academics-element-locationDate">Cádiz, España | 2020/2022</h3>
          <p className='trabajo-desc'><a href="https://www.aktios.com/" target="_blank"> Aktios factory Cádiz </a></p>
        </div>
        <div className='academics-element'>
          <h2 className="academics-element-title">FP Sistemas Microinformáticos y Redes</h2>
          <h3 className="academics-element-locationDate">Cádiz, España | 2018/2020</h3>
        </div>
        <div className='academics-element'>
          <h2 className="academics-element-title">FP Informática y Comunicaciones</h2>
          <h3 className="academics-element-locationDate">Cádiz, España | 2016/2018</h3>
          <p className='trabajo-desc'>ENRED 2</p>
        </div>  
      </div>
  </div>;
};
