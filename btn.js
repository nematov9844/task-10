const root = document.querySelector(".root");
const buttonsContainer = document.querySelector(".buttons-container");
const data = [
  { id: 1, title: "Title 1" },
  { id: 2, title: "Title 2" },
  { id: 3, title: "Title 3" },
];

function renderButtons() {
  buttonsContainer.innerHTML = data
    .map(
      (item) => `
        <div class="button-item">
            <button data-id="${item.id}" class="py-1 px-3 bg-blue-500 rounded-md font-bold text-white mx-1">
                ${item.title}
            </button>
        </div>
    `
    )
    .join("");

  buttonsContainer.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", (e) => {
      buttonsContainer.querySelectorAll("button").forEach((btn) => {
        btn.classList.remove("border-b-4", "border-black");
      });
      e.target.classList.add("border-b-4", "border-black");

      const id = parseInt(e.target.getAttribute("data-id"));
      render(id);
    });
  });

  buttonsContainer
    .querySelector("button")
    .classList.add("border-b-4", "border-black");
}

function render(id) {
  if (id) {
    root.innerHTML = data
      .filter((item) => item.id === id)
      .map((item) => `<h1>${item.title}</h1>`)
      .join("");
  } else {
    root.innerHTML = `<h1>${data[0].title}</h1>`;
  }
}

render();
renderButtons();
