
const navli = document.querySelectorAll('.navigation li')
navli.forEach(li => {
    li.addEventListener('click', () => {
        navli.forEach(navli => navli.classList.remove('selected'))
        li.classList.add('selected')
        const resource = resources.find(r => r.category === li.id)
        if (resource) {
            leggtil(resource)
        }
    })
})

const leggtil = resource => {
const contentSection = document.querySelector('#content')
contentSection.innerHTML = `
    <h1>${resource.category}</h1>
    <p>${resource.text}</p>
    <ul>
        ${resource.sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join('')}
    </ul>
`
}