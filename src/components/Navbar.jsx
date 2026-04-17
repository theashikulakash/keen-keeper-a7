import React from 'react';
import { ChartLine, Clock, House } from 'lucide-react';


const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between px-8 py-4 bg-white sticky top-0 z-50 shadow-sm gap-4">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-[#244D3F] cursor-pointer" onClick={() => setActiveTab('home')}>KeenKeeper</span>
      </div>
      
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setActiveTab('home')}
          className={`btn flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all ${
            activeTab === 'home' 
              ? 'bg-[#244D3F] border-none text-white' 
              : 'bg-white text-slate-600 border-slate-200 hover:border-[#244D3F] hover:text-[#244D3F]'
          }`}
        >
          <House />
          Home
        </button>
        
        <button 
          onClick={() => setActiveTab('timeline')}
          className={`btn flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all ${
            activeTab === 'timeline' 
              ? 'bg-[#244D3F] border-none text-white' 
              : 'bg-white text-slate-600 border-slate-200 hover:border-[#244D3F] hover:text-[#244D3F]'
          }`}
        >
          <Clock />
          Timeline
        </button>
        
        <button 
          onClick={() => setActiveTab('stats')}
          className={`btn flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all ${
            activeTab === 'stats' 
              ? 'bg-[#244D3F] border-none text-white' 
              : 'bg-white text-slate-600 border-slate-200 hover:border-[#244D3F] hover:text-[#244D3F]'
          }`}
        >
          <ChartLine />
          Stats
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
