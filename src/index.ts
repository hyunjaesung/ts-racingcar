import "./style.css";
import { Application } from "@/Application";

const application = new Application({
  startButtonSelector: "#startBtn",
  carCountSelector: "#carCount",
  roundCountSelector: "#roundCount",
  roundResultSelector: "#roundResult",
});

application.init();
