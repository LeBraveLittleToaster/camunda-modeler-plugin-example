'use strict';

import CustomContextPadProvider from './custom/CustomContextPadProvider';
import CustomPaletteProvider from './custom/CustomPaletteProvider';
import CustomReplaceMenuProvider from './custom/CustomReplaceMenuProvider';

export default function ReducedPalettePlugin(bpmnjs, contextPad, palette, create, elementFactory, spaceTool, lassoTool, handTool, globalConnect, translate, eventBus, modeling, connect, popupMenu, canvas, rules, bpmnReplace, moddle, replaceMenuProvider) {

    console.log(CustomContextPadProvider)
    var customContextPad = new CustomContextPadProvider(eventBus, contextPad, modeling, elementFactory, connect, create, popupMenu, canvas, rules, translate);
    contextPad._providers = [];
    contextPad.registerProvider(customContextPad);

    var customPalette = new CustomPaletteProvider(palette, create, elementFactory, spaceTool, lassoTool, handTool, globalConnect, translate);
    palette._providers = [];
    palette.registerProvider(customPalette);

    var customReplaceMenu = new CustomReplaceMenuProvider(popupMenu, modeling, moddle, bpmnReplace, rules, translate);
    replaceMenuProvider._popupMenu.registerProvider('bpmn-replace', customReplaceMenu);
}

ReducedPalettePlugin.$inject = [ 'bpmnjs', 'contextPad', 'palette', 'create', 'elementFactory', 'spaceTool', 'lassoTool', 'handTool', 'globalConnect', 'translate', 'eventBus', 'modeling', 'connect', 'popupMenu', 'canvas', 'rules', 'bpmnReplace', 'moddle', 'replaceMenuProvider' ];
