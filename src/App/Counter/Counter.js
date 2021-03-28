export const Counter = ({ counter }) => `
  <div>Counter: <span id="counter">${counter}</span></div>
  <button id="inc" type="button">+</button>
  <button id="dec" type="button">-</button>
`;

export const updateView = (state) => {
  document.getElementById("inc").addEventListener("click", state.increment);
  document.getElementById("dec").addEventListener("click", state.decrement);
};
