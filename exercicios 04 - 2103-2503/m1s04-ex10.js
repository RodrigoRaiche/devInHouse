const tags = ['html', 'head', 'body', 'div', 'h1', 'span'];


tags.filter(function (tag) {
     return tag.startsWith('h');
}).map(function(tag){
     return `<${tag}>`
}).forEach(function(tag){
     console.log(tag);
})





