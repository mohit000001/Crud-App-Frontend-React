import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Header from "./Components/Header";
import Add from "./Components/Add";
import Edit from "./Components/Edit";
import Delete from "./Components/Delete";
import List from "./Components/List";

function IndexComponent (): JSX.Element{
  return(<h1>Index Page</h1>);
}

function NotFoundComponent (): JSX.Element{
    return(<h1>Not Found</h1>);
}

export default function MainRouter() : JSX.Element {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<IndexComponent/>} /> 
                <Route path="*" element={<NotFoundComponent/>} />
                <Route path="add" element={<Add/>} />
                <Route path="edit" element={<Edit/>} />
                <Route path="list" element={<List/>} />
                <Route path="delete" element={<Delete/>} />
            </Routes>
        </BrowserRouter>
    )
}