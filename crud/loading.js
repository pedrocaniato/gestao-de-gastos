function showLoading() {
    const div = document.createElement("div");
    div.classList.add("loading", "centralize");

    // Criação do spinner do Bootstrap
    const spinner = document.createElement("div");
    spinner.classList.add("spinner-border");
    spinner.setAttribute("role", "status");

    const spinnerLabel = document.createElement("span");
    spinnerLabel.classList.add("sr-only");
    spinnerLabel.innerText = "Carregando...";

    spinner.appendChild(spinnerLabel);
    div.appendChild(spinner); // Adiciona o spinner ao div

    const label = document.createElement("label");
    label.innerText = "Carregando...";
    div.appendChild(label); // Adiciona o texto "Carregando..."

    document.body.appendChild(div);
}

function hideLoading() {
    const loadings = document.getElementsByClassName("loading");
    if (loadings.length) {
        loadings[0].remove();
    }
}
