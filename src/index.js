import { obtenerSimbolo } from "./usecases/obtener-simbolo";
import { obtenerValor } from "./usecases/obtener-valor";
import { reiniciar } from "./usecases/reiniciar";
import { resultado } from "./usecases/resultado";

$(document).ready(function() {

    const btnLimpiar = $("#limpiar");
    const btnNumero = $(".numero");
    const btnSimbolo = $(".simbolo");
    const btnResultado = $("#igual");

    btnNumero.on("click", function() {
        const valorBtn = $(this).text().trim();
        obtenerValor(valorBtn);
    });

    btnSimbolo.on("click", function () {
        const valorBtn = $(this).text().trim();
        obtenerSimbolo(valorBtn);
    })

    btnLimpiar.on("click", function() {
        reiniciar();
    });

    btnResultado.on("click", function(){
        resultado();
    });

});