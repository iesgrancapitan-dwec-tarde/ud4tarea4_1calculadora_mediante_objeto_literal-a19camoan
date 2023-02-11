/**
 * En este repositorio entrega la calculadora de la tarea anterior. Toma como base esta calculadora. Recuerda:
 *   - Parte de un documento html vacío
 *   - Crea los elementos HTML de la calculadora mediante los métodos del objeto predefinido document.
 *     Ni tablas ni li, ni document.write() ni fichero.css están permitidos. Dale un buen uso a las etiquetas
 * 
 * Añádele ahora el comportamiento del display bien controlado (ni +, ni -, ni x ni %):
 *   1. Inicialmente en el display aparece el cero sin decimal.
 *   2. En el display sólo puede aparecer un punto decimal.
 *   3. A la izquierda del punto sólo puede aparecer un cero ("00.1" no es válido).
 *   4. No hay que escribir "0." para que te acepte el decimal. Basta con que pulse la coma decimal. Entonces el resto se consideran decimales.
 *   5. En el display siempre ha de haber un dígito. En caso de usar el retroceso y ser el último carácter aparecerá un cero.
 *   6. El cero negativo no existe ("-0" no es válido)
 * 
 * El diseño parte del ejercicio del tema anterior.  Procura que el patrón de diseño sea con un objeto literal.
 * 
 * Ten en cuenta los siguientes detalles:
 *   - Usa funciones arrow en la medida de lo posible.
 *   - Evita el uso del for clásico
 *   - No uses document.get... y añade el comportamiento conforme los vayas creando
 * 
 * @author Andrés Castillero Moriana
 */
{
    const meter_css = () => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "./css/style.css";
        document.head.appendChild(link);
    };


    const calculadora = {
        // Usamos los separadores de millares y decimales anglosajones. Se pueden cambiar por otros.
        separador_millares: ",",
        separador_decimal: ".",
        // El valor inicial de la pantalla es "0".
        pantalla: "0",

        /**
         * Comprueba el botón que se ha pulsado y ejecuta la acción correspondiente.
         * 
         * @param {string} boton el botón que se ha pulsado
         */
        comprobar_boton: function (boton) {
            switch (boton) {
                case ",":
                    this.agregar_separador_decimal();
                    break;
                case "CE":
                    this.pantalla = "0";
                    break;
                case "±":
                    this.cambiar_signo();
                    break;
                case "←":
                    this.borrar_ultimo_caracter();
                    break;
                default:
                    this.agregar_numero(boton);
                    break;
            };
        },

        /**
         * Añade el punto decimal a la calculadora.
         */
        agregar_separador_decimal: function () {
            if (this.pantalla == "0")
                this.pantalla = "0" + this.separador_decimal;
            else if (!this.pantalla.includes(this.separador_decimal))
                this.pantalla = this.pantalla + this.separador_decimal;
        },

        /**
         * Cambia el signo del número que se está escribiendo en la calculadora.
         */
        cambiar_signo: function () {
            if (!this.pantalla == "0")
                this.pantalla = this.pantalla * -1;
        },

        /**
         * Borra el último número introducido en la calculadora.
         */
        borrar_ultimo_caracter: function () {
            if (this.pantalla.length === 1)
                this.pantalla = "0";
            else
                this.pantalla = this.pantalla.substring(0, this.pantalla.length - 1);
        },

        /**
         * Añade un número a la calculadora.
         * 
         * @param {string} numero el número que se quiere añadir a la calculadora
         */
        agregar_numero: function (numero) {
            if (this.pantalla == "0")
                this.pantalla = numero;
            else {
                this.agregar_separador_millar(numero);
            };
        },

        /**
         * Añade el separador de millares a la calculadora.
         * 
         * @param {string} numero el número que se quiere añadir a la calculadora
         */
        agregar_separador_millar: function (numero) {
            const patron = new RegExp("\\" + this.separador_millares, "g");

            if ((this.pantalla.replace(patron, "").length % 3 === 0) && !this.pantalla.includes(this.separador_decimal))
                this.pantalla = this.pantalla + this.separador_millares + numero;
            else
                this.pantalla = this.pantalla + numero;
        },

        /**
         * Dibuja la calculadora en la página
         */
        dibujar_calculadora: function () {
            const fragment = document.createDocumentFragment();

            const input = document.createElement("input");
            input.value = this.pantalla;
            input.setAttribute("type", "text");
            input.setAttribute("readonly", "readonly");
            fragment.appendChild(input);

            fragment.appendChild(document.createElement("br"));

            const botones = ["CE", "←", "%", "+", 7, 8, 9, "-", 4, 5, 6, "X", 1, 2, 3, "÷", 0, "±", ",", "="];
            botones.forEach((element, index) => {
                const boton = document.createElement("button");
                boton.textContent = element;
                fragment.appendChild(boton);

                if ((index + 1) % 4 === 0)
                    fragment.appendChild(document.createElement("br"));
            });

            document.body.appendChild(fragment);
        }
    };

    document.addEventListener("DOMContentLoaded", () => {
        meter_css();
        calculadora.dibujar_calculadora();

        document.querySelectorAll("button").forEach((boton) => {
            boton.addEventListener("click", () => {
                calculadora.comprobar_boton(boton.textContent);
                document.querySelector("input").value = calculadora.pantalla;
            });
        });
    });
}
