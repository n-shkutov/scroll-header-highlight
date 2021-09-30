const loaded = (fnArray = []) => {
    if (!fnArray.length) return;

    window.addEventListener('DOMContentLoaded', (event) => {
        fnArray.forEach(fn => fn());
    });
}

export default loaded;