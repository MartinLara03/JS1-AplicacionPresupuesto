

//asignar formato de moneda
const formatoMoneda = (presupuesto) => {
    return presupuesto.toLocaleString('mx',{
        style: 'currency',
        currency: 'MXN',
        maximumFractionDigits: 2,
    });
};
//asignar formato de %
const formatoPorcentaje = (porcentajeEgreso) => {
    return porcentajeEgreso.toLocaleString('mx',{
        style: 'percent',
        maximumFractionDigits: 1,
    });
};

let egresos = {
    Renta: 900,
    Ropa: 400
};

let ingresos = {
    Quincena: 9000,
    Venta: 400
};


const totalIngresos = () => {
    var totalIngreso = 0;
    for (var ingreso in ingresos) {
        totalIngreso = totalIngreso + ingresos[ingreso];
    }
    return totalIngreso;
};

const totalEgresos = () => {
    var totalEgreso = 0;
    for (var egreso in egresos) {
        totalEgreso = totalEgreso + egresos[egreso];
    }
    return totalEgreso;
};

const cargarCabecero = () => {
    var presupuesto = totalIngresos() - totalEgresos();
    var porcentajeEgreso = totalEgresos() / totalIngresos();
    //mandar llamar variable con formato
    var presupuestoFormatoMoneda = formatoMoneda(presupuesto);
    var porcentajeFormatoEgreso = formatoPorcentaje(porcentajeEgreso);

    console.log("Presupuesto:", presupuestoFormatoMoneda);
    console.log("Porcentaje de Egreso:", porcentajeFormatoEgreso);
    console.log("Total de Ingresos:", totalIngresos());
    console.log("Total de Egresos:", totalEgresos());
};

cargarCabecero();


function sumar(){
    var ingreso1 = document.getElementById("ingreso1").textContent;
    var ingreso2 = document.getElementById("ingreso2").textContent;
 
    var suma = parseInt(ingreso1) + parseInt(ingreso2);

    console.log(suma)
   };

  