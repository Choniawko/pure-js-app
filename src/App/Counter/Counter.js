export const Counter = ({ value }) => `
<div>Counter: <span id="counter">${value}</span></div>
    <button id="inc" type="button">+</button>
    <button id="dec" type="button">-</button>
`;

// const updateView = () => {
//   document.getElementById("app").innerHTML = Counter();
//   document
//     .getElementById("inc")
//     .addEventListener("click", Counter.state.increment);
//   document
//     .getElementById("dec")
//     .addEventListener("click", Counter.state.decrement);
// };
// updateView();
