
function Calculadora (){
    this.display = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clear');

    this.iniciar = function () {
        this.cliqueBotoes();
        this.pressionarEnter();
    }

    this.pressionarEnter = function (){
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13){
                this.realizarConta();
            }
        })
    }

    this.clearDisplay = function (){
        this.display.value = '';

    }

    this.apagarUm = function (){
        this.display.value = this.display.value.slice(0 - 1);

    }

    this.realizarConta = function (){
        let conta = this.display.value;

        try{
            conta = eval(conta);

            if (!conta){
                alert ('Conta Inválida');
                return;

            }

            this.display.value = String(conta);
        }catch(e){
            alert('Conta inválida');
            return;

        }

    }

    this.cliqueBotoes = function (){
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')){
                this.btnParaDisplay(el.innerText);

            };

            if (el.classList.contains('btn-clear')){
                this.clearDisplay();

            };

            if (el.classList.contains('btn-del')){
                this.apagarUm();

            };

            if (el.classList.contains('btn-eq')){
                this.realizarConta();
            };
        });
    }

    this.btnParaDisplay = function (valor){
        this.display.value += valor;

    }

}

const calculadora = new Calculadora();
calculadora.iniciar();

/*
function criaCalculadora() {
    return{
        display: document.querySelector('.display'),
        btnClear: document.querySelector('byn-clear'),

        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13){
                    this.realizaConta();
                }
            })
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0 - 1);
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert ("Conta inválida");
                    return;
                }

                this.display.value = String(conta);
            }catch(e){
                alert('Conta inválida');
                return;
            }
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                };

                if (el.classList.contains('btn-clear')){
                    this.clearDisplay();
                };

                if (el.classList.contains('btn-del')){
                    this.apagaUm();
                };

                if (el.classList.contains('btn-eq')){
                    this.realizaConta();
                };
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
*/