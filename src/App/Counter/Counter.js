export const Counter = ({ value }) => `
  <div>Counter: <span id="counter">${value}</span></div>
  <button id="inc" type="button">+</button>
  <button id="dec" type="button">-</button>
`;

export const updateView = (state) => {
  document.getElementById("inc").addEventListener("click", state.increment);
  document.getElementById("dec").addEventListener("click", state.decrement);
};
