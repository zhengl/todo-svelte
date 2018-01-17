const ENTER_KEY = 13;

export default function enter(node, callback) {
  function onEnter(event) {
    if (event.which === ENTER_KEY) {
      callback.call(this, event);
    }
  }

  node.addEventListener('keydown', onEnter);

  return {
    teardown() {
      node.removeEventListener('keydown', onEnter);
    }
  }
};
