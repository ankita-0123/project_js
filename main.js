let btn = document.getElementById("button");

btn.addEventListener("click", btnClicked);

function btnClicked(e) {
	e.preventDefault();
	console.log("button clicked");
	let amountText = document.getElementById("expenseAmount").value;
	let descriptionText = document.getElementById("Description").value;
	let categText = document.getElementById("Category").value;

	const obj = {
		amountText,
		descriptionText,
		categText,
	};

	localStorage.setItem(amountText, JSON.stringify(obj));

	// Getting details
	let getItems = JSON.parse(localStorage.getItem(amountText));

	console.log(getItems);
	getExpenseList(getItems);
}

function getExpenseList(item) {
	const itemList = document.getElementById("itemList");
	listArr = Object.values(item);

	// creating li to display on the UI
	const li = document.createElement("li");
	li.id = `${item.amountText}`;
	li.appendChild(
		document.createTextNode(
			`${item.amountText}, ${item.descriptionText}, ${item.categText}`
		)
	);
	itemList.appendChild(li);

	// creating edit button
	let editbtn = document.createElement("button");
	editbtn.id = "edit";
	editbtn.appendChild(document.createTextNode("edit expense"));
	editbtn.onclick = function () {
		console.log("edit clicked");
		editUser(item.amountText, item.descriptionText, item.categText);
	};
	li.appendChild(editbtn);

	let delBtn = document.createElement("button");
	delBtn.id = "delete";
	delBtn.appendChild(document.createTextNode("delete expense"));
	delBtn.onclick = function () {
		deleteUser(item.amountText);
	};

	li.appendChild(delBtn);
	itemList.appendChild(li);
}

function editUser(amount, desc, category) {
	console.log("edit invoked");
	document.getElementById("expenseAmount").value = amount;
	document.getElementById("Description").value = desc;
	document.getElementById("Category").value = category;
	deleteUser(amount);
}

function deleteUser(amount) {
	console.log("delete invoked");
	localStorage.removeItem(amount);
	removeUser(amount);
}

function removeUser(amount) {
	let ul = document.getElementById("itemList");
	let li = document.getElementById(amount);
	ul.removeChild(li);
}

window.addEventListener("DOMContentLoaded", () => {
	const localStorageObj = localStorage;
	const localstoragekeys = Object.keys(localStorageObj);

	for (var i = 0; i < localstoragekeys.length; i++) {
		const key = localstoragekeys[i];
		const userDetailsString = localStorageObj[key];
		const userDetailsObj = JSON.parse(userDetailsString);
		getExpenseList(userDetailsObj);
	}
});