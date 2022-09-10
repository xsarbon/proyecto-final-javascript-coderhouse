const productos = [{
        producto: 'ROKU LE  $9500',
        id: 0,
        precio: 9500
    },
    {
        producto: 'ESTUFA HALOGENA $4500',
        id: 1,
        precio: 4500
    },
    {
        producto: 'SMART TV TCL $29500',
        id: 2,
        precio: 29500
    },
    {
        producto: 'SMARTBAND M6 $2500',
        id: 3,
        precio: 2500
    },
    {
        producto: 'REDMI AIRDOTS $3500',
        id: 4,
        precio: 3500
    }
];
const productosEnC = JSON.parse(localStorage.getItem('listaProductos')) || [];
const vaciarCarrito = document.getElementById('vaciarCarrito');
vaciarCarrito.addEventListener('click', vaciar);

function vaciar() {
    productosEnC
    localStorage.clear();
    precioT = [];
    total.innerHTML = "";
    carritonav.innerHTML = "";
    productosEnC.length > 0 ?
        Swal.fire({
            title: 'Carrito Vaciado',
            text: 'El carrito fue vaciado correctamente',
            icon: 'success',
            confirmButtonText: 'Gracias'
        }) :
        Swal.fire({
            title: 'El carrito está vacío',
            text: 'Perdón, el carrito ya esta vacío',
            icon: 'error',
            confirmButtonText: 'Gracias'
        })
    console.clear();
}

//FUNCIONA TODO GENIAL, NO USAR OTRO
let total = document.getElementById("total");
let btn = document.getElementById("btn0");
btn.addEventListener("click", agregar);
let agregastecontenedor = document.querySelector('.agregaste-contendor');
let agregaste = document.querySelector('.agregaste');


function agregar() {
    productosEnC.push(productos[0]);
    var productoEnC = productosEnC.map((product) => product.producto);
    console.log('Los productos en Carrito son: ' + productoEnC);
    console.log(productosEnC);
    let preciosT = productosEnC.map((precios) => precios.precio);
    var precioT = preciosT.reduce((acc, item) => {
        return acc = acc + item;
    });
    console.log('Y el total a pagar es: ' + precioT);
    document.getElementById("carritonav").innerHTML += "<li>ROKU LE  $9500</li>";
    total.innerHTML = `<h4 id="textoTotal">Su nuevo total es: $ ${precioT}</h4>`;
    const guardarLocal = (clave, valor) => {
        localStorage.setItem(clave, valor)
    };
    guardarLocal("listaProductos", JSON.stringify(productosEnC));
    agregastecontenedor.classList.add('agregasteactive');
    agregaste.innerHTML = "AGREGASTE AL CARRITO: ROKU LE $9500"
    setTimeout(() => {
        agregastecontenedor.classList.remove('agregasteactive')
    }, 500)
}

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", agregar1);

function agregar1() {
    productosEnC.push(productos[1]);
    document.getElementById("carritonav").innerHTML += "<li>ESTUFA HALOGENA $4500</li>";
    total.innerHTML = '<h4 id="textoTotal">Su nuevo total es: $</h4>'
    var productoEnC = productosEnC.map((product) => product.producto);
    console.log('Los productos en Carrito son: ' + productoEnC);
    let preciosT = productosEnC.map((precios) => precios.precio);
    var precioT = preciosT.reduce((acc, item) => {
        return acc = acc + item;
    });
    console.log('Y el total a pagar es: ' + precioT);
    total.innerHTML = `<h4 id="textoTotal">Su nuevo total es: $ ${precioT}</h4>`;
    const guardarLocal = (clave, valor) => {
        localStorage.setItem(clave, valor)
    };
    guardarLocal("listaProductos", JSON.stringify(productosEnC));
    agregastecontenedor.classList.add('agregasteactive');
    agregaste.innerHTML = "AGREGASTE AL CARRITO: ESTUFA HALOGENA $4500"
    setTimeout(() => {
        agregastecontenedor.classList.remove('agregasteactive')
    }, 500)
}

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", agregar2);

function agregar2() {
    productosEnC.push(productos[2]);
    document.getElementById("carritonav").innerHTML += "<li>SMART TV TCL $29500</li>";
    total.innerHTML = '<h4 id="textoTotal">Su nuevo total es: $</h4>'
    var productoEnC = productosEnC.map((product) => product.producto);
    console.log('Los productos en Carrito son: ' + productoEnC);
    console.log(productosEnC);
    let preciosT = productosEnC.map((precios) => precios.precio);
    var precioT = preciosT.reduce((acc, item) => {
        return acc = acc + item;
    });
    console.log('Y el total a pagar es: ' + precioT);
    total.innerHTML = `<h4 id="textoTotal">Su nuevo total es: $ ${precioT}</h4>`;
    const guardarLocal = (clave, valor) => {
        localStorage.setItem(clave, valor)
    };
    guardarLocal("listaProductos", JSON.stringify(productosEnC));
    agregastecontenedor.classList.add('agregasteactive');
    agregaste.innerHTML = "AGREGASTE AL CARRITO: SMART TV TCL $29500"
    setTimeout(() => {
        agregastecontenedor.classList.remove('agregasteactive')
    }, 500)
}

let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", agregar3);

function agregar3() {
    productosEnC.push(productos[3]);
    document.getElementById("carritonav").innerHTML += "<li>SMARTBAND M6 $2500</li>";
    total.innerHTML = '<h4 id="textoTotal">Su nuevo total es: $</h4>'
    var productoEnC = productosEnC.map((product) => product.producto);
    console.log('Los productos en Carrito son: ' + productoEnC);
    console.log(productosEnC);
    let preciosT = productosEnC.map((precios) => precios.precio);
    var precioT = preciosT.reduce((acc, item) => {
        return acc = acc + item;
    });
    console.log('Y el total a pagar es: ' + precioT);
    total.innerHTML = `<h4 id="textoTotal">Su nuevo total es: $ ${precioT}</h4>`;
    const guardarLocal = (clave, valor) => {
        localStorage.setItem(clave, valor)
    };
    guardarLocal("listaProductos", JSON.stringify(productosEnC));
    agregastecontenedor.classList.add('agregasteactive');
    agregaste.innerHTML = "AGREGASTE AL CARRITO: SMARTBAND M6 $2500"
    setTimeout(() => {
        agregastecontenedor.classList.remove('agregasteactive')
    }, 500)
}

let btn4 = document.getElementById("btn4");
btn4.addEventListener("click", agregar4);

function agregar4() {
    productosEnC.push(productos[4]);
    document.getElementById("carritonav").innerHTML += "<li>REDMI AIRDOTS $3500</li>";
    total.innerHTML = '<h4 id="textoTotal">Su nuevo total es: $</h4 id="textoTotal">'
    var productoEnC = productosEnC.map((product) => product.producto);
    console.log('Los productos en Carrito son: ' + productoEnC);
    console.log(productosEnC);
    let preciosT = productosEnC.map((precios) => precios.precio);
    var precioT = preciosT.reduce((acc, item) => {
        return acc = acc + item;
    });
    console.log('Y el total a pagar es: ' + precioT);
    total.innerHTML = `<h4 id="textoTotal">Su nuevo total es: $ ${precioT}</h4>`;
    const guardarLocal = (clave, valor) => {
        localStorage.setItem(clave, valor)
    };
    guardarLocal("listaProductos", JSON.stringify(productosEnC));
    agregastecontenedor.classList.add('agregasteactive');
    agregaste.innerHTML = "AGREGASTE AL CARRITO: REDMI AIRDOTS $3500"
    setTimeout(() => {
        agregastecontenedor.classList.remove('agregasteactive')
    }, 500)
}

if (localStorage.getItem("listaProductos")) {
    const enJSON = localStorage.getItem("listaProductos");
    const enJSON2 = JSON.parse(enJSON);
    for (i = 0; i < enJSON2.length; i++) {
        productosEnC.push(enJSON2[i]);
        preciosT = productosEnC.map((precios) => precios.precio);
        let prod = productosEnC.map((produc) => produc.producto);
        document.getElementById("carritonav").innerHTML += `<li>${prod[i]}</li>`
    }
    console.log(productosEnC);
    console.log(preciosT)
    precioT = preciosT.reduce((acc, item) => {
        return acc = acc + item;
    });
    console.log('Y el total a pagar es: ' + precioT);
    total.innerHTML = '<h4 id="textoTotal">Su nuevo total es: $</h4>' + precioT

}





const navCarrito2 = document.querySelector("#nav-carrito2");
const container = document.querySelector("#nav-carrito");

navCarrito2.addEventListener("click", color);

function color() {
    container.classList.toggle("active");
    (productosEnC.length === 0) && (total.innerHTML = '<h4 id="textoTotal">Carrito Vacío, agregue productos.</h4>')
}