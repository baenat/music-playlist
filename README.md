<div align="center">

# Music Playlist

<img alt="ReactJS" src="src/favicon.ico" width="100" /><br>


![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![GIT](https://img.shields.io/badge/Git-fc6d26?style=for-the-badge&logo=git&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

</div><br>


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.

## Descripción

**Music playlist** es una aplicación web que permite a los usuarios interactuar con la vasta biblioteca de música de Spotify y sus funcionalidades. Con esta aplicación, los usuarios pueden buscar canciones, álbumes y playlists. Todo esto se logra mediante el consumo de la API de Spotify.

## Características Principales

- **Autenticación del Usuario**: Permite a los usuarios iniciar sesión utilizando sus credenciales de Spotify.
- **Búsqueda de Contenido**: Los usuarios pueden buscar canciones, álbumes, artistas y listas de reproducción.
- **Gestión de Listas de Reproducción**: Los usuarios pueden crear, editar y eliminar listas de reproducción.
- **Exploración de Artistas**: Proporciona información detallada sobre artistas, incluyendo sus álbumes más populares y próximos conciertos.

## Tecnologías Utilizadas

- **Frontend**: Angular.js, HTML, CSS
- **Autenticación**: OAuth 2.0 (Spotify Auth)
- **API**: Spotify Web API

## Instalación

1. **Clonar el repositorio**:
    ```sh
    git clone https://github.com/baenat/music-playlist.git
    cd music-playlist
    ```

2. **Instalar dependencias**:
    ```sh
    npm install
    ```

3. **Configurar las credenciales de Spotify**:
   - Crea una cuenta de desarrollador en [Spotify Developer](https://developer.spotify.com/) y registra tu aplicación para obtener el Client ID y Client Secret.
   - Modifica archivo `.environment` del proyecto reemplazando las siguientes variables:

     ```env
     SPOTIFY_CLIENT_ID=tu-client-id
     SPOTIFY_CLIENT_SECRET=tu-client-secret
     SPOTIFY_REDIRECT_URI=http://localhost:4200/callback
     ```

4. **Iniciar la aplicación**:
    ```sh
    npm run start
    ```

    Esto iniciará tanto el servidor backend como la aplicación frontend.

## Uso

- **Iniciar Sesión**: Al abrir la aplicación, los usuarios serán redirigidos a la página de inicio de sesión de Spotify. Después de autenticarse, serán redirigidos de vuelta a la aplicación.

- **Buscar Música**: Utiliza la barra de búsqueda para encontrar canciones, álbumes, artistas y listas de reproducción.

- **Reproducir Música**: Selecciona una canción para reproducirla utilizando el reproductor web de Spotify con el acceso premium.

- **Gestionar Listas de Reproducción**: Crea nuevas listas de reproducción, añade o elimina canciones y organiza tus listas de reproducción.

- **Obtener Recomendaciones**: Explora las recomendaciones basadas en tu historial de escucha.

- **Explorar Artistas**: Consulta información detallada sobre tus artistas favoritos y descubre sus álbumes y conciertos.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
