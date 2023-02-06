import { log_msg as log } from './util.js'
import TabApp from "../tab_app/main.js";

let module_name = 'spend_xp';

export async function init () {
    log(module_name, 'Initializing');
    await loadTemplates([
        "modules/ffg-star-wars-enhancements/templates/tab_app/nav-tabs.html",
        "modules/ffg-star-wars-enhancements/templates/tab_app/nav-buttons.html",
    ]);
    // initialize settings here as needed

    log(module_name, 'Initialized');
}

export async function spend_xp() {
    let steps = [
        {
            "index": 0,
            "title": "basic"
        },
        {
            "index": 1,
            "title": "one"
        },
        {
            "index": 2,
            "title": "two"
        }
    ];
  new TabApp(steps).render(true);
}

