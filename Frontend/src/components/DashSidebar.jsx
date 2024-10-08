import React from 'react'
import {Sidebar} from 'flowbite-react'
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {

  HiArrowSmRight,

} from 'react-icons/hi';
const DashSidebar = () => {

  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <Sidebar className='w-full md:w-56'>
<Sidebar.Items>
<Sidebar.ItemGroup>
  <Link to='/dashboard?tab=profile'></Link>
<Sidebar.Item active={tab==='profile'} icon={''} label={'User'} labelColor='dark'>
  Profile
</Sidebar.Item>
<Link/>
<Sidebar.Item  icon={HiArrowSmRight}  className='cursor-pointer'>
  SignOut
</Sidebar.Item>



</Sidebar.ItemGroup>




</Sidebar.Items>

  </Sidebar>
  )
}

export default DashSidebar