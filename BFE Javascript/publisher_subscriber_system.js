function createPubSub() {
  const subscribers = {};

  function subscribe(topic, callback) {
    if (!subscribers[topic]) {
      subscribers[topic] = [];
    }
    subscribers[topic].push(callback);
    return () => {
      unsubscribe(topic, callback);
    };
  }

  function publish(topic, data) {
    if (subscribers[topic]) {
      subscribers[topic].forEach((callback) => {
        try {
          callback(data);
        } catch (error) {
          console.error(`Error executing callback: ${error.message}`);
        }
      });
    }
  }

  function unsubscribe(topic, callback) {
    if (subscribers[topic]) {
      subscribers[topic] = subscribers[topic].filter((sub) => sub !== callback);
    }
  }

  function debouncePublish(topic, data, timeout = 300) {
    if (!this.debounceTimers) {
      this.debounceTimers = {};
    }
    clearTimeout(this.debounceTimers[topic]);
    this.debounceTimers[topic] = setTimeout(() => {
      publish(topic, data);
      delete this.debounceTimers[topic];
    }, timeout);
  }
  return { subscribe, unsubscribe, publish, debouncePublish };
}

const ps = createPubSub();
const unsubscribeEmail = ps.subscribe("email", (data) => {
  console.log(`Received email: ${data.content}`);
});

ps.debouncePublish("email", { content: "Hello from debounced email!" }, 500);

// Later, you can unsubscribe:
unsubscribeEmail();
