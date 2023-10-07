function makeHeader(pathtoroot) {
  str  = '<header>';
  str += '  <div id = "dropdown">';
  str += '    <label for = "Navbar-toggle"></label>';
  str += '    <label for = "Navbar-toggle"></label>';
  str += '    <label for = "Navbar-toggle"></label>';
  str += '    <label for = "Navbar-toggle"></label>';
  str += '  </div>';
  str += '  <img src = "' + pathtoroot + 'OtherWebsiteFiles/favicon.png" alt = "Icon and Favicon for Website">';
  str += '  <h1> Nicholas Busaba\'s Website </h1>';
  str += '  <div class = "Button" id = "ThemeContainer">';
  str += '    <label for = "theme-toggle" class = "themeTextLight"> Light Theme </label>';
  str += '    <label for = "theme-toggle" class = "themeTextDark"> Dark Theme </label>';
  str += '  </div>';
  str += '</header>';

  str += '<nav id = "dropdownElements">';
  str += '  <a href = "' + pathtoroot + 'index.html"> Home </a>';
  str += '  <a href = "' + pathtoroot + 'AP%20Chemistry%20Flashcards/index.html"> 3 Sided Flashcards for Studying </a>';
  str += '  <a href = "' + pathtoroot + 'Computer%20Project%20Game/index.html"> APCSA Game Project </a>';
  str += '  <a href = "' + pathtoroot + 'English%20Trailer%20Video/index.html"> First Video Project </a>';
  str += '  <a href = "' + pathtoroot + 'Final%20History%20Project%20Video/index.html"> History Final Project </a>';
  str += '  <a href = "' + pathtoroot + 'School%20Bell%20Simulation/index.html"> School Bell Simulator for Covid </a>';
  str += '  <a href = "' + pathtoroot + 'History%20Invention%20Video/index.html"> Yarn Revolution Video </a>';
  str += '</nav>';

  document.getElementById("bootlegheader").innerHTML = str;
}

function makeFooter(PageName) {
  str  = '<p> Nicholas Busaba\'s Personal Website </p>';
  str += '<p> ' + PageName + ' </p>';
  str += '<div id = "PersonalLinks">';
  str += '  <a href = "https://github.com/Busaba-Nicholas"> <img alt = "github logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/128px-Github-desktop-logo-symbol.svg.png?20200316183539"> </a>';
  str += '  <a href = "https://www.linkedin.com/in/nicholas-buasba-9962a7252/"> <img alt = "linkedin logo" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"> </a>';
  str += '</div>';

  document.getElementsByTagName("footer")[0].innerHTML = str;
}