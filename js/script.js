var state = {
    color: '#6a9fb5',
    customRuleIndex: -1
}

function changeColor(e) {
    // Get a random paster color
    var colors = ['#90a959', '#75b5aa', '#aa759f', '#6a9fb5', '#8f5536', '#202020', '#ac4142', '#d28445'];
    var random = Math.floor((Math.random() * (colors.length- 1)) + 1);
    state.color = colors[random];

    // Get a reference to the stylesheet
    var sheet = getStyleSheet('style');
    if(!sheet) return;

    // Clear previous rules
    if(state.customRuleIndex < 0) 
        state.customRuleIndex = sheet.cssRules.length;
    else {
        if(sheet.deleteRule) {
            sheet.deleteRule(state.customRuleIndex);
            sheet.deleteRule(state.customRuleIndex);
            sheet.deleteRule(state.customRuleIndex);
            sheet.deleteRule(state.customRuleIndex);
        }
        else if(sheet.removeRule) { // IE
            sheet.removeRule(state.customRuleIndex);
            sheet.removeRule(state.customRuleIndex);
            sheet.deleteRule(state.customRuleIndex);
            sheet.deleteRule(state.customRuleIndex);
        }
    }

    // Update/Add rule
    sheet.insertRule('#sidebar { background-color: ' + state.color + '; }', state.customRuleIndex);
    sheet.insertRule('#sidebar .social i:hover { color: ' + state.color + '; }', state.customRuleIndex + 1);
    sheet.insertRule('#content .page-title { color:' + state.color + '; }', state.customRuleIndex + 2);
    sheet.insertRule('#content a { color:' + state.color + '; }', state.customRuleIndex + 3);
}

/**
 * Find a stylesheet by title
 * @param title, the stylesheet title
 * @return the stylesheet
 */
function getStyleSheet(title) {
  for(var i=0; i<document.styleSheets.length; i++) {
    var sheet = document.styleSheets[i];
    if(sheet.title == title)
      return sheet;
  }
}