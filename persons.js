let persons = [
  {
    name: "Сергей",
    age: 41
  },
  {
    name: "Ольга",
    age: 17
  },
  {
    name: "Юрий",
    age: 15
  },
  {
    name: "Наталия",
    age: 18
  },
]

let template = document.getElementById('person-template');
let mainDiv = document.getElementsByClassName('main')[0];

for(let person of persons) {
  let personDiv = template.cloneNode(true);
  personDiv.removeAttribute('id');
  let nameBlock = personDiv.querySelector(".name");
  let ageBlock = personDiv.querySelector(".age");

  nameBlock.innerText = person.name;
  ageBlock.innerText = person.age;
  mainDiv.appendChild(personDiv);
  }
  mainDiv.removeChild(template);
