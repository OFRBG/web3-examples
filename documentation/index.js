function attachClick() {
  $(".btn").on("click", function() {
    const iframeLoad = $(this).parent()[0].children[1];

    $(iframeLoad).attr("src",$(iframeLoad).attr("data-src")).removeAttr("data-src").show(300);
    $(this).hide();
    $(this).parent().css("border", "4px var(--mono-tint2) solid");
  })
}

function setStaticCodeExample () {
  $("codesandbox").each(async function() {
    const el = $(this);
    const path = el.attr("example");

    const url = `https://raw.githubusercontent.com/${config.orgName}/${config.repoName}/${config.branch}/example-src/packages/${path}/index.js`;
    
    const data = await $.get(url);

    el.text(data.match(/{\n(.*)return.*}/s)[1].slice(0,-2));
    
    document.querySelectorAll('codesandbox').forEach(hljs.highlightBlock);
  });
}

$(document).ready(function() {
  $("aside").on("click", attachClick);
  $("aside").on("click", setStaticCodeExample);
});

window.addEventListener('exampleLoad', attachClick, false);
window.addEventListener('exampleLoad', setStaticCodeExample, false);
