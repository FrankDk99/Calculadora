import { obtenerSimbolo } from "./usecases/obtener-simbolo";
import { obtenerValor } from "./usecases/obtener-valor";
import { reiniciar } from "./usecases/reiniciar";

$(document).ready(function() {

    const btnLimpiar = $("#limpiar");
    const btnNumero = $(".numero");
    const btnSimbolo = $(".simbolo");

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

});