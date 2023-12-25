export const resultado = () => {
    try {
        let valorOperacion = $("#resultado").val();
        let resultadoOperacion = eval(valorOperacion);
        $("#resultado").val(resultadoOperacion);
    } catch {
        console.error("error en la operacion")
    }
}