"use strict";var e=require("react"),t=require("@tanstack/react-query");exports.Button=function(r){var n=t.useQueryClient();return console.log("Button props =>",r),e.createElement("button",{onClick:function(){console.log("QUERY CACHE FROM MODULE",n.getQueryCache())}},"Dit is een test knop")};
//# sourceMappingURL=index.js.map
