var $ = require('jquery');

$(document).ready(function() {
  // Email obfuscator script 2.1 by Tim Williams, University of Arizona
  // Random encryption key feature by Andrew Moulden, Site Engineering Ltd
  // This code is freeware provided these four comment lines remain intact
  // A wizard to generate this code is at http://www.jottings.com/obfuscator/
  coded = "yiUMuU@OYY.ebp";
  key = "Yo4cuDREkSA20BXbgeZ1mNiJQ6nCdPzjsIpKV9L5OHTvlwyqt73rahGFxW8MUf";
  shift=coded.length;
  link="";
  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i);
      link += (ltr);
    }
    else {
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length;
      link += (key.charAt(ltr));
    }
  }

  var href = $('#contact-button').attr('href');
  var onclick = "javascript:window.location='"+href.replace('EMAIL_ADDRESS', link)+"';";
  $('#contact-button').attr('onclick', onclick);
});
