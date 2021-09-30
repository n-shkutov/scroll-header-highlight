'use strict';

import loaded from "./js/loaded";
import inView from "./js/inView";
import scrollTracker from "./js/scrollTracker";

const scrollHandler = () => {
    inView('.container', inV => {
        if (inV) {
            scrollTracker.init();
        } else {
            scrollTracker.end();
        }
    })
}

loaded([scrollHandler]);