function calculo(data) {

    let valorHamburguesa = 0;
    let cantidad = 1;
    let papas = 0;
    let extras1=0
    let extras2=0
    let extras3=0
    let extras4=0
    let extras5=0
    let extras = 0;
    let bebida = 0;
    let delivery = 5

    if (data.tipoHamburguesa == 'Burger'){
        valorHamburguesa = 11
    }
    if (data.tipoHamburguesa == 'Cheese'){
        valorHamburguesa = 12.5
    }
    if (data.tipoHamburguesa == 'Bacon'){
        valorHamburguesa = 13.5
    }
    if (data.tipoHamburguesa == 'Haw'){
        valorHamburguesa = 15
    }
    if (data.tipoHamburguesa == 'Royal'){
        valorHamburguesa = 15.5
    }
    if (data.tipoHamburguesa == 'Doble'){
        valorHamburguesa = 16.5
    }
    if (data.tipoHamburguesa == 'Papa Andina Fritass'){
        valorHamburguesa = 4.5
    }
    console.log('valorHamburguesa : ', valorHamburguesa)
    if(data.cantidad){
        cantidad = parseInt(data.cantidad)
        console.log('cantidad de hamburguesas : ', cantidad)
    }
    // console.log('cantidad : ', cantidad)
    if(data.conPapasAndinas == ' Papa-Andina-fritas'){
        papas = 4.5*cantidad
        console.log('Papa-Andina-fritas : ', papas)
    }
    if(Array.isArray(data.preferExtras)){

        for (let i = 0; i < data.preferExtras.length; i++) {
            // console.log(data.preferExtras.length)
            const element = data.preferExtras[i];
            console.log('element : ', element)
            if(element == ' Queso'){
                extras1 = 1.5
            }
            if(element == ' Jamon'){
                extras2 = 1.5
            }
            if(element == ' Tocino'){
                extras3 = 2.5
            }
            if(element == ' Huevo'){
                extras4 = 2
            }
            if(element == ' Piña'){
                extras5 = 1.5
            }
        }

        extras = extras1+extras2+extras3+extras4+extras5

        console.log('extras : ', extras)
    }
    else {
        const element = data.preferExtras;
        console.log('element : ', element)
        if(element == ' Queso'){
            extras = 1.5
        }
        if(element == ' Jamon'){
            extras = 1.5
        }
        if(element == ' Tocino'){
            extras = 2.5
        }
        if(element == ' Huevo'){
            extras = 2
        }
        if(element == ' Piña'){
            extras = 1.5
        }
        console.log('extras : ', extras)
    }
    if(Array.isArray(data.preferBebida)){

        for (let i = 0; i < data.preferBebida.length; i++) {
            const element = data.preferBebida[i];
            console.log('bebida : ', element)
            if(element == ' 7up'){
                bebida = bebida + 1.5
            }
            if(element == ' Pepsi'){
                bebida = bebida + 1.5
            }
            if(element == ' Con-pina'){
                bebida = bebida + 2.5
            }
        }
        console.log('bebidas : ', bebida)
    }
    else{
        const element = data.preferBebida;
        console.log('bebida : ', element)
        if(element == ' 7up'){
            bebida = bebida + 1.5
        }
        if(element == ' Pepsi'){
            bebida = bebida + 1.5
        }
        if(element == ' Con-pina'){
            bebida = bebida + 2.5
        }
        console.log('bebidas : ', bebida)
    }
    console.log('delivery : ', 5)
    let calculoTotal = valorHamburguesa*cantidad+papas+extras+bebida+delivery
    console.log('calculo total : ', calculoTotal)
    return calculoTotal
}

module.exports = {
    calculo
};