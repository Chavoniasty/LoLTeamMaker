function createPlayersFieldsets(){
  for(let i = 1; i < 11; i++){
    const inputMenu = document.getElementById("inputMenu");
    const div = document.createElement("div");
    div.classList.add("playerMenu");

    const fieldset = document.createElement("fieldset");
    fieldset.classList.add("playerWindow");

    const legend = document.createElement("legend");
    legend.textContent = "Player" + i;

    const label = document.createElement("label");
    label.setAttribute("for", "nick");
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "nick" + i);
    input.classList.add("nickImput");
    label.appendChild(input);
      
        // Create ul element
    const ul = document.createElement("ul");
      
        // Create li elements for each role
    const roles = ["top", "jug", "mid", "bot", "sup"];
    for (let role of roles) {
      const li = document.createElement("li");  
      const roleLabel = document.createElement("label");
      roleLabel.setAttribute("for", role + "Checkbox");
      const roleInput = document.createElement("input");
      roleInput.setAttribute("value", role);
      roleInput.setAttribute("id", role + i + "Checkbox");
      roleInput.setAttribute("type", "checkbox");
      roleInput.classList.add("player" + i + "roles", "checkbox");  
      roleInput.setAttribute("onclick", "imgChanger('" + role + i + "')");
      const roleImg = document.createElement("img");
      roleImg.setAttribute("src", "icons/" + role + "Off.png");
      roleLabel.appendChild(roleInput);
      roleLabel.appendChild(roleImg);
      li.appendChild(roleLabel);
      ul.appendChild(li);
    }

    // Append elements to the fieldset
    fieldset.appendChild(legend);
    fieldset.appendChild(label);
    fieldset.appendChild(ul);

    // Append the fieldset to the div
    div.appendChild(fieldset);

    // Append the div to the body of the HTML doc
    inputMenu.appendChild(div);
    }
}