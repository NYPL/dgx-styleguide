var hasTooltips = document.querySelectorAll("[data-attribute='has-tooltip']");
Array.prototype.forEach.call(hasTooltips, function(el, i){
  var tooltip = el.previousElementSibling;
  el.addEventListener("mouseover", function() {
    if (tooltip.classList)
      tooltip.classList.add("show-tooltip");
    else
      tooltip.className += ' ' + className;
  });

  el.addEventListener("mouseout", function() {
    if (tooltip.classList)
      tooltip.classList.remove("show-tooltip");
    else
      tooltip.className = tooltip.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  });
});