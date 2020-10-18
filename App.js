const person = [
  {
    name: "Aditya",
    className: "B-Tech",
    experiance: "10",
  },
  {
    name: "Ajit",
    className: "12th",
    experiance: "10",
  },
  {
    name: "Arun",
    className: "B-Tech",
    experiance: "10",
  },
  {
    name: "Sachin",
    className: "CA",
    experiance: "10",
  },
  {
    name: "Sachin",
    className: "B.com",
    experiance: "10",
  },
  {
    name: "Abhishek",
    className: "LLB",
    experiance: "10",
  },
];

const pname = ["All", ...new Set(person.map((item) => item.name))];
const result = document.querySelector(".name");

result.innerHTML = pname
  .map((item) => {
    return `<a class="dropdown-item" href="#">${item}</a>`;
  })
  .join("");

//Online Data
const url = "https://waitominuteapi.tk/faq";

const data = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const faq = data.faq;
      const alldata = [...new Set(faq.map((item) => item))];
      const allquestion = document.querySelector(".question");

      allquestion.innerHTML = alldata
        .map((item) => {
          return `
          <h1 class="text-center text-primary text-capitalize">${item.question}</h1>
          <h2 class="text-center text-danger text-capitalize">${item.answer}</h2>
          `;
        })
        .join("");
    })
    .catch((err) => console.log(err));
};

data();

const time = new Date().toLocaleString();

const currentTime = document.querySelector(".time");

currentTime.innerHTML = `<h6 class="time">${time}</h6>`;
