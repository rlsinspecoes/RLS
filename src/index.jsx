import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";

const divDoIndex = document.getElementById("root");
const root = createRoot(divDoIndex);

root.render(
    <HashRouter>
        <App />
    </HashRouter>
);
