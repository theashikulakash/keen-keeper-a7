import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-16 px-8 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4 tracking-tight">KeenKeeper</h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-sm">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        
        <div className="mb-8">
          <h3 className="text-sm font-semibold mb-4 text-slate-200">Social Links</h3>
          <div className="flex justify-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-slate-500 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-slate-500 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-slate-500 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
            </a>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-between items-center pt-8 border-t border-slate-700 text-xs text-slate-400">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
