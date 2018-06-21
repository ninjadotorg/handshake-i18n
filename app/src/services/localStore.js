class LocalStore {
  static save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  }
  static get(key) {
    const data = localStorage.getItem(key);
    if (data) {
      if (data === 'undefined') {
        LocalStore.remove(key);
        return false;
      }
      return JSON.parse(data);
    }
    return false;
  }
  static remove(key) {
    localStorage.removeItem(key);
    return true;
  }
}

export default LocalStore;
