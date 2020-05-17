const indexedDB = window.indexedDB;

let db;
const request = indexedDB.open("budgetTracker", 1);