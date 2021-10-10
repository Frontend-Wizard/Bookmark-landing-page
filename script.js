/////////////////////////////// Tab changing //////////////////////////////////// 
const TabsMenu = [
	document.getElementById("Bookmarking"),
	document.getElementById("Searching"),
	document.getElementById("Sharing"),
];

const Tabs = [
	document.getElementById("BookmarkingTab"),
	document.getElementById("SearchingTab"),
	document.getElementById("SharingTab"),
];

let activeTab = 0;

for (let i = 0; i < Tabs.length; i++) {
	if (TabsMenu[i].classList.contains("activeTab"))
		TabsMenu[i].classList.remove("activeTab");
}

for (let i = 0; i < Tabs.length; i++) {
	Tabs[i].style.display = "none";
}

function ChangeTab(k) {
	if (TabsMenu[activeTab].classList.contains("activeTab"))
		TabsMenu[activeTab].classList.remove("activeTab");
	TabsMenu[k].classList.add("activeTab");

	if (window.getComputedStyle(Tabs[activeTab]).display === "flex")
		Tabs[activeTab].style.display = "none";

	Tabs[k].style.display = "flex";
	activeTab = k;
}

ChangeTab(0);

for (let i = 0; i < TabsMenu.length; i++) {
	TabsMenu[i].addEventListener("click", () => {
		ChangeTab(i);
	});
}

///////////////////////////////////////     Email validation     ///////////////////////////////////////////////////////////////

const EmailInput = document.getElementById("EmailInput");
const EmailInputSubmit = document.getElementById("EmailInputSubmit");
const EmailInputText = document.querySelector(".EmailinputForm div p");
const EmailInputDiv = document.querySelector(".EmailinputForm div");

validateEmail = (email) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

function CheckEmail(email) {
	email = validateEmail(email);
	EmailInputText.style.display = email ? "none" : "block";
	EmailInputDiv.style.backgroundColor = email ? "transparent" : "#fa5757";
	EmailInput.style.borderColor = email ? "#fff" : "#fa5757";
}

EmailInputSubmit.addEventListener("click", () => {
	CheckEmail(EmailInput.value);
});

EmailInput.addEventListener("change", () => {
	CheckEmail(EmailInput.value);
});

///////////////////////////// FAQ Functions ///////////////////////////////////////////////////////

let questions = document.querySelectorAll('div[id^="question"] h2');

let answers = document.querySelectorAll('div[id^="answer"]');

for (let i = 0; i < answers.length; i++)
	answers[1][i] = parseInt(
		window
			.getComputedStyle(document.querySelectorAll('div[id^="answer"]')[i])
			.height.slice(0, -2)
	);

for (let i = 0; i < questions.length; i++) {
	let k = [questions[i], answers[i]];
	k[0].addEventListener("click", () => {
		k[0].classList.toggle("arrowActive");
		k[0].classList.contains("arrowActive")
			? shrink(k[1])
			: grow(k[1], answers[1][i]);
	});
}

function shrink(k) {
	let height = parseInt(window.getComputedStyle(k).height.slice(0, -2));
	for (let i = height; i >= 0; i--) {
		setTimeout(() => {
			k.style.height = height - i + "px";
		}, (100 / height) * i);
	}
}

function grow(k, height) {
	for (let i = 0; i <= height; i++) {
		setTimeout(() => {
			k.style.height = i + "px";
		}, (100 / height) * i);
	}
}

for (let i = 0; i < questions.length; i++) questions[i].click();

///////////////////////////////// Animation ////////////////////////////////////////////////////////////////

let windowHeight;
let elements = document.querySelectorAll(".browserCard");

function init() {
	windowHeight = window.innerHeight;
}

function checkPosition() {
	elements.forEach((element) => {
		let positionFromTop = element.getBoundingClientRect().top;
		if (positionFromTop - windowHeight <= -200) {
			element.style.animation = "slideInDown 1s 1 forwards";
		}
	});

	document.querySelectorAll(".tab1 img").forEach((element) => {
		let positionFromTop = element.getBoundingClientRect().top;
		if (positionFromTop - windowHeight <= -200) {
			element.style.animation = "slideInLeft 1s 1 forwards";
		}
	});

	document
		.querySelectorAll('.tab1 div[class^="column"],.tab2 div[class^="column"]')
		.forEach((element) => {
			let positionFromTop = element.getBoundingClientRect().top;
			if (positionFromTop - windowHeight <= -200) {
				element.style.animation = "slideInRight 1s 1 forwards";
			}
		});
}

init();
checkPosition();

window.addEventListener("scroll", checkPosition);
window.addEventListener("resize", init);