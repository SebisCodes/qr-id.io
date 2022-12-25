
window.actualTheme = {};

window.actualTheme.primary = "#007bff";
window.actualTheme.secondary = "#5A6169";
window.actualTheme.success = "#17c671";
window.actualTheme.info = "#00b8d8";
window.actualTheme.warning = "#ffb400";
window.actualTheme.danger = "#c4183c";
window.actualTheme.light = "#e9ecef";
window.actualTheme.dark = "#212529";

window.formCardWidth = 576;
window.animationDuration = 400;

function callSite(url, callback)
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(this.responseText);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
function callSite(url, callback, id)
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(this.responseText, id);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
function callSite(url, callback, id, id2)
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(this.responseText, id, id2);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
function setFooter() {
    var windowHeight = window.innerHeight;
    var headerHeight = document.getElementById("main-header") ? document.getElementById("main-header").offsetHeight : 0;
    var contentHeight = document.getElementById("page-content") ? document.getElementById("page-content").offsetHeight : 0;
    var footerHeight = document.getElementById("main-footer") ? document.getElementById("main-footer").offsetHeight : 0;
    var emptyDiv = windowHeight-headerHeight-contentHeight-footerHeight;
    if (emptyDiv < 0) emptyDiv = 0;
    if (document.getElementById("placeholder-div"))
      document.getElementById("placeholder-div").setAttribute("style","height:"+emptyDiv+"px;");
}
function escapeHTML(text) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}
function animateToId(id) {
    var position = $("#"+id).offset().top;
    $("body, html").animate({
        scrollTop: position
    }, 750 );
  
}

function acceptCookies() {
  var now = new Date();
  var lifetime = now.getTime(); 
  var deleteCookie = lifetime + 2592000000;
     
  now.setTime(deleteCookie);
  var enddate = now.toUTCString();
     
  document.cookie = "acceptCookies=set;path=/;expires=" + enddate;
  document.getElementById("cookie-popup").classList.add("hidden");
}

var siteHelpShown = false;
function showHideSiteHelp() {
    if (siteHelpShown) {
        siteHelpShown = false;
        $(".siteHelpContainer").hide(animationDuration);
        var elements = document.getElementsByName('showHideSiteHelp')
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = "Show Help";
        }
    } else {
        siteHelpShown = true;
        $(".siteHelpContainer").show(animationDuration);
        var elements = document.getElementsByName('showHideSiteHelp')
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = "Hide Help";
        }
    }
}
/* Show/Hide Label:
  <label for="" onclick="showHideSiteHelp()" style="cursor:pointer;"><i class="fas text-primary fa-info-circle"></i></label> <a name="showHideSiteHelp" href="javascript:void(0)" onclick="showHideSiteHelp()">Show help</a>
*/
