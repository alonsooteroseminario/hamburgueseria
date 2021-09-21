let ORDERS_DB = [];

class Order {
    constructor() {
        this.ORDERS_DB = ORDERS_DB
    }

    add (data) {

        const nueva_data = {
            tipoHamburguesa: data.tipoHamburguesa,
            cantidad: data.cantidad,
            conPapasAndinas: data.conPapasAndinas,
            preferQuitar: data.preferQuitar,
            preferCremas: data.preferCremas,
            preferExtras: data.preferExtras,
            preferBebida: data.preferBebida,
            nombre: data.nombre,
            direccion: data.direccion,
            telefono: data.telefono
        }
        this.ORDERS_DB = nueva_data;
        return true;
    }

    get () {
        if (this.ORDERS_DB.length<1) return false
        return this.ORDERS_DB;
    }
}

module.exports = Order;