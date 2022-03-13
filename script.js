const adviceElement = document.querySelector("#advice");

async function fetchAdvice(){
	const response = await fetch("https://api.adviceslip.com/advice");
	const json = await response.json();
	return json;
}

function updateElements(data){
	adviceElement.innerText = data.slip.advice;
	document.querySelector("#advice__id").innerText = data.slip.id;
}

document.querySelector("#advice__button").onclick = ()=>{
	fetchAdvice().then(advice=>{
		updateElements(advice);
	});
	
}

(async()=>{

	const advice = await fetchAdvice();
	updateElements(advice);

})()

