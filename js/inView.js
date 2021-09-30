const inView = (selector, cb = () => { }) => {
    if (!selector) return;

    const target = document.querySelector(selector)

    let callback = (entries) => {
        entries.forEach(entry => {
            cb(entry.isIntersecting)
        });
    };

    let observer = new IntersectionObserver(callback);

    observer.observe(target);
}

export default inView;
