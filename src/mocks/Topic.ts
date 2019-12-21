import { EventTarget } from "./EventTarget";

const Topic = new EventTarget();

export const topicFactory = () => (key: string) => ({
  subscribe(cb: any) {
    Topic.subscribe(key, cb);
  },
  publish(data?: any) {
    Topic.publish(key, data);
  },
});
