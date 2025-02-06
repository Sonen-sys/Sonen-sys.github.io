var action = document.getElementById("action");
var leftArm = document.querySelector('.left_arm');
var rightArm = document.querySelector('.right_arm');
var mouth = document.querySelector('.mouth');
var leftEye = document.querySelector('.left_eye');
var rightEye = document.querySelector('.right_eye');

function Hug(position) {
	leftArm.style.transition = '2s ease-in-out';
	leftArm.style.transformOrigin = 'top';
    leftArm.style.transform = 'rotate(' + position + 'deg)';
    rightArm.style.transition = '2s ease-in-out';
	rightArm.style.transformOrigin = 'top';
    rightArm.style.transform = 'rotate(-' + position + 'deg)';
}

function Shock(mouthHeight) {
	mouth.style.transition = '3s';
	mouth.style.height = mouthHeight + 'px';
}

function Sus(eyeHeight) {
	leftEye.style.transition = '2s ease-in-out';
	leftEye.style.height = eyeHeight + 'px';
	rightEye.style.transition = '2s ease-in-out';
	rightEye.style.height = eyeHeight + 'px';
}

action.addEventListener("change", function() {
	// if (action.value === 'Hug') {
	// 	Hug(120);
	// 	Shock(10);
	// }	else {
	// 	Hug(0);
	// 	Shock(40);
	// }
	switch(action.value) {
		case 'Normal':
			Hug(0);
			Shock(10);
			Sus(30);
			break;
		case 'Hug':
			Hug(120);
			Shock(10);
			Sus(30);
			break;
		case 'Shock':
			Hug(0);
			Shock(40);
			Sus(30);
			break;
		case 'Sus':
			Hug(0);
			Shock(10);
			Sus(10);
			break;
		default:
			Hug(0);
			Shock(10);
			Sus(30);
	}
}
)