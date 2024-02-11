let numbersArr = ["images/7SegmentNumbers_0.png", "images/7SegmentNumbers_1.png",
								 "images/7SegmentNumbers_2.png", "images/7SegmentNumbers_3.png", 
								 "images/7SegmentNumbers_4.png", "images/7SegmentNumbers_5.png", 
								 "images/7SegmentNumbers_6.png", "images/7SegmentNumbers_7.png", 
								 "images/7SegmentNumbers_8.png", "images/7SegmentNumbers_9.png"];

let numeriImmessiArr = [],
		numeriImmessi,
		numeriEstrattiArr = [],
		score = 0;

let milliseconds = 1000,
		howManyNumbers = 4;

let visualizedNumbers = document.getElementById("displayNumbers"),
		numbers = document.getElementById("numbers"),
		countDownNumbers = document.getElementById('countDown'),
		btnN = document.getElementById('btnN'),
		btnH = document.getElementById('btnH'),
		btnS = document.getElementById('btnS'),
		click = document.getElementById('click'),
		rigioca = document.getElementById('rigioca');

function casualNumber() {
	numbersArr = numbersArr.sort(function(a, b) { return 0.5 - Math.random()});
}


function newNumber() {
	numeriEstrattiArr = [];
	numeriImmessiArr = [];
	clearImages();
	casualNumber();
	for(let i = 0; i < howManyNumbers; i++) {
		if (numbersArr[i] === "images/7SegmentNumbers_0.png") {
			numeriEstrattiArr.push('0');
		} else if (numbersArr[i] === "images/7SegmentNumbers_1.png") {
			numeriEstrattiArr.push('1');
		} else if (numbersArr[i] === "images/7SegmentNumbers_2.png") {
			numeriEstrattiArr.push('2');
		} else if (numbersArr[i] === "images/7SegmentNumbers_3.png") {
			numeriEstrattiArr.push('3');
		} else if (numbersArr[i] === "images/7SegmentNumbers_4.png") {
			numeriEstrattiArr.push('4');
		} else if (numbersArr[i] === "images/7SegmentNumbers_5.png") {
			numeriEstrattiArr.push('5');
		} else if (numbersArr[i] === "images/7SegmentNumbers_6.png") {
			numeriEstrattiArr.push('6');
		} else if (numbersArr[i] === "images/7SegmentNumbers_7.png") {
			numeriEstrattiArr.push('7');
		} else if (numbersArr[i] === "images/7SegmentNumbers_8.png") {
			numeriEstrattiArr.push('8');
		} else if (numbersArr[i] === "images/7SegmentNumbers_9.png") {
			numeriEstrattiArr.push('9');
		}   
		visualizedNumbers.innerHTML += `<img src="${numbersArr[i]}">`;
	}
	console.log(numeriEstrattiArr);	
}

function moreNumbers() {
	if (howManyNumbers <= 9) {
		howManyNumbers ++;
		document.getElementById('pHowManyNumbers').innerHTML = `CIFRE: ${howManyNumbers}`;
		click.play();
	}
}
function lessNumbers() {
	if (howManyNumbers > 1) {
		howManyNumbers --;
		document.getElementById('pHowManyNumbers').innerHTML = `CIFRE: ${howManyNumbers}`;
		click.play();
	}
}

function moreSeconds() {
		milliseconds += 200;
		let seconds = milliseconds / 1000;
		document.getElementById('pHowManySeconds').innerHTML = `SECONDI: ${seconds.toFixed(1)}`;
		click.play();
	}

function lessSeconds() {
	if (milliseconds > 200) {
		milliseconds -= 200;
		seconds = milliseconds / 1000; 
		document.getElementById('pHowManySeconds').innerHTML = `SECONDI: ${seconds.toFixed(1)}`;
		click.play();
	}
}

function restart() {
	rigioca.play();
	function riavvia() {
		window.location.reload();
	}
	setTimeout(riavvia, 2500);
}

// per cancellare l'array di immagini inserisco una immagine trasparente della larghezza di 1 pixel
function clearImages() {
	visualizedNumbers.innerHTML = '<img src="images/immagine_trasparente.png" width=1>';
}	

function hideDisplay() {
	displayNumbers.style.opacity = '0';
	numbers.style.opacity = '1';
}

function hideNumbers() {
	numbers.style.opacity = '0';
}

function showNumbers() {
	numbers.style.opacity = '1';
}

function showDisplay() {
	displayNumbers.style.opacity = '1';
	numbers.style.opacity = '0';
}

function showDisplayForALittle() {
	displayNumbers.style.opacity = '1';
	setTimeout(hideDisplay, milliseconds);
	document.getElementById('containerTwo').style.border = "0px";
	setTimeout(showNumbers, milliseconds + 700);
}



function buttonN() {
	countDownOneA();
//	defaultButtonColors();
//	btnN.style.border = "2px outset darkred";
//	btnN.style.backgroundColor = "darkcyan";
//	btnN.style.color = "darkblue";
//	setTimeout(buttonNUp, 400);
	click.play()
}
function buttonH() {
	hideDisplay();
//	btnH.style.border = "2px outset darkred";
//	btnH.style.backgroundColor = "darkcyan";
//	btnH.style.color = "darkblue";
//	setTimeout(buttonHUp, 400);
	click.play()
}
function buttonS() {
	showDisplay();
//	btnS.style.border = "2px outset darkred";
//	btnS.style.backgroundColor = "darkcyan";
//	btnS.style.color = "darkblue";
//	setTimeout(buttonSUp, 400);
	click.play()
}

//function buttonNUp(){
//	btnN.style.border = "5px inset darkred";
//	btnN.style.backgroundColor = "darkblue";
//	btnN.style.color = "darkcyan";
//}
//function buttonHUp(){
//	btnH.style.border = "5px inset darkred";
//	btnH.style.backgroundColor = "darkblue";
//	btnH.style.color = "darkcyan";
//}
//function buttonSUp(){
//	btnS.style.border = "5px inset darkred";
//	btnS.style.backgroundColor = "darkblue";
//	btnS.style.color = "darkcyan";
//}

//function defaultButtonColors() {
//	document.getElementById('zero').style.backgroundColor = 'darkblue';
//	document.getElementById('one').style.backgroundColor = 'darkblue';
//	document.getElementById('two').style.backgroundColor = 'darkblue';
//	document.getElementById('three').style.backgroundColor = 'darkblue';
//	document.getElementById('four').style.backgroundColor = 'darkblue';
//	document.getElementById('five').style.backgroundColor = 'darkblue';
//	document.getElementById('six').style.backgroundColor = 'darkblue';
//	document.getElementById('seven').style.backgroundColor = 'darkblue';
//	document.getElementById('eight').style.backgroundColor = 'darkblue';
//	document.getElementById('nine').style.backgroundColor = 'darkblue';
//}

function seleziona0() {
	numeriImmessiArr.push('0');
	numeriImmessi = numeriImmessiArr.join('');
//	document.getElementById('zero').style.backgroundColor = 'darkred';
	document.getElementById('mi1').play();
	countDownNumbers.innerHTML += 0;
}
function seleziona1() {
	numeriImmessiArr.push('1');
	numeriImmessi = numeriImmessiArr.join('');
//	document.getElementById('one').style.backgroundColor = 'darkred';
	document.getElementById('do').play();
	countDownNumbers.innerHTML += 1;
}
function seleziona2() {
	numeriImmessiArr.push('2');
	numeriImmessi = numeriImmessiArr.join('');
//	document.getElementById('two').style.backgroundColor = 'darkred';
	document.getElementById('re').play();
	countDownNumbers.innerHTML += 2;
}
function seleziona3() {
	numeriImmessiArr.push('3');
	numeriImmessi = numeriImmessiArr.join('');
//	document.getElementById('three').style.backgroundColor = 'darkred';
	document.getElementById('mi').play();
	countDownNumbers.innerHTML += 3;
}
function seleziona4() {
	numeriImmessiArr.push('4');
	numeriImmessi = numeriImmessiArr.join('');
//	document.getElementById('four').style.backgroundColor = 'darkred';
	document.getElementById('fa').play();
	countDownNumbers.innerHTML += 4;
}
function seleziona5() {
	numeriImmessiArr.push('5');
	numeriImmessi = numeriImmessiArr.join('');
//	document.getElementById('five').style.backgroundColor = 'darkred';
	document.getElementById('sol').play();
	countDownNumbers.innerHTML += 5;
}
function seleziona6() {
	numeriImmessiArr.push('6');
	numeriImmessi = numeriImmessiArr.join('');
//	document.getElementById('six').style.backgroundColor = 'darkred';
	document.getElementById('la').play();
	countDownNumbers.innerHTML += 6;
}
function seleziona7() {
	numeriImmessiArr.push('7');
	numeriImmessi = numeriImmessiArr.join('');
//	document.getElementById('seven').style.backgroundColor = 'darkred';
	document.getElementById('si').play();
	countDownNumbers.innerHTML += 7;
}
function seleziona8() {
	numeriImmessiArr.push('8');
	numeriImmessi = numeriImmessiArr.join('');
//	document.getElementById('eight').style.backgroundColor = 'darkred';
	document.getElementById('do1').play();
	countDownNumbers.innerHTML += 8;
}
function seleziona9() {
	numeriImmessiArr.push('9');
	numeriImmessi = numeriImmessiArr.join('');
//	document.getElementById('nine').style.backgroundColor = 'darkred';
	document.getElementById('re1').play();
	countDownNumbers.innerHTML += 9;
}
function selezionaCanc() {
	numeriImmessiArr.pop();
	numeriImmessi = numeriImmessiArr.join('');
	document.getElementById('click').play();
	countDownNumbers.innerHTML = numeriImmessi;
}

function selezionaInvio() {
	/* 
	Attenzione! Se tentiamo di comparare due array otteniamo un risultato no voluto, perché, anche se 
	a noi sembrano uguali, per JavaScript non lo sono: se aArr = [1, 2, 3] e bArr = [1,2,3];
	console.log(aArr == bArr) dà false!
	Risolviamo così: JSON.stringify(numeriEstrattiArr) == JSON.stringify(numeriImmessiArr)  ==> dà true.
	soluzione trovata su: https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript 
	*/
	if (JSON.stringify(numeriEstrattiArr) == JSON.stringify(numeriImmessiArr)) {
		document.getElementById('correct2').play();
		console.log('bravo paolo!');
		score ++;
		document.getElementById('score').innerHTML = `&nbsp;PUNTEGGIO: ${score}&nbsp;`;
		document.getElementById('score').style.color = 'green';
//		document.getElementById('score').style.fontSize = '2vw';
	} else {
		document.getElementById('sbagliato').play();
		score --; 
		document.getElementById('score').innerHTML = `&nbsp;PUNTEGGIO: ${score}&nbsp;`;
		document.getElementById('score').style.color = 'red';
//		document.getElementById('score').style.fontSize = '2vw';
		
	}
	showDisplay();
	click.play();
}


function countDownOneA() {
	hideDisplay();
	hideNumbers();
	newNumber();
	document.getElementById('containerTwo').style.border = "2px dashed darkslateblue";
	countDownNumbers.innerHTML = 1;
	setTimeout(countDownOneB, 250);
}
function countDownOneB() {
	countDownNumbers.innerHTML = "&nbsp;";
	setTimeout(countDownTwoA, 250);
}
function countDownTwoA() {
	countDownNumbers.innerHTML = 2;
	setTimeout(countDownTwoB, 250);
}
function countDownTwoB() {
	countDownNumbers.innerHTML = "&nbsp;";
	setTimeout(countDownThreeA, 250);
}
function countDownThreeA() {
	countDownNumbers.innerHTML = 3;
	setTimeout(countDownThreeB, 250);
}
function countDownThreeB() {
	countDownNumbers.innerHTML = "&nbsp";
	setTimeout(showDisplayForALittle, 700);
}