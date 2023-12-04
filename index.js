const className = "greeting";
const user = { firstName: "Dineshkumar", lastName: "Ramaraj" };
const fullName = (user) => user.firstName + " " + user.lastName;
const element = (
  <div>
    <h1 className={className}> Hello {fullName(user)}! </h1>
    <p> Nice to meet you!</p>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
