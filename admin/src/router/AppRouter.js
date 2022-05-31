import {Routes, Route} from 'react-router-dom'

import HomePage from '../pages/home/HomePage'
import Login from '../pages/login/Login'
import List from '../pages/list/List'
import SinglePage from '../pages/singlePage/SinglePage'
import NewPage from '../pages/newPage/NewPage'
import {userInputs, productInputs} from '../formSource'


const AppRoiter = ({setDark}) => {
  return (
    <Routes>
        <Route path='/'>
          <Route index element={<HomePage setDark={setDark}/>}/>
          <Route path='login' element={<Login/>} />
          <Route path='users'>
            <Route index element={<List type="users"/>}/>
            <Route path=":userId" element={<SinglePage/>}/>
            <Route path='new' element={<NewPage inputs={userInputs} title={"Add new User"}/>}/>
          </Route>
          <Route path='products'>
            <Route index element={<List type="products"/>}/>
            <Route path=":productId" element={<SinglePage/>}/>
            <Route path='new' element={<NewPage inputs={productInputs} title={"Add new Product"}/>}/>
          </Route>
        </Route>
    </Routes>
  )
}

export default AppRoiter