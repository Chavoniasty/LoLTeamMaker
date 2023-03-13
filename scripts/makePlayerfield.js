const roles = ["top", "jug", "mid", "bot", "sup"];

function createPlayerInput() {
  for (let i = 1; i < 11; i++) {
    const inputMenu = document.getElementById("inputMenu");
    const div = document.createElement("div");
    div.classList.add("playerMenu");

    const fieldset = document.createElement("fieldset");
    fieldset.classList.add("playerWindow");



    const label = document.createElement("label");
    label.setAttribute("for", "nick");
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "nick" + i);
    input.classList.add("nickImput");
    label.appendChild(input);

    // Create ul element
    const ul = document.createElement("ul");
    ul.setAttribute("class", "pickRole")

    // Create li elements for each role

    for (let role of roles) {
      const li = document.createElement("li");
      const roleInput = document.createElement("input");
      roleInput.setAttribute("value", role);
      roleInput.setAttribute("id", role + i + "Checkbox");
      roleInput.setAttribute("type", "checkbox");
      roleInput.classList.add("player" + i + "roles", "checkbox");
      roleInput.setAttribute("onclick", "imgChanger('" + role + i + "')");
      const roleLabel = document.createElement("label");
      roleLabel.setAttribute("for", role + i + "Checkbox");
      const roleImg = document.createElement("img");
      roleImg.setAttribute("src", "icons/" + role + "Off.png");
      roleLabel.appendChild(roleInput);
      roleLabel.appendChild(roleImg);
      li.appendChild(roleLabel);
      ul.appendChild(li);
    }

    // Append elements to the fieldset

    fieldset.appendChild(label);
    fieldset.appendChild(ul);

    // Append the fieldset to the div
    div.appendChild(fieldset);

    // Append the div to the body of the HTML doc
    inputMenu.appendChild(div);
  }

  for (let teamNum = 1; teamNum < 3; teamNum++) {
    const outputMenu = document.getElementById("outputMenu");
    const div = document.createElement("div");
    div.classList.add("teamDiv")
    div.setAttribute("id", "team" + teamNum + "Div")

    const fieldset = document.createElement("fieldset");
    fieldset.classList.add("teamWindow");

    const ul = document.createElement("ul")
    ul.classList.add("finalRoles")


    for (let role of roles) {
      const li = document.createElement("li");
      const roleImg = document.createElement("img");
      roleImg.setAttribute("src", "icons/" + role + "On.png");
      li.appendChild(roleImg);
      li.setAttribute("id", "team" + teamNum + role);
      li.classList.add("noBullets")
      ul.appendChild(li);
    }

    fieldset.appendChild(ul)
    div.appendChild(fieldset)
    outputMenu.appendChild(div)

    if (teamNum === 1) {
      const buttonDiv = document.createElement("div");
      buttonDiv.classList.add("buttonDiv")
      const button = document.createElement("button");
      button.setAttribute("onclick", "rollTeams()");
      button.classList.add("button");
      button.textContent = "Generate Teams"

      buttonDiv.appendChild(button);
      outputMenu.append(buttonDiv);
    }

  }

}