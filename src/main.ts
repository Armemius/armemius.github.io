import { mount } from "svelte";
import "@unocss/reset/eric-meyer.css";
import "virtual:uno.css";
import App from "./App.svelte";

const app = mount(App, {
  target: document.getElementById("app")!,
});

export default app;
