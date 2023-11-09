// Obtém os elementos do HTML
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const op = document.getElementById("op");
const calc = document.getElementById("calc");
const result = document.getElementById("result");

// Carrega o arquivo webassembly
fetch("build/release/ioc.wasm")
    .then(response => response.arrayBuffer())
    .then(buffer => WebAssembly.instantiate(buffer))
    .then(wasmModule => {
        // Obtém as funções exportadas pelo webassembly
        const wasmExports = wasmModule.instance.exports;

        // Adiciona um evento de clique no botão calcular
        calc.addEventListener("click", () => {
            // Obtém os valores dos inputs
            const a = parseFloat(num1.value);
            const b = parseFloat(num2.value);
            const operation = op.value;

            // Chama a função correspondente à operação escolhida
            let r;
            switch (operation) {
                case "add":
                    r = wasmExports.add(a, b);
                    break;
                case "sub":
                    r = wasmExports.sub(a, b);
                    break;
                case "mul":
                    r = wasmExports.mul(a, b);
                    break;
                case "div":
                    r = wasmExports.div(a, b);
                    break;
            }

            // Mostra o resultado no HTML
            result.textContent = r;
        });

        // Adiciona um evento de tecla pressionada em toda a página
        document.addEventListener("keydown", (event) => {
            // Verifica se a tecla pressionada foi o enter
            if (event.key === 'Enter') {
                // Obtém os valores dos inputs
                const a = parseFloat(num1.value);
                const b = parseFloat(num2.value);
                const operation = op.value;

                // Chama a função correspondente à operação escolhida
                let r;
                switch (operation) {
                    case "add":
                        r = wasmExports.add(a, b);
                        break;
                    case "sub":
                        r = wasmExports.sub(a, b);
                        break;
                    case "mul":
                        r = wasmExports.mul(a, b);
                        break;
                    case "div":
                        r = wasmExports.div(a, b);
                        break;
                }

                // Mostra o resultado no HTML
                result.textContent = r;
            }
        });
    });
