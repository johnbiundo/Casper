var newLine,el,title,link,ToC="<nav role='navigation' class='table-of-contents'><h2>Table of Contents</h2><ul>";$("article.post-full h2").each(function(){el=$(this),title=el.text().replace(/# ?/g,""),link="#"+el.attr("id"),ToC+=newLine="<li><a href='"+link+"'>"+title+"</a></li>"}),ToC+="</ul></nav>",$(".toc-location").prepend(ToC);
//# sourceMappingURL=toc.js.map