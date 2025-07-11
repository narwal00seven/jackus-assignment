// Utility functions for Employee Directory

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
} 