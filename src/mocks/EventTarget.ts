export class EventTarget {
  listeners: any = {};

  subscribe(type: string, callback: any) {
    if (!(type in this.listeners)) {
      this.listeners[type] = [];
    }
    this.listeners[type].push(callback);
  }

  unsubscribe(type: string, callback: any) {
    this.listeners[type] = this.listeners[type].filter((cb: any) => cb !== callback);
  }

  publish(type: string, data: any) {
    if (!(type in this.listeners)) {
      return true;
    }
    const eventData = { type, data };
    const stack = this.listeners[type].slice();

    for (let i = 0, l = stack.length; i < l; i++) {
      stack[i].call(this, eventData);
    }
    return undefined;
  }

  removeEventListener(type: string, callback: any) {
    if (!(type in this.listeners)) {
      return;
    }
    const stack = this.listeners[type];
    for (let i = 0, l = stack.length; i < l; i++) {
      if (stack[i] === callback) {
        stack.splice(i, 1);
        return;
      }
    }
  }
}
