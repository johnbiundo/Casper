var ToC =
    "<nav role='navigation' class='table-of-contents'>" +
    '<h2>Table of Contents</h2>' +
    '<ul>';

var newLine, el, title, link;

$('article.post-full h2').each(function() {
    el = $(this);
    title = el.text().replace(/# ?/g, '');
    link = '#' + el.attr('id');

    newLine = '<li>' + "<a href='" + link + "'>" + title + '</a>' + '</li>';

    ToC += newLine;
});

ToC += '</ul>' + '</nav>';

$('.toc-location').prepend(ToC);
