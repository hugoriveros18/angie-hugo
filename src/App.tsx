import { Route, Routes } from 'react-router-dom';
import WeddingInvitation from './components/WeddingInvitation';
import WeddingParticipation from './components/WeddingParticipation';
// import GuestRoutes from './components/GuestRoutes';

function App() {
  
  //JSX
  return (
    <div className={`app__global-container`}>
      <Routes>
        <Route path='/invitacion/:nombreInvitado' element={<WeddingInvitation />}/>
        <Route path='/participacion/:nombreInvitado' element={<WeddingParticipation />}/>
        <Route path='/' element={<WeddingInvitation />}/>
      </Routes>
    </div>
  )
}

export default App
