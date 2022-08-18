axios.get('https://api.github.com/repos/PruebaPaginaEstatica/PruebaPaginaEstatica.github.io/releases')
.then(function (response) {
    var i;
    var suma = 0;
    var link_sistema = ""
    var archivo = ""
    var tamanio = ""
    for(i=0;i< response.data.length; i ++){
        suma += response.data[i].assets[0].download_count;
    }
    link_sistema = response.data[0].assets[0].browser_download_url;
    archivo = response.data[0].assets[0].name;
    tamanio = response.data[0].assets[0].size;
    tamanio = Math.trunc(tamanio / 1024 );
    document.getElementById('descargas').innerHTML = suma;
    
    var boton_descarga_sistema = document.getElementById('btn_descarga_sistema'); //or grab it by tagname etc
    boton_descarga_sistema.href = link_sistema;
    document.getElementById('archivo').innerHTML =  archivo;
    document.getElementById('tamanio').innerHTML =  tamanio;
})
.catch(function (error) {
    // handle error
    console.log(error);
})
.then(function () {
    // always executed
});

axios.get('https://api.github.com/repos/PruebaPaginaEstatic/Documentacion-PaginaEstatica/releases')
.then(function (response) {
    var i;
    var suma = 0;
    var link = "";
    var archivo_doc = ""
    var tamanio_doc = ""
    //console.log(response.data);
    for(i=0;i< response.data.length; i ++){
        suma += response.data[i].assets[0].download_count;
    }
    link = response.data[0].assets[0].browser_download_url;
    archivo_doc = response.data[0].assets[0].name;
    tamanio_doc = response.data[0].assets[0].size;
    tamanio_doc = Math.trunc(tamanio_doc / 1024 );
    document.getElementById('descargas_doc').innerHTML = suma;
    var boton_descarga_manual = document.getElementById('btn_descarga_manual'); //or grab it by tagname etc
    boton_descarga_manual.href = link;
    document.getElementById('archivo_doc').innerHTML =  archivo_doc;
    document.getElementById('tamanio_doc').innerHTML =  tamanio_doc;
})
.catch(function (error) {
    // handle error
    console.log(error);
})
.then(function () {
    // always executed
});

function callbackName(response) {
    document.getElementById('visits').innerText = response.value;
}