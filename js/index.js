let today = new Date();
let thisYear = today.getFullYear(); 
let footer = document.querySelector("footer");
let copyright = document.createElement("p");


copyright.innerHTML = `Anahit Hyperatian  ${thisYear}`; 
footer.appendChild(copyright);

//List your technical skills by creating an Array of String values and store it in a variable named skills
let skills = ["JavaScript", "CSS", "HTML", "Microsoft Suite"];


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


