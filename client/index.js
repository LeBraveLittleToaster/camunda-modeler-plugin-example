/** 
 * NOTE: This is specifically a registration of a **bpmn-js** extension. If you would like to create another type of plugin 
 * (say a client extension), the structure of the plugin and the function to register it will be slightly different.
 * 
 * Please refer to:
 * Examples plugins - https://github.com/camunda/camunda-modeler-plugins
 * Plugin documentation - https://docs.camunda.io/docs/components/modeler/desktop-modeler/plugins/
 */

import {
  registerBpmnJSPlugin,
  registerBpmnJSModdleExtension,
  registerClientExtension
} from 'camunda-modeler-plugin-helpers';

import QualityAssurance from '../resources/qa.json';

// Register a moddle extension for bpmn-js
registerBpmnJSModdleExtension(QualityAssurance);

import BpmnExtensionModule from './bpmn-js-extension';

registerBpmnJSPlugin(BpmnExtensionModule);

import TEST from './test'
registerBpmnJSPlugin(TEST);

