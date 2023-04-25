import { Route, Routes } from 'react-router-dom';
import WeddingInvitation from './components/WeddingInvitation';
// import GuestRoutes from './components/GuestRoutes';

function App() {
  
  //JSX
  return (
    <div className={`app__global-container`}>
      <Routes>
        <Route path='/invitacion/:nombreInvitado' element={<WeddingInvitation />}/>
      </Routes>
    </div>
  )
}

export default App
