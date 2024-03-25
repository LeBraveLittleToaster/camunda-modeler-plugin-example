'use strict';

import inherits from 'inherits-browser';
import ReplaceMenuProvider from 'bpmn-js/lib/features/popup-menu/ReplaceMenuProvider';

function CustomReplaceMenuProvider(popupMenu, modeling, moddle, bpmnReplace, rules, translate) {
  ReplaceMenuProvider.call(this, popupMenu, modeling, moddle, bpmnReplace, rules, translate);
};

console.log(CustomReplaceMenuProvider)
console.log(ReplaceMenuProvider)
inherits(CustomReplaceMenuProvider, ReplaceMenuProvider);

CustomReplaceMenuProvider.prototype._createEntries = function(element, replaceOptions) {
  var options = ReplaceMenuProvider.prototype._createEntries.call(this, element, replaceOptions);

  options = options.filter(function(option) {
    if (option.id != "replace-with-complex-gateway") { //removes the complex gateway from morph
      return true;
    }
  });
  return options;
};

CustomReplaceMenuProvider.$inject = [ 'popupMenu', 'modeling', 'moddle', 'bpmnReplace', 'rules', 'translate' ];

export default CustomReplaceMenuProvider;