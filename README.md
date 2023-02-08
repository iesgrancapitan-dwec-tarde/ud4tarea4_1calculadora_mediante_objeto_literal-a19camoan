# Ejercicio 4.1. Calculadora mediante objeto literal

En este repositorio entrega la calculadora de la tarea anterior. Toma como base [esta calculadora](https://www.webestools.com/scripts_tutorials-code-source-8-javascript-calculator-buttons-calculator-keyboard-support-operations-modulo.html). Recuerda:

* Parte de un documento html vacío
* Crea los elementos HTML de la calculadora mediante los métodos del objeto predefinido document. Ni tablas ni li, ni document.write() ni fichero.css están permitidos. Dale un buen uso a las etiquetas.

Añádele ahora el comportamiento del display bien controlado (ni +, ni -, ni x ni %):

1. Inicialmente en el display aparece el cero sin decimal.
1. En el display sólo puede aparecer un punto decimal.
1. A la izquierda del punto sólo puede aparecer un cero ("00.1" no es válido).
1. No hay que escribir "0." para que te acepte el decimal. Basta con que pulse la coma decimal. Entonces el resto se consideran decimales.
1. En el display siempre ha de haber un dígito. En caso de usar el retroceso y ser el último carácter aparecerá un cero.
1. El cero negativo no existe ("-0" no es válido)

El diseño parte del ejercicio del tema anterior.  Procura que el patrón de diseño sea con un objeto literal.

Ten en cuenta los siguientes detalles:

* Usa funciones arrow en la medida de lo posible.
* Evita el uso del for clásico
* No uses document.get... y añade el comportamiento conforme los vayas creando

## Referencia

* [Learning JavaScript Design Patterns](https://www.patterns.dev/posts/classic-design-patterns/#modulepatternjavascript) (Object literals)
* [syntax introduced in ES5.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions#description)

## Solución

[HTML](./index.html) | [JS](./js/main.js)

## Autor: [Andrés Castillero Moriana](https://github.com/a19camoan)
