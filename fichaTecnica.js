const datosEstudiantes = [{
        nombre: "Eduardo Marin Arango",
        github: "https://github.com/Emarinar",
        neocites: "https://neocities.org/site/edumarinar",
        email: "eduardo.marin.1990@hotmail.com",
        telefono: "3016071269",
        actividades: [{
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
        },
        {
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
        },
        {
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
        }
    ],
        valoraciones: {
        valhtml: "3%",
        valcss: "4%",
        valjs: "6%",
        valui: "4%",
        valux: "9%"
    }},
    {
        nombre: "Valentina Alzate Hincapié",
        github: "https://github.com/mirepositorio",
        neocites: "miportafolio.neocities.org",
        email: "estudiante@dominio.com",
        telefono: "3125678900",
        actividades: [{
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
        },
        {
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
        },
        {
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
        }
    ],
        valoraciones: {
        valhtml: "8%",
        valcss: "4%",
        valjs: "6%",
        valui: "4%",
        valux: "9%"
    }
}];


function Plantilla(datos) {
    return `
    <div class="container">     
        <div class="Name"><h1 class="nombre">${datos.nombre}</h1></div>
        <div class="Foto1"><img src="/images/FOTO_EDUARDO_MARIN.jpeg" alt="EDUARDO" class="fotoed"></div>
        <div class="Enlaces">
            <ul class="contenla">
                <li><img src="/images/github-brands.svg" alt=""><a href=${datos.github}>GitHub</a></li>
                <li><img src="/images/network-wired-solid.svg" alt=""><a href=${datos.neocites}">Neocites</a></li>
                <li><img src="/images/envelope-square-solid.svg" alt=""><a href=${datos.email}>Email</a></li>
                <li><img src="/images/whatsapp-brands.svg" alt=""><a href=${datos.telefono}>Whatsapp</a></li>
            </ul>
        </div>
    </div>
    


    <div class="Actividades">
        <table class="tabla">
            <tr>
                <th>Actividades</th>
                <th>%UI/UX</th>
                <th>%dev</th>
            </tr>
            <tr>
                <td><a href="">Actividad1</a></td>
                <td>10%</td>
                <td>5%</td>
            </tr>

            <tr>
                <td><a href="">Actividad2</a></td>
                <td>10%</td>
                <td>5%</td>
            </tr>

            <tr>
                <td><a href="">Actividad3</a></td>
                <td>10%</td>
                <td>5%</td>
            </tr>

        </table>
    </div> 
    


    <div class="Estados">
        <h2><a href= >Html<p>${datos.valoraciones.valhtml}</p></h2>
        <h2><a href= >CSS<p>${datos.valoraciones.valcss}</p></h2>
        <h2><a href= >JS<p>${datos.valoraciones.valjs}</p></a></h2>
        <h2><a href= >UI<p>${datos.valoraciones.valui}</p></a></h2>
        <h2><a href= >UX<p>${datos.valoraciones.valux}</p></a></h2>
        <h2><a href=""><img src="/images/user-solid.svg" alt=""></a></h2>
    </div>
`}



const p1 = document.getElementById("ficha").innerHTML = datosEstudiantes.map(Plantilla).join("");