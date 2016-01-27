// Generated by CoffeeScript 1.10.0
(function() {
  var CookieWarningDirective, module, template;

  template = "<cookie-warning>\n    <div class=\"center\">\n        <div class=\"text\">\n            <p class=\"title\">\n                Our site uses cookies, which our Oompa Loompas munch on to keep our site running.\n            </p>\n            <p>\n                Our lawyer, who is one tough cookie, and is himself obsessed with cookies, wants you\n                to know that Taiga uses cookies. He's a simple-minded man, and requires obvious\n                announcements like this. So here it is: our cookie policy, which you can read more\n                about by <a target=\"_blank\" href=\"{{::privacyPolicyUrl }}\">clicking here</a> is best\n                summarized by the Cookie Monster himself: \"C is for Cookie and Cookie is for me.\"\n            </p>\n        </div>\n        <a href=\"\" title=\"close\" class=\"close\"><span class=\"icon icon-delete\"></span></a>\n    </div>\n</cookie-warning>";

  CookieWarningDirective = function($compile, $config) {
    var getCookie, link, setCookie;
    setCookie = function(cname, cvalue, exdays) {
      var d, expires;
      d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      expires = "expires=" + d.toUTCString();
      return document.cookie = cname + "=" + cvalue + "; " + expires;
    };
    getCookie = function(cname) {
      var c, ca, i, len, name;
      name = cname + "=";
      ca = document.cookie.split(';');
      for (i = 0, len = ca.length; i < len; i++) {
        c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) !== -1) {
          return c.substring(name.length, c.length);
        }
      }
    };
    link = function($scope, $el, $attrs) {
      var cookieMsg;
      $scope.privacyPolicyUrl = $config.get("privacyPolicyUrl");
      cookieMsg = $compile($(template))($scope);
      $el.append(cookieMsg);
      if (getCookie('cookieConsent') !== '1') {
        cookieMsg.show();
      }
      return $el.find('.close').on('click', function(e) {
        e.preventDefault();
        cookieMsg.fadeOut('fast');
        return setCookie('cookieConsent', 1, 730);
      });
    };
    return {
      restrict: "E",
      link: link
    };
  };

  module = angular.module('cookieWarningPlugin', []);

  module.directive("body", ["$compile", "$tgConfig", CookieWarningDirective]);

}).call(this);
