

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


/*
let egresos = {
    Renta: 900,
    Ropa: 400
};

let ingresos = {
    Quincena: 9000,
    Venta: 400
}; */

/*
// Obtén todos los elementos con la clase "elemento"
var elementos = document.getElementsByClassName("elemento");

// Inicializa una variable para almacenar la suma
var suma = 0;

// Recorre todos los elementos y suma sus valores numéricos
for (var i = 0; i < elementos.length; i++) {
  var valor = parseInt(elementos[i].textContent); // Convierte el contenido a número
  suma += valor; // Agrega el valor al total
}

// Ahora "suma" contiene la suma total de los valores de los elementos
console.log("La suma total es: " + suma);
*/



/*
var totalIngresos = () => {
    const totalIngreso = 0;
    const totalElementoValor = document.getElementsByClassName("elemento_valor");
    console.log("Aquí debería aparecer el valor:", totalElementoValor);
    for (var ingreso=0; ingreso<totalElementoValor.length; ingreso++) {
        totalIngreso += parseFloat(totalElementoValor[ingreso].innerHTML);
    }
     document.getElementById("presupuesto_ingreso--valor").innerHTML = totalIngreso;
    return totalIngreso;
    
}; 
totalIngresos();
*/

/*

const totalIngresos = () => {
    const totalIngreso = 0;
    const totalElementoValor = document.getElementsByClassName("elemento_valor");
    console.log("Aquí debería aparecer el valor:", totalElementoValor);
    for (var ingreso=0; ingreso<totalElementoValor.length; ingreso++) {
        totalIngreso += parseFloat(totalElementoValor[ingreso].innerHTML);
    }
     document.getElementById("presupuesto_ingreso--valor").innerHTML = totalIngreso;
    return totalIngreso;
    
}; 
totalIngresos();
*/



//---------------- Ingresos -------------------------
const totalIngresos = () => {
    var totalIngreso = 0;
    var ingresosElement = document.getElementById("lista-ingresos");
    var totalElementovalor = ingresosElement.getElementsByClassName("elemento_valor");
    for (var ingreso = 0; ingreso < totalElementovalor.length; ingreso++) {
      totalIngreso +=
        parseFloat(totalElementovalor[ingreso].innerHTML);
    }
    return totalIngreso;
  };
  
  const cargarIngresos = () => {
    const ingresosElement = document.getElementById("presupuesto_ingreso--valor");
    ingresosElement.innerHTML = totalIngresos();
  };
  
  //------------------- % ingreso ------------------------------
  const porcentajeIngreso1 = () => {
    const totalElementovalor = document.getElementById("lista-ingresos").getElementsByClassName("elemento_valor").length;
    if (totalElementovalor == 0) {
      return 0;
    };
    const porcentajeIngreso = (totalIngresos() / totalElementovalor) * 100;
    return porcentajeIngreso.toFixed(2); // Redondear a 2 decimales
  };
  
  const cargarPorcentajeIngreso = () => {
    const PorcentajeIngresoElement = document.getElementById("presupuesto_ingreso--porcentaje");
    PorcentajeIngresoElement.innerHTML = porcentajeIngreso1() + "%";
  };
  
  
  
    //-----------------Egresos-------------------------------
    
    const totalEgresos = () => {
      var totalEgreso = 0;
      var egresosElement = document.getElementById("lista-egresos");
      var totalElementovalor = egresosElement.getElementsByClassName("elemento_valor");
      for (var egreso = 0; egreso < totalElementovalor.length; egreso++) {
        totalEgreso =
          totalEgreso + parseFloat(totalElementovalor[egreso].innerHTML);
      }
      return totalEgreso;
    };
    
    const cargarEgresos = () => {
      const egresosElement = document.getElementById("presupuesto_egreso--valor");
      egresosElement.innerHTML = totalEgresos();
    };
  
    //------------------- % egreso ------------------------------
  const porcentajeEgreso1 = () => {
    const totalElementovalorEgr = document.getElementById("lista-egresos").getElementsByClassName("elemento_valor").length;
    if (totalElementovalorEgr === 0) {
      return 0;
    };
    const porcentajeEgreso = (totalEgresos() / totalElementovalorEgr) * 100;
    return porcentajeEgreso.toFixed(2); 
  };
  
  const cargarPorcentajeEgreso = () => {
    const PorcentajeEgresoElement = document.getElementById("presupuesto_egreso--porcentaje");
    PorcentajeEgresoElement.innerHTML = porcentajeEgreso1() + "%";
  };
  
  
    
  
  
  
    
    const cargarcabecero = () => {
      cargarIngresos();
      cargarEgresos();
      cargarPorcentajeIngreso();
      porcentajeIngreso1();
  
      var presupuesto = cargarIngresos() - cargarEgresos();
      var porcentajeEgreso = cargarIngresos() / cargarEgresos();
      //mandar llamar variable con formato
      var presupuestoFormatoMoneda = formatoMoneda(presupuesto);
      var egresoPorcentuado = formatoPorcentaje(porcentajeEgreso);
    
      console.log("Presupuesto:", presupuesto);
      console.log("Porcentaje:", porcentajeEgreso);
      console.log("Ingresos total:");
      console.log("% ingreso", porcentajeIngreso1())
     
      
    };
    
    cargarcabecero();



  