const vehicle1 {
    caracteristicas: {

        numeroRuedas: 4,
        numeroPuertas: 3,5,
        velocidadMaxina: >100,
    }
    
}

const vehicle2 {
    caracteristicas: {

        velocidadMaxina: >80,

    }
}

const vehicle3 {
    caracteristicas: {

        velocidadMaxina: 50,
    }
}

const vehicle4 {
    caracteristicas: {

        velocidadMaxina: 40,
    }
}

const vehicle5 {
    caracteristicas: {

        motorizedVehicles: true,
    }
}

function vehicleType (vehicle) {
    // si el numero de ruedas es 2, es una moto,patinete eletronico o bicicleta si no, un coche 
    if (vehicle.caracteristicas.numeroRuedas === 2) {
       
        return 'moto'| 'patinete eletronico'| 'bicicleta'

    }else {
        return 'coche '
    }
}

function vehicleType (vehicle) {
    //si el numero de puertas es 3 o 5, es un coche si no, una moto, un patienete eletronico o una bicicleta 
    if (vehicle.caracteristicas.numeroPuertas === 3,5) {
        
        return 'coche'

    }else {

        return 'moto'| 'patinete eletronico'| 'bicicleta'
    }
}

function vehicleType (vehicle) {
    // si la velocidad maxina es mayor de 100 km/h, es coche 

    if (vehicle.caracteristicas.velocidadMaxina === >100) {
        
        return 'coche'
    }
}

function vehicleType (vehicle) {
    // si la velocidad maxina es mayor de 80 km/h, es moto 

    if (vehicle.caracteristicas.velocidadMaxina === >80) {

        return  'moto'
    }
    
}

function vehicleType (vehicle) {
    // si la velocidad maxina es 40km/h, es patinete eletronico

    if (vehicle.caracteristicas.velocidadMaxina === 40) {

        return 'patinete eletronico'
    }
}

function vehicle (vehicle) {
    // si la velocidad maxina es 50km/h, es bicicleta 

    if (vehicle.caracteristicas.velocidadMaxina === 50) {

        return 'bicicleta'
    }
}

function vehicle (vehicle) {

    if (vehicle.caracteristicas.motorizedVehicles === true) {

        return 'coche' |'moto'
    }else {
        return 'bicicleta'| 'patinete eletronico'
    }
}