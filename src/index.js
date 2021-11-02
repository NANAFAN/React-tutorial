import "bulma/css/bulma.css";
import { render } from "react-dom";
//App.jsの108行目で投げたApp関数をimport
import App from "./App";

render(<App />, document.querySelector("#content"));