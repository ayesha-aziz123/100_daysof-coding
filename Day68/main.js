"use strict";
//  ================== TUPLES ======================
Object.defineProperty(exports, "__esModule", { value: true });
let article = [123, "Alice", true];
article = [12, "Title two", false];
console.log(article);
const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);
