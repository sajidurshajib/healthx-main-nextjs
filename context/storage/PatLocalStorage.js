export const PatGetStorage = (key) => {
    if (typeof window !== 'undefined') {
        let data = localStorage.getItem(key)

        if (data) {
            return data
        } else {
            return false
        }
    }
}

export const PatSetStorage = (key, value) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value))
    }
}

export const PatDefStorage = (key, def) => {
    if (typeof window !== 'undefined') {
        if (PatGetStorage(key) === false) {
            PatSetStorage(key, def)
        }
        return JSON.parse(PatGetStorage(key))
    }
}
