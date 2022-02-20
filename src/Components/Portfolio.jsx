import React from 'react';

export const Portfolio = () => {
  return <div className='portfolio'>
      <h1 className='portfolio-titulo'>Proyectos</h1>
      <section className='portfolio-container'>
        <div>
          <div className='card portfolio-container-element' id='proyecto1'>
            <h2 className="card-title">Musicom</h2>
            <p className="card-desc">Musicom es un proyecto de aplicación web en el cual tendremos a nuestra disposición canciones, listas de reproducción, albumes, etc...
            <br />
            <a href="https://ezequielares.github.io/Musicom_AresRodr-guezEzequiel_DIWEB/index.html" target="_blank">Ver más</a></p>
          </div>
          <div className='card portfolio-container-element' id='proyecto2'>
            <h2 className="card-title">Juego Clicks</h2>
            <p className="card-desc">En este proyecto, mediante una API propia tendremos acceso a un juego de clicks en el que iremos sumando puntos individualmente y luego, en la pantalla de clasificación, podremos ver las diferentes posiciones de jugadores, equipos, etc...
            <br />
            <a href="https://github.com/EzequielAres/Proyecto-JuegoClicks" target="_blank">Ver más</a></p>
          </div>
        </div>
        <div>
          <div className='card portfolio-container-element' id='proyecto3'>
            <h2 className="card-title">Red social</h2>
            <p className="card-desc">Este proyecto se basa en imitar una red social como instagram, podremos subir imágenes además de poder insertar comentarios y dar likes a las distintas publicaciones de otros usuarios.
            <br />
            <a href="https://github.com/EzequielAres/Proyecto-RedSocial" target="_blank">Ver más</a></p>
          </div>
          <div className='card portfolio-container-element' id='proyecto4'>
            <h2 className="card-title">CRUD</h2>
            <p className="card-desc">Este proyecto en React es un crud de tareas enlazado con firebase.
            <br />
            <a href="https://github.com/EzequielAres/Proyecto-CRUD" target="_blank">Ver más</a></p>
          </div>
        </div>        
      </section>
  </div>;
};
