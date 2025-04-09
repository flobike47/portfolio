import "./src/components/header.ts";
import {header} from "./src/components/header";
import {footer} from "./src/components/footer";
import {breadcrumb} from "./src/components/breadcrumb";


const headerElement = document.querySelector('#header');
if (headerElement) {
    headerElement.innerHTML = header();
}
const path = window.location.pathname;
const breadcrumbHTML = breadcrumb(path);

const breadcrumbContainer = document.getElementById('breadcrumb-container');

if (breadcrumbContainer) {
    breadcrumbContainer.innerHTML = breadcrumbHTML;
} else {
    console.error('Breadcrumb container not found'); // Ajoutez cette ligne pour vérifier si l'élément existe
}
const footerElement = document.querySelector('#footer');
if (footerElement) {
    footerElement.innerHTML = footer();
}

const githubRedirection = document.querySelector('#github-redirection');
if (githubRedirection) {
    githubRedirection.addEventListener('click', () => {
        window.open(
            'https://github.com/flobike47',
            '_blank'
        );
    });
}

const linkedInRedirection = document.querySelector('#LinkedIn-redirection');
if (linkedInRedirection) {
    linkedInRedirection.addEventListener('click', () => {
        window.open(
            'https://github.com/flobike47',
            '_blank'
        );
    });
}

export function decodeAllEncoded(text) {
    return decodeURIComponent(text);
}