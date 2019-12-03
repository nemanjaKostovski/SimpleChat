import { Dashboard } from "./layouts/dashboard";

const body = document.querySelector('body');
let dashboard = new Dashboard();
body.appendChild(dashboard.getNode());