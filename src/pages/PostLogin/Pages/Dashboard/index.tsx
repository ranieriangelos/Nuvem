import React from 'react';
import HeaderPostLogin from '../../Components/HeaderPostLogin';
import ListVagas from '../../ListVagas';
import Aside from '../../Components/Aside/';
import Chat from '../../Components/Chat'
import {ContentDashboard} from './style'

const Dashboard: React.FC = () =>{
    return(
     <>
      <HeaderPostLogin></HeaderPostLogin>
      <ContentDashboard style={{ display: 'grid', gridTemplateColumns: '1fr 3fr 1fr', gap: '10px' }}> 
      <Aside></Aside>
      <ListVagas/>
      <Chat></Chat>
      </ContentDashboard>
      </>
      );
  }
  
  export default Dashboard;
  