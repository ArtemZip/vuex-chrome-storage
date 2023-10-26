
class ChromeStorage {
    storage

    constructor(storage) {
        this.storage = storage
    }

    getItem(key) {
        return this.storage.get(key).then(value => value[key]);
    }
    
    setItem(key, data) {
        return this.storage.set({ [key]: data }).then(() => data)
    }

    removeItem(key) {
        return this.storage.remove(key)
    }

    clear() {
        return this.storage.clear()
    }

    length() {
        return this.storage.getBytesInUse()
    }

    key(keyIndex) {
        return this.storage.get().then(value => Object.keys(value)[keyIndex])
    }
}

export const ChromeSyncStorage = new ChromeStorage(chrome.storage.sync);
export const ChromeLocalStorage = new ChromeStorage(chrome.storage.local);