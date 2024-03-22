/**
 * A bpmn-js service that provides the actual plug-in feature.
 *
 * Checkout the bpmn-js examples to learn about its capabilities
 * and the extension points it offers:
 *
 * https://github.com/bpmn-io/bpmn-js-examples
 */
export default function ExampleBpmnJsExtension(eventBus,canvas, elementRegistry, modeling) {

  console.log(eventBus)
  console.log(canvas)
  console.log(elementRegistry)
  console.log(modeling)

  eventBus.on('shape.added', function(context) {
    var element = context.element;

    console.log('🎉 A shape was added!', element);
  });

  eventBus.on('connection.added', function(context) {
    var element = context.element;

    console.log('🎊 A connection was added!', element);
  });
}


ExampleBpmnJsExtension.$inject = [
  'eventBus',
  'canvas',
  'elementRegistry',
  'modeling'
];