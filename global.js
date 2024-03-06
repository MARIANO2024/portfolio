console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}

// let navLinks=$$("nav a");

// let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname)

// currentLink?.classList.add("current");

let pages = [
	{url: "", title: "Home"},
	{url: "projects/", title: "Projects"},
    {url: "resume/", title: "Resume"},
	{url: "contact/", title: "Contact"},
    {url: "https://github.com/MARIANO2024", title: "GitHub"}
	
];

let nav = document.createElement("nav");
document.body.prepend(nav);



for (let p of pages) {

	
	let url = p.url;
	let title = p.title;
	// TODO create link and add it to nav
	const ARE_WE_HOME = document.documentElement.classList.contains("home");
	url = !ARE_WE_HOME && !url.startsWith("http") ? "../" + url : url;

	// nav.insertAdjacentHTML("beforeend", `<a href="${ url }">${ title }</a>` );
	let a = document.createElement("a");
	a.href = url;
	a.textContent = title;
	if (a.host === location.host && a.pathname === location.pathname) {
		a.classList.add("current");
	}

	if (a.host !== location.host) {
		a.target="_blank";
	}

	nav.append(a);
	
}

document.body.insertAdjacentHTML("afterbegin", `
	<label class="color-scheme">
		Theme:
		<select>
		<option value="dark">Dark</option>
		<option value="light dark">Light Dark</option>
		<option value="light">Light</option>
		</select>
	</label>`
);

let select= document.querySelector("select");

if("colorScheme" in localStorage){
	document.documentElement.style.setProperty("color-scheme", localStorage.colorScheme);
	select.value=localStorage.colorScheme
}

select.addEventListener("input", function (event) {
	console.log("color scheme changed to", event.target.value);
	document.documentElement.style.setProperty("color-scheme", event.target.value);
	localStorage.colorScheme = event.target.value;

	
});

