import {home} from "./src/pages/home/home";
import {achievements} from "./src/pages/achievements/achievements";
import {skills_routing} from "./src/pages/skills/skills_routing";
import {not_found} from "./src/pages/404";
import {achievements_routing} from "./src/pages/achievements/achievements_routing";

routing();

function routing() {
    let newPath :string = window.location.pathname;

    switch (true) {
        case newPath === '/home':
            document.querySelector('#page').innerHTML = home()
            break;
        case newPath.startsWith('/contact'):
            //document.body.innerHTML = contact()
            break;
        case newPath.startsWith('/skills'):
            document.querySelector('#page').innerHTML = skills_routing(newPath.split('/skills')[1])
            break;
        case newPath.startsWith('/achievements'):
            document.querySelector('#page').innerHTML = achievements_routing(newPath.split('/achievements')[1])
            break;
        default:
            document.querySelector('#page').innerHTML = not_found()
            break;
    }
}