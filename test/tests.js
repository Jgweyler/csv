var assert = chai.assert;

suite('Pruebas para CSV', function() {
    test('Introduciendo: "Valor1, Valor2"', function() {
        escritura.value = "Valor1, Valor2";
        calculate();
        assert.isString(resultado.innerHTML);
    });
    test('¿Se devuelve una tabla?', function() {
        escritura.value = "Valor1, Valor2";
        calculate();
        assert.deepEqual(resultado.innerHTML, '<p>\n</p><table class="center" id="result">\n<tbody><tr>                    <td>Valor1</td>                                  <td> Valor2</td>              </tr>\n</tbody></table>');
    });
    test('¿Es el número de elementos por columna correcto?', function() {
        escritura.value = "Columna1, Columna2\nAtributo1, Atributo2, Atributo3";
        calculate();
        assert.deepEqual(err.innerHTML, "");
    });
    test('Comprobando error al no insertar valores', function() {
        escritura.value = "";
        calculate();
        assert.deepEqual(err.innerHTML, "");
    });
});