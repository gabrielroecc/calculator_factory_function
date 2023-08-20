function criaCalculadora() {
	return {
		display: document.querySelector(".display"),
		btnClear: document.querySelector(".btn-clear"),

		inicia() {
			this.clickBtn();
			this.clearDisplay();
			this.deleteLastNumber();
			this.doCalc();
			this.enterPress();
		},
		clickBtn() {
			document.addEventListener("click", (e) => {
				const el = e.target;
				if (el.classList.contains("btn-num")) {
					this.btnParaDisplay(el.innerText);
				}

				if (el.classList.contains("btn-clear")) {
					this.clearDisplay();
				}
				if (el.classList.contains("btn-del")) {
					this.deleteLastNumber();
				}
				if (el.classList.contains("btn-eq")) {
					this.doCalc();
				}
			});
		},

		btnParaDisplay(valor) {
			this.display.value += valor;
		},
		clearDisplay() {
			this.display.value = "";
		},
		deleteLastNumber() {
			this.display.value = this.display.value.slice(0, -1);
		},
		doCalc() {
			let calc = this.display.value;
			try {
				calc = eval(calc);
				if (!calc) {
					return;
				}
				this.display.value = String(calc);
			} catch (e) {
				alert("Conta inválida");
				return;
			}
		},
		enterPress() {
			this.display.addEventListener("keyup", (e) => {
				if (e.keyCode === 13) {
					this.doCalc();
				}
			});
		},
	};
}
const calculadora = criaCalculadora();
calculadora.inicia();
