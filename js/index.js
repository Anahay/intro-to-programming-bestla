let today = new Date();
let thisYear = today.getFullYear(); 
let footer = document.querySelector("footer");
let copyright = document.createElement("p");


copyright.innerHTML = `Anahit Hyperatian &copy;  ${thisYear} `; 
footer.appendChild(copyright);

//List your technical skills by creating an Array of String values and store it in a variable named skills
let skills = ["JavaScript", "CSS", "HTML", "Microsoft Suite"];
let projects = ["JavaScript Intro"];

//Using "DOM Selection", select the #skills section by id and store it in a variable named skillsSection

let skillsSection = document.getElementById("skills");

//Using "DOM Selection", query the skillsSection (instead of the entire document) to find the <ul> element and store it in a variable

let skillsList = skillsSection.querySelector("ul");


/*Create a for loop to iterate over your skills Array, starting at index 0
Inside the loop, create a new list item (li) element and store it in a variable named skill
On the next line, set the inner text of your skill variable to the value of the current Array element
On the next line, append the skill element to the skillsList element*/

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
};


let messageForm = document.getElementsByName("leave_message");
const messageSection = document.getElementById("messages");
messageSection.hidden = true;

messageForm.item(0).addEventListener("submit", (event) => {
    event.preventDefault();

    let name = event.target.name.value;
    let email = event.target.email.value;
    let message = event.target.message.value;


    console.log(name);
    console.log(email);
    console.log(message);

    let messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href = "mailto: ${email}">${name}</a> Message:  <span> ${message} </span>`;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentElement;
        entry.remove();
    });

    messageList.appendChild(newMessage);
    newMessage.appendChild(removeButton);
    messageSection.hidden = false;
    messageForm.item(0).reset();

    if(messageList== 0) {
        document.getElementById("messages").style.display = "none";
    }

});

let githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/Anahay/repos");

githubRequest.addEventListener('load', (event) => {
    let repositories = JSON.parse(this.response);
    console.log(repositories);
});
let projectSection = document.getElementById("projects");
let projectList = projectSection.querySelector("ul");
for (let i = 0; i < projects.length; i++) {
    let project = document.createElement("li");
    project.innerText = projects[i];
    projectList.appendChild(project);
    };

githubRequest.send();