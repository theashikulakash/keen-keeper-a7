import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-[#244D3F]">KeenKeeper</span>
      </div>
      
      <div className="flex items-center gap-4">
        <a href="#" className="btn flex items-center gap-2 px-4 py-2 bg-[#244D3F] border-none text-white rounded-md font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Home
        </a>
        <a href="#" className="btn flex items-center gap-2 px-4 py-2 bg-[#fff] text-slate-600 border-[#244D3F] hover:text-primary transition-colors font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Timeline
        </a>
        <a href="#" className="btn flex items-center gap-2 px-4 py-2 bg-[#fff] text-slate-600 border-[#244D3F] hover:text-primary transition-colors font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
          Stats
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
