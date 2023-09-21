import t from"react";import{useQueryClient as o}from"@tanstack/react-query";var e=function(e){var r=o();return console.log("Button props =>",e),t.createElement("button",{onClick:function(){console.log("QUERY CACHE FROM MODULE",r.getQueryCache())}},"Dit is een test knop")};export{e as Button};
//# sourceMappingURL=index.js.map
