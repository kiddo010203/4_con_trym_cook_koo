import { Outlet } from 'react-router-dom';
import React from 'react';
import AdminHeader from './AdminHeader';
const AdminLayout = () => {
    return (
    <>
        <AdminHeader />
        <Outlet />
        {/* <Footer /> */}
    </>
    );
};


export default AdminLayout;