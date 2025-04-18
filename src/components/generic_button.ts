
export function generic_button(title: string, path:string) : string {
    return `
    <a href="${path}" class="inline-block text-base bg-secondary-color hover:bg-emerald-400 font-bold py-2 px-4 rounded-lg mr-5 my-5 text-center transition duration-300 ease-in-out text-white">
        ${title}
    </a>
    `

}