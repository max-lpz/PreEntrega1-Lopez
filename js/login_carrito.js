//PreEntrega1+López

// Crear un algoritmo con un condicional.
// Crear un algoritmo utilizando un ciclo.
// Armar un simulador interactivo, la estructura final de tu proyecto integrador.

//Carrito de compras + login

alert("Bienvenid@ a #ColorPaint \nPrecione aceptar para ingresar su usuario y contraseña")

let userOK = "admin"
let passOK = "pintura2023"
let prod1 = 0
let prod2 = 0
let prod3 = 0
let prod4 = 0


let user = prompt('Ingrese su usuario y precione aceptar')
let pass = prompt('Ingrese su contraseña y precione aceptar')



function seleccion(opc) {
    switch (opc) {
        case "1":
            prod1++
            alert(`Agregaste al carrito: ${prod1} Pintura/s nacional`)
            break;
        case "2":
            prod2++
            alert(`Agregaste al carrito: ${prod2} Pintura/s importadas`)
            break;
        case "3":
            prod3++
            alert(`Agregaste al carrito: ${prod3} Pincel/es`)
            break;
        case "4":
            prod4++
            alert(`Agregaste al carrito: ${prod4} Accesorio/s`)
            break;
        default:
            if (opc != null || opc != undefined) {
                alert(`La opcion ${opc} no es una opción valida`)
            } else {
                alert('Para salir debe ingresar la opción "0" (Cero)')
            }
            break;
    }
}

if ((user === userOK) && (pass === passOK)) {
    alert('Login ok, user: ' + user + "\nprecione aceptar para seleccionar sus productos")
    let prod = prompt('Ingrese la opción para agregar al carrito segun corresponda: \n# 1 - Pinturas nacionales\n# 2 - Pinturas importadas\n# 3 - Pinceles\n# 4 - Accesorios\n# 0 - Cerra compra')
    console.log(prod)
    while (prod != 0) {
        seleccion(prod)
        prod = prompt('Ingrese la opción para agregar al carrito segun corresponda: \n# 1 - Pinturas nacionales\n# 2 - Pinturas importadas\n# 3 - Pinceles\n# 4 - Accesorios\n# 0 - Cerra compra')
    }

    let total = prod1 + prod2 + prod3 + prod4

    if (total != 0) {
        alert("Cantidad total de productos: " + total)
        alert(`Cantidad de Pinturas nacionales: ${prod1}\nCantidad de Pinturas importadas: ${prod2}\nCantidad de Pinceles: ${prod3}\nCantidad de Accesorios: ${prod4}`)
        alert("gracias por su compra!")
    } else {
        alert("Gracias por su visita")
    }

} else if ((user !== userOK) && (pass === passOK)) {
    alert('Error el usuario ingresado es incorrecto');
} else if ((user === userOK) && (pass !== passOK)) {
    alert('Error la contraseña ingresada es incorrecta');
} else {
    alert('Error el usuario y la contraseña son incorrectos');
}
