import { Route, Routes } from 'react-router-dom'
import { Home } from './pages'

export const RouterApp = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    )
}
