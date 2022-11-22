function saveToStorage(storageKey, dataToSave) {
  localStorage.setItem(storageKey, JSON.stringify(dataToSave));
}

function getFromStorage(storageKey) {
  try {
    const data = localStorage.getItem(storageKey);
    return data === null ? undefined : JSON.parse(data);
  } catch (err) {
    console.warn('Cannot parse JSON from localStorage');
    return null;
  }
}

function removeItem(storageKey) {
  localStorage.removeItem(storageKey);
}

function clearData() {
  localStorage.clear();
}

export { clearData, getFromStorage, saveToStorage, removeItem };
