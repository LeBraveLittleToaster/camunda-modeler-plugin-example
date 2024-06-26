'use strict';

import inherits from 'inherits-browser';

import ContextPadProvider from 'bpmn-js/lib/features/context-pad/ContextPadProvider';

var isAny = require('bpmn-js/lib/features/modeling/util/ModelingUtil').isAny;

import {assign, bind} from 'lodash';

function CustomContextPadProvider(eventBus, contextPad, modeling, elementFactory, connect, create, popupMenu, canvas, rules, translate) {

  ContextPadProvider.call(this, eventBus, contextPad, modeling, elementFactory, connect, create, popupMenu, canvas, rules, translate);

  var cached = bind(this.getContextPadEntries, this);

  this.getContextPadEntries = function(element) {
    var actions = cached(element);

    var businessObject = element.businessObject;

    function startConnect(event, element, autoActivate) {
      connect.start(event, element, autoActivate);
    }

    // remove any actions if you want here

    return actions;
  };
}
console.log(ContextPadProvider)
console.log(CustomContextPadProvider)

inherits(CustomContextPadProvider, ContextPadProvider);

CustomContextPadProvider.$inject = [ 'eventBus', 'contextPad', 'modeling', 'elementFactory', 'connect', 'create', 'popupMenu', 'canvas', 'rules', 'translate' ];

export default CustomContextPadProvider;