import functionsHome from "../functions/functionsHome.js"

//hay que ejecutar las funciones importadas.
functionsHome();

//exportar contenido de la pagina.
export default () =>
`<div id="contHome">
<header id="logoCont">
    <img class="logoHome" src="./images/logo.gif" alt="logoGrande">
</header>
  <main>
    <h2 id="loginBtnCont"><button id="loginBtn">Iniciar sesión</button></h2>
    <h2 id="register">Registrarse</h2>
    <div id="icons">
     <div class="contIcon"><img src="./images/google.png" alt="google"></div>
     <div class="contIcon"><img src="./images/apple-logo.png" alt="apple"></div>
     <div class="contIcon"><img src="./images/yahoo.png" alt="yahoo"></div>
     <div class="contIcon"><img src="./images/microsoft.png" alt="microsoft"></div>
    </div>
    </main>
  <footer>
     <h2 id="registerBtnCont"><button id="registerBtn">O regístrese con sus propios datos</button></h2>
  </footer>
  </div>`;

