import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const StatCard = ({ label, value }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center flex flex-col items-center min-w-[160px]">
    <span className="text-3xl font-bold text-slate-800">{value}</span>
    <span className="text-gray-500 text-xs mt-1 uppercase tracking-wide">{label}</span>
  </div>
);

const FriendCard = ({ friend, onProfileClick }) => {
  const getStatusStyles = (status) => {
  switch (status) {
    case 'Overdue': 
      return 'bg-red-500 text-white';
    case 'Almost Due': 
      return 'bg-orange-400 text-white';
    case 'On-Track': 
    case 'Active': 
    case 'Online':
      return 'bg-[#244D3F] text-white';
    case 'In Progress':
      return 'bg-blue-500 text-white';
    case 'Inactive':
      return 'bg-gray-400 text-white';
    default: 
      return 'bg-gray-200 text-gray-700';
  }
};

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center transition-transform hover:scale-[1.02] cursor-pointer">
      <img src={friend.img} alt={friend.name} className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-slate-50" />
      <h3 className="font-bold text-slate-800 text-lg mb-0.5 cursor-pointer hover:text-[#244D3F] hover:underline" onClick={(e) => { e.stopPropagation(); onProfileClick && onProfileClick(friend); }}>{friend.name}</h3>
      <p className="text-[10px] text-gray-400 mb-3">{friend.lastSeen}</p>
      
      <div className="flex gap-1.5 mb-4">
        {friend.tags.map(tag => (
          <span key={tag} className="px-2.5 py-0.5 bg-emerald-50 text-emerald-800 text-[9px] font-bold rounded tracking-tight">
            {tag}
          </span>
        ))}
      </div>
      
      <span className={`px-5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${getStatusStyles(friend.status)}`}>
        {friend.status}
      </span>
    </div>
  );
};

export default function Home({ friendsData, onProfileClick, loading = false }) {
  if (loading) return <LoadingSpinner message="Loading home..." />;
  const normalizedData = friendsData || [];
  const totalFriends = normalizedData.length;
  
  const onTrack = normalizedData.filter(friend => 
    ['Active', 'Online', 'In Progress'].includes(friend.status)
  ).length;
  
  const needAttention = normalizedData.filter(friend => 
    ['Overdue', 'Almost Due', 'Inactive'].includes(friend.status)
  ).length;
  
  const recentInteractions = normalizedData.filter(friend => {
    const timeUnits = friend.lastSeen.split(' ');
    const amount = parseInt(timeUnits[0]);
    const unit = timeUnits[1]?.toLowerCase() || '';
    
    if (friend.lastSeen === 'Just now') return true;
    if (unit.includes('h')) return true;
    if (unit.includes('m') && amount <= 60) return true;
    if (unit.includes('d') && amount <= 30) return true;
    if (unit.includes('w') && amount === 1) return true;
    return false;
  }).length;

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-20 font-sans">
      <header className="max-w-6xl mx-auto text-center py-20 px-8">
        <h1 className="text-5xl font-extrabold text-[#111827] mb-6 tracking-tight">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed mb-10">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button className="bg-[#244D3F] hover:bg-[#1a3a32] text-white px-6 py-2.5 rounded-md flex items-center gap-2 mx-auto font-medium transition-all shadow-md active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          Add a Friend
        </button>
      </header>


      <section className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 px-8">
        <StatCard value={totalFriends} label="Total Friends" />
        <StatCard value={onTrack} label="On Track" />
        <StatCard value={needAttention} label="Need Attention" />
        <StatCard value={recentInteractions} label="Interactions This Month" />
      </section>


      <main className="max-w-6xl mx-auto px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 ml-2">Your Friends</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {normalizedData.map((friend, idx) => (
            <FriendCard key={friend.id || idx} friend={friend} onProfileClick={onProfileClick} />
          ))}
        </div>
      </main>
    </div>
  );
}