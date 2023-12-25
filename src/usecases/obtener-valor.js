export const obtenerValor = (valorBtn) => {

    let valorInicial = $("#resultado").val();

    $("#resultado").val(valorInicial + valorBtn);
    console.log(valorBtn);

}