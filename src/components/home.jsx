import React from 'react';

const FRIENDS_DATA = [
  { "id": 1, "name": "Roxcy", "lastSeen": "3d ago", "tags": ["WORK"], "status": "Almost Due", "img": "https://i.pravatar.cc/150?u=1" },
  { "id": 2, "name": "Sarah Chen", "lastSeen": "1h ago", "tags": ["PERSONAL"], "status": "Active", "img": "https://i.pravatar.cc/150?u=2" },
  { "id": 3, "name": "Marcus Thorne", "lastSeen": "5d ago", "tags": ["WORK", "URGENT"], "status": "Overdue", "img": "https://i.pravatar.cc/150?u=3" },
  { "id": 4, "name": "Amina Jallow", "lastSeen": "Just now", "tags": ["FAMILY"], "status": "Online", "img": "https://i.pravatar.cc/150?u=4" },
  { "id": 5, "name": "Leo Rossi", "lastSeen": "2w ago", "tags": ["OLD SCHOOL"], "status": "Inactive", "img": "https://i.pravatar.cc/150?u=5" },
  { "id": 6, "name": "Elena Vance", "lastSeen": "4h ago", "tags": ["WORK"], "status": "In Progress", "img": "https://i.pravatar.cc/150?u=6" },
  { "id": 7, "name": "Jordan Smith", "lastSeen": "1d ago", "tags": ["GYM"], "status": "Almost Due", "img": "https://i.pravatar.cc/150?u=7" },
  { "id": 8, "name": "Priya Sharma", "lastSeen": "30m ago", "tags": ["WORK"], "status": "Active", "img": "https://i.pravatar.cc/150?u=8" },
  { "id": 9, "name": "Kevin Zhang", "lastSeen": "6d ago", "tags": ["PROJECT X"], "status": "Overdue", "img": "https://i.pravatar.cc/150?u=9" },
  { "id": 10, "name": "Sofia Garsia", "lastSeen": "2d ago", "tags": ["PERSONAL"], "status": "Almost Due", "img": "https://i.pravatar.cc/150?u=10" },
  { "id": 11, "name": "David Miller", "lastSeen": "1w ago", "tags": ["WORK"], "status": "Inactive", "img": "https://i.pravatar.cc/150?u=11" },
  { "id": 12, "name": "Chloe Bennett", "lastSeen": "3h ago", "tags": ["TRAVEL"], "status": "Active", "img": "https://i.pravatar.cc/150?u=12" },
  { "id": 13, "name": "Hassan Ali", "lastSeen": "5m ago", "tags": ["WORK", "TECH"], "status": "Online", "img": "https://i.pravatar.cc/150?u=13" },
  { "id": 14, "name": "Maya Patel", "lastSeen": "4d ago", "tags": ["FAMILY"], "status": "Almost Due", "img": "https://i.pravatar.cc/150?u=14" },
  { "id": 15, "name": "Lucas Meyer", "lastSeen": "12h ago", "tags": ["FREELANCE"], "status": "In Progress", "img": "https://i.pravatar.cc/150?u=15" },
  { "id": 16, "name": "Zoe Foster", "lastSeen": "8d ago", "tags": ["DESIGN"], "status": "Overdue", "img": "https://i.pravatar.cc/150?u=16" }
];

const StatCard = ({ label, value }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center flex flex-col items-center min-w-[160px]">
    <span className="text-3xl font-bold text-slate-800">{value}</span>
    <span className="text-gray-500 text-xs mt-1 uppercase tracking-wide">{label}</span>
  </div>
);

const FriendCard = ({ friend }) => {
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
      <h3 className="font-bold text-slate-800 text-lg mb-0.5">{friend.name}</h3>
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

export default function Home() {
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

      {/* stats grid */}
      <section className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 px-8">
        <StatCard value="10" label="Total Friends" />
        <StatCard value="3" label="On Track" />
        <StatCard value="6" label="Need Attention" />
        <StatCard value="12" label="Interactions This Month" />
      </section>

      {/* friends fist */}
      <main className="max-w-6xl mx-auto px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 ml-2">Your Friends</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FRIENDS_DATA.map((friend, idx) => (
            <FriendCard key={idx} friend={friend} />
          ))}
        </div>
      </main>
    </div>
  );
}