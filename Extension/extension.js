const inputElement = document.getElementById("input-el");
const btnElement = document.getElementById("btnElement");
let text = "";
let myLeads = [];
const ulElement = document.querySelector("#ul-el");


btnElement.addEventListener("click", function save() {
    /*text = `<li><a href='${inputElement.value}' target='_blank'> ${inputElement.value} </a></li>`;
    ulElement.innerHTML += text;*/
    render();
})

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("Leads"));
console.log(leadsFromLocalStorage);
console.log(typeof (leadsFromLocalStorage));
console.log(leadsFromLocalStorage);
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render();
}

function render() {
    text = "";
    myLeads.push(inputElement.value);
    for (var i = 0; i < myLeads.length; i++) {
        text += `<li> 
                    <a href="${myLeads[i]}" target="_blank">
                        ${myLeads[i]}
                    </a>
                </li>`;  //Template String
        console.log(text);
    }
    ulElement.innerHTML = text;
    inputElement.value = "";
    localStorage.setItem("Leads", JSON.stringify(myLeads));
    console.log(localStorage.getItem("Leads"));
    console.log(JSON.parse(localStorage.getItem("Leads")));
};




const btn2 = document.querySelector("#nd-btn");
/*
let tabs = [
    { url: "https://www.google.com" }
];
*/
btn2.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log(tabs);
        myLeads.push(tabs[0].url);
        render();
    })



});


const btnDel = document.getElementById("delete");
btnDel.addEventListener("dblclick", function deleteAll() {
    console.log("Double-Clicked hence Deleted");
    localStorage.clear();
    myLeads = [];
    render();
});

