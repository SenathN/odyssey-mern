import React from 'react';

// require('dotenv').config()
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { CreateTicket } from "./components/ticket-add.component";
import { TicketList } from './components/ticket-list.component';

import { CusTicketList } from './components/custicket-list.component';
import { CreateCusTicket } from './components/custicket-add.component';

import { TourPackageList } from './components/tourpackage-list.component';
import { CreateTour } from './components/tourpackage-add.component';
import { TourList } from './components/adtourpackage.list.component';

import { InquiryList } from './components/inquiry-list.component';
import { CreateInquiry } from './components/inquiry-add.component';

import { GuideList } from './components/guide-list.component';
import { CreateGuide } from './components/guide-add.component';
import { GuidePackList } from './components/guidePack-list.component';

import { SpaceProviderList } from './components/spaceProvider-list.component';
import { CreateSpaceProvider } from './components/spaceProvider-add.component';

import { SpaceList } from './components/space-list.component';
import { CreateSpace } from './components/space-add.component';

import { AdInquiryList } from './components/adInquiry-list.component';
import { GuidePackAdminList } from './components/guidePackAdmin-list.component';

import { UserList } from './components/user-list.component';
import { CreateUser } from './components/user-add.component';

import CreateGuidePackage from './components/guidePackAdmin-add.component';
import Layout from './features/Layout';
import Home from './features/Home';
import SignUp from './features/SignUp';
import Login from './features/Login';
import DashLayout from './features/DashLayout'
import DashBoard from './features/DashBoard'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path='/home' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<Login />} />

            <Route path='dashboard' element={<DashLayout />}>
              <Route index element={<DashBoard />} />
              <Route path='spaces' element={<SpaceList />} />
              <Route path="spaceProvider" element={<SpaceProviderList />} />
            </Route>
            
            <Route exact path="/createTicket" element={<CreateTicket />} />
            <Route exact path="/ticket" element={<TicketList />} />

            <Route exact path="/createCustomerTicket" element={<CreateCusTicket />} />
            <Route exact path="/customerTicket" element={<CusTicketList />} />

            <Route exact path="/tour" element={<TourPackageList />} />
            <Route exact path="/createTour" element={<CreateTour />} />

            <Route exact path="/adTourPackageList" element={<TourList />} />

            <Route exact path="/inquiry" element={<InquiryList />} />
            <Route exact path="/createInquiry" element={<CreateInquiry />} />

            <Route exact path="/spaceProvider" element={<SpaceProviderList />} />
            <Route exact path="/createSpaceProvider" element={<CreateSpaceProvider />} />

            <Route exact path="/space" element={<SpaceList />} />
            <Route exact path="/createSpace" element={<CreateSpace />} />

            <Route exact path="/adInquiry" element={<AdInquiryList />} />

            <Route exact path="/guide" element={<GuideList />} />
            <Route exact path="/createGuide" element={<CreateGuide />} />
            <Route exact path="/guidePack" element={<GuidePackList />} />

            <Route exact path="/guidePackAdmin" element={<GuidePackAdminList />} />
            <Route exact path="/createGuidePack" element={<CreateGuidePackage />} />

            <Route exact path="/user" element={<UserList />} />
            <Route exact path="/createUser" element={<CreateUser />} />
          </Route>
        </Routes>
      </Router>

    </div>
  );

}

export default App;
