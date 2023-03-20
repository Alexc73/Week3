const keys = document.querySelectorAll(".key");
	keys.forEach(key => {
		const keyCode = key.getAttribute("data-key");
		key.addEventListener("click", playSound);
		document.addEventListener("keydown", playSound);

	function playSound(event) {
		if ((event.type === "click" && event.target === key) ||
			(event.type === "keydown" && event.keyCode == keyCode)) {
			const audio = document.getElementById("audio");
			audio.currentTime = 0;
			audio.src = "Sounds/" + key.textContent.toLowerCase() + ".wav";
			audio.play();
		}
	}
});