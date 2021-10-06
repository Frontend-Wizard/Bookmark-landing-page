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
