const datosEstudiantes = [{
        nombre: "Eduardo Marin Arango",
        github: "https://github.com/Emarinar",
        neocites: "https://neocities.org/site/edumarinar",
        email: "eduardo.marin.1990@hotmail.com",
        telefono: "3016071269",
        foto: "images/FOTO_EDUARDO_MARIN.jpeg",
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
        github: "https://github.com/ValenAH",
        neocites: "https://neocities.org/site/valenah",
        email: "valenah52@gamil.com",
        telefono: "3103775171",
        foto: "images/VALEN.jpeg",
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
        <div class="Foto1"><img src=${datos.foto} alt="" class="fotoed"></div>
        <div class="Enlaces">
            <ul class="contenla">
                <li><img src="/images/github-brands.svg" alt=""><a href=${datos.github}>GitHub</a></li>
                <li><img src="/images/network-wired-solid.svg" alt=""><a href=${datos.neocites}">Neocites</a></li>
                <li><img src="/images/envelope-square-solid.svg" alt=""><a href="">${datos.email}</a></li>
                <li><img src="/images/whatsapp-brands.svg" alt=""><a href="">${datos.telefono}</a></li>
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
        <div class="valorhtml"><h2><a href= >Html </a></h2>
            <p>${datos.valoraciones.valhtml}</p>
        </div>
        <div class="valorcss"><h2><a href= >CSS </a></h2> 
            <p>${datos.valoraciones.valcss}</p>
        </div>
        <div class="valorjs"<h2><a href= >JS </a></h2>
            <p>${datos.valoraciones.valjs}</p>
        </div>
        <div class="valorui"<h2><a href= >UI </a></h2>
            <p>${datos.valoraciones.valui}</p>
        </div>
        <div class="valorui"<h2><a href= >UX</a></h2>
            <p>${datos.valoraciones.valux}</p>
        </div>
        <div class="imgicon"<a href=""><img src="/images/user-solid.svg" alt=""></a>
        </div>
    </div>
`}



const p1 = document.getElementById("ficha").innerHTML = datosEstudiantes.map(Plantilla).join("");