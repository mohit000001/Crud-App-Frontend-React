import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import JsonComponentLib from "./Rooms/JsonComponentLib";
import Hos from "./Rooms/Hoc";
import LifeCycle from "./Rooms/LifeCycle";
import NavigationHeader from "./Components/NavigationHeader";
import Hooks from "./Rooms/Hooks";
import ReduxExm from "./Rooms/ReduxExm";
import K from "./Rooms/k";
export default function MainRouter() {
    return (
        <BrowserRouter>
             <NavigationHeader/>
            <Routes>
                <Route path="/" element={<h1> Index Page </h1>} />
                <Route path="/hoc" element={<Hos />} />
                <Route path="/life-cycles" element={<LifeCycle />} />
                <Route path="/json-component-lib" element={<JsonComponentLib />} />
                <Route path="/hooks" element={<Hooks/>} />
                <Route path="/redux" element={<ReduxExm/>} />
                <Route path="/k" element={<K/>} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    )
}