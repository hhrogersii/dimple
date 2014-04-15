
    // Copyright: 2014 PMSI-AlignAlytics
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"
    // Source: /src/methods/_createClass.js
    dimple._createClass = function (stringArray) {
        var i,
            returnArray = [],
            replacer = function(s) {
                var c = s.charCodeAt(0),
                    returnString = "-";
                if (c >= 65 && c <= 90) {
                    returnString = s.toLowerCase();
                }
                return returnString;
            };
        for (i = 0; i < stringArray.length; i += 1) {
            /*jslint regexp: true */
            returnArray.push("dimple-" + stringArray[i].replace(/[^a-z0-9]/g, replacer));
            /*jslint regexp: false */
        }
        return returnArray.join(" ");
    };