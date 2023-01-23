interface Event {
  name: string;
  details: {
    action: "click" | "input" | "scroll" | "load" | string;
    meta: string;
  };
  payload?: Record<string, any>;
}

export default function eventLogger(event: Event) {
  console.log("Logging Event");
}
