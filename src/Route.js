import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './container/Login'
import Dashboard from './container/Dashboard'
import Profile from './container/Profile'
import Chat from './container/Chat'
import Settings from "./container/Setting";



export default function Router(){
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />}/>

    <Route path="dashboard">

    <Route  index={true}  element={<Dashboard />}/>
    <Route path="chat" index={false}  element={<Chat />} />
    <Route path="profile" index={false}   element={<Profile />} />
    <Route path="setting" index={false}   element={<Settings />} />


      </Route>
      </Routes>
</BrowserRouter>
  )
}