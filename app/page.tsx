'use client'

import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBox, faDollarSign, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


// کامپوننت سایدبار
interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed top-0 left-0 z-10 w-64 h-full bg-gray-800 text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:block`}>
      <div className="flex justify-between p-4 border-b border-gray-700">
        <span className="text-xl font-semibold">مدیریت فروشگاه</span>
        <button onClick={toggleSidebar} className="md:hidden">
        <FontAwesomeIcon icon={faBars} className="fa-fw" />
        </button>
      </div>
      <ul className="p-4 space-y-4">
        <li>
          <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
            <FontAwesomeIcon icon={faShoppingCart} className="fa-fw" />
            <span>سفارشات</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
            <FontAwesomeIcon icon={faBox} className="fa-fw" />
            <span>موجودی کالا</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
            <FontAwesomeIcon icon={faDollarSign} className="fa-fw" />
            <span>فروش</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
            <FontAwesomeIcon icon={faUser} className="fa-fw" />
            <span>مشتریان</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

// کامپوننت داشبورد
const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex">
      {/* سایدبار */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* محتوای اصلی داشبورد */}
      <div className="flex-1 p-6 ml-0 md:ml-64 transition-all duration-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* کارت‌های داشبورد */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-3xl text-green-500 mb-4">
            <FontAwesomeIcon icon={faShoppingCart} className="fa-fw" />
            </div>
            <h2 className="text-lg font-semibold mb-2">تعداد سفارشات</h2>
            <p className="text-2xl font-bold">150</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-3xl text-blue-500 mb-4">
              <FontAwesomeIcon icon={faBox} className="fa-fw" />
            </div>
            <h2 className="text-lg font-semibold mb-2">موجودی کالا</h2>
            <p className="text-2xl font-bold">30 محصول</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-3xl text-yellow-500 mb-4">
            <FontAwesomeIcon icon={faDollarSign} className="fa-fw" />
            </div>
            <h2 className="text-lg font-semibold mb-2">فروش امروز</h2>
            <p className="text-2xl font-bold">8,000,000 تومان</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-3xl text-purple-500 mb-4">
            <FontAwesomeIcon icon={faUser} className="fa-fw" />
            </div>
            <h2 className="text-lg font-semibold mb-2">مشتریان جدید</h2>
            <p className="text-2xl font-bold">25 نفر</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
