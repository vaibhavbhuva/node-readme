
export default function author(options, scope) {
    if (typeof scope.pkg.author === 'string') {
        return scope.pkg.author;
    } else if (typeof scope.pkg.author === 'object') {
        return `${scope.pkg.author.name} <${scope.pkg.author.email}> ${scope.pkg.author.url}`
    } else if (typeof scope.pkg.authors === 'object') {
        return scope.pkg.authors.map(author => ` - ${author.name} <${author.email}> ${author.url}`).join(' - ')
    }
}
