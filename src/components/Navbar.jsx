import React from 'react';


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
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
          Stats
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
