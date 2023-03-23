// Обработка отправки формы form.login - form
// должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля,
//     выводи alert с предупреждением о том,
//     что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму,
//     собери значения полей в обьект, где имя поля будет именем свойства,
//     а значение поля - значением свойства.Для доступа к
//     элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль
//  и очисти значения полей формы методом reset.
const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);
function onSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("Не заповнене поле паролю або логіну(((");
  } else {
    alert("дякую за реєстрацію!");
  }
  const data = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  console.log(data);
  evt.currentTarget.reset();
}

//#2

const loginForm = document.querySelector(".login-form");
const dataObjForm = {};

function handerLoginForm(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("Заповніть будь ласка всі поля форми !!!");
    return;
  } else {
    alert("дякую за реєстрацію!");
  }
  dataObjForm.email = email.value;
  dataObjForm.password = password.value;
  console.log(dataObjForm);
  e.currentTarget.reset();
}

loginForm.addEventListener("submit", handerLoginForm);
