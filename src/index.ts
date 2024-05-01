import "./style.css";
import { Application } from "@/Application";
import { RaceDomSelector } from "@/view/selector";

const application = new Application({
  selectors: RaceDomSelector,
});

application.start();
