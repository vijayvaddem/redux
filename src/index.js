import { compose, pipe } from "lodash/fp";

let input = " I Like Javascript ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrapInDiv);
console.log(transform(input));
