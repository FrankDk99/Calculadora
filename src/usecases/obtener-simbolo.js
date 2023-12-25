export const obtenerSimbolo = (valorBtn) => {
    let valorInicial = $("#resultado").val();
    $("#resultado").val(valorInicial + valorBtn);
}