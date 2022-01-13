import MainRouter from "./MainRouter";
import "./Styles/App.css";

export default function App(): JSX.Element {
    return (<>
        <div className="body-wrapper">
            <MainRouter />
        </div>
    </>)
}