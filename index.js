// index.js
import moment from 'moment';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
console.log("Hello from JavaScript!");
console.log(moment().startOf('day').fromNow());
var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);