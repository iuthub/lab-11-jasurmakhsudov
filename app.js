window.onload=function(){

let calculator = document.querySelector('.calculator') 
let keys = calculator.querySelector('.calculator__keys') 
const display = document.querySelector('.calculator__display ')

keys.addEventListener('click', function(e) {
	let key = e.target
	let action = key.dataset.action

	if(e.target.matches('button')) {
		const key = e.target
		const action = key.dataset.action
		const keyContent = key.textContent
		const displayedNum = display.textContent
	

	if (!action) { 
		if(displayedNum==='0'){
			display.textContent = keyContent
		}else {
			display.textContent = displayedNum + keyContent 
		}
	}	

	if ((action === 'add' ||
		action === 'subtract' ||
		action === 'multiply' ||
		action === 'divide') && 
		(displayedNum.slice(-1)!="+" &&
		displayedNum.slice(-1)!="-" &&
		displayedNum.slice(-1)!="×" &&
		displayedNum.slice(-1)!="÷"))
	{ 
		display.textContent = displayedNum + keyContent 	
	}
	if(action ==='decimal'&& 
		displayedNum.slice(-1)!="." &&
		displayedNum.slice(-1)!="+" &&
		displayedNum.slice(-1)!="-" &&
		displayedNum.slice(-1)!="×" &&
		displayedNum.slice(-1)!="÷"){
		display.textContent = displayedNum + keyContent
	}
	if(action==='clear'){
		display.textContent = '0'
	}

	if (action==='calculate') {
		let str = displayedNum
		if(str.includes("÷")){
			str=str.split("÷").join("/");
		}
		if(str.includes("×")){
			str=str.split("×").join("*")
		}
		display.textContent = eval(str)
	}

}

})


}