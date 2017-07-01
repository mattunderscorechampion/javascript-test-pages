
export function has_document() {
    if (document) {
        return true;
    }
    else {
        return false;
    }
}

export function has_window() {
    if (window) {
        return true;
    }
    else {
        return false;
    }
}

export function get_junk_from_window() {
    return window.junk
}

export function get_junk_from_document() {
    return document.junk
}
