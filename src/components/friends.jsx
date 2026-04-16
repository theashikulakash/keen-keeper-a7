import React from 'react';
import { toast } from 'react-toastify';
import LoadingSpinner from './LoadingSpinner';

const getIcon = (type) => {
  switch (type) {
    case 'Meetup':
      return '🤝';
    case 'Call':
      return '📞';
    case 'Text':
      return '💬';
    case 'Video':
      return '📹';
    default:
      return '⭐';
  }
};

const computeDaysSince = (lastSeen) => {
  if (!lastSeen) return 0;
  if (lastSeen === 'Just now') return 0;
  const [amount, unit] = lastSeen.split(' ');
  const value = parseInt(amount, 10);
  if (unit?.startsWith('w')) return value * 7;
  if (unit?.startsWith('d')) return value;
  return 0;
};

const FriendProfile = ({ friend, loading = false, onBack, onInteraction }) => {
  if (loading) return <LoadingSpinner message="Loading friend details..." />;
  const profile = friend ? {
    name: friend.name,
    status: friend.status,
    tag: friend.tags?.[0] ?? 'FRIEND',
    note: friend.note || 'A loyal contact in your network.',
    email: friend.email || 'No email provided',
    preferred: friend.preferred || 'message',
    lastSeen: friend.lastSeen || 'Unknown',
    goal: friend.goal ?? 30,
    nextDue: friend.nextDue ?? 'TBD',
    img: friend.img,
    interactions: friend.interactions || [],
  } : {
    name: "Emma Wilson",
    status: "Overdue",
    tag: "FAMILY",
    note: "Former colleague, great mentor",
    email: "emma.w@example.com",
    preferred: "email",
    lastSeen: "2m ago",
    goal: 30,
    nextDue: "Feb 27, 2026",
    img: "https://i.pravatar.cc/150?u=emma",
    interactions: [],
  };

  const handleAction = (type) => {
    if (!friend) return;
    onInteraction?.(type);
    toast.success(`${type} recorded for ${friend.name}`);
  };

  return (
    <div className="min-h-screen bg-[#F9FBFC] p-4 md:p-12 font-sans text-slate-700">
      <div className="max-w-6xl mx-auto">
        
        
        <button onClick={onBack} className="btn btn-ghost btn-sm mb-6 gap-2">
          ← Back to Friends
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          
          <div className="lg:col-span-4 space-y-4">
            
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm text-center">
              <div className="avatar mb-4">
                <div className="w-24 rounded-full ring ring-offset-2 ring-slate-100">
                  <img src={profile.img} alt={profile.name} />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-slate-800">{profile.name}</h1>
              
              <div className="flex justify-center gap-2 my-3">
                <span
                  className={`badge badge-sm text-white font-bold text-[10px] px-3 ${
                    profile.status === 'Overdue'
                      ? 'badge-error'
                      : profile.status === 'Almost Due'
                        ? 'badge-warning'
                        : 'badge-success'
                  }`}
                >
                  {profile.status.toUpperCase()}
                </span>
                <span className="badge badge-ghost badge-sm text-emerald-600 bg-emerald-50 border-none font-bold text-[10px] px-3">{profile.tag}</span>
              </div>
              <p className="text-sm italic text-slate-500 mt-4">"{profile.note}"</p>
              <p className="text-xs text-slate-400 mt-2">Email: <a href={`mailto:${profile.email}`} className="text-[#2D5A4C] hover:underline font-semibold">{profile.email}</a></p>
              <p className="text-xs text-slate-400 mt-1">Preferred: {profile.preferred}</p>
            </div>


            <div className="space-y-2">
              <button className="btn btn-block bg-white hover:bg-slate-50 border-slate-100 normal-case font-semibold text-slate-700 gap-3">
                <span className="text-lg">🔔</span> Snooze 2 Weeks
              </button>
              <button className="btn btn-block bg-white hover:bg-slate-50 border-slate-100 normal-case font-semibold text-slate-700 gap-3">
                <span className="text-lg">📁</span> Archive
              </button>
              <button className="btn btn-block bg-white hover:bg-red-50 border-slate-100 normal-case font-semibold text-red-500 gap-3">
                <span className="text-lg">🗑️</span> Delete
              </button>
            </div>
          </div>


          <div className="lg:col-span-8 space-y-6">
            
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-xl border border-slate-100 text-center">
                <div className="text-3xl font-bold text-slate-800">{profile.lastSeen}</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Last Seen</div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-100 text-center">
                <div className="text-4xl font-bold text-slate-800">{profile.goal}</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Goal (Days)</div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-100 text-center">
                <div className="text-2xl font-bold text-[#2D5A4C]">{profile.nextDue}</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Next Due</div>
              </div>
            </div>


            <div className="bg-white p-6 rounded-xl border border-slate-100 flex justify-between items-center">
              <div>
                <h3 className="text-sm font-bold text-[#2D5A4C] mb-2 uppercase tracking-tight">Relationship Goal</h3>
                <p className="text-slate-600">Connect every <span className="font-bold text-slate-800">{profile.goal} days</span></p>
              </div>
              <button className="btn btn-xs btn-ghost bg-slate-50 normal-case">Edit</button>
            </div>


            <div className="bg-white p-8 rounded-xl border border-slate-100">
              <h3 className="text-sm font-bold text-[#2D5A4C] mb-6 uppercase tracking-tight">Quick Check-In</h3>
              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={() => handleAction('Call')}
                  className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors gap-2"
                >
                  <span className="text-2xl">📞</span>
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-tighter">Call</span>
                </button>
                <button
                  onClick={() => handleAction('Text')}
                  className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors gap-2"
                >
                  <span className="text-2xl">💬</span>
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-tighter">Text</span>
                </button>
                <button
                  onClick={() => handleAction('Video')}
                  className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors gap-2"
                >
                  <span className="text-2xl">📹</span>
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-tighter">Video</span>
                </button>
              </div>
            </div>


            <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
              <div className="p-6 flex justify-between items-center border-b border-slate-50">
                <h3 className="text-sm font-bold text-[#2D5A4C] uppercase tracking-tight">Recent Interactions</h3>
                <button className="btn btn-xs btn-ghost bg-slate-50 normal-case gap-1">
                  <span>🕒</span> Full History
                </button>
              </div>
              <div className="divide-y divide-slate-50">
                {profile.interactions.length > 0 ? (
                  [...profile.interactions].reverse().map((interaction) => (
                    <InteractionRow
                      key={interaction.id}
                      type={interaction.type}
                      note={interaction.note}
                      date={interaction.date}
                      icon={getIcon(interaction.type)}
                    />
                  ))
                ) : (
                  <div className="p-6 text-sm text-slate-500">No interactions logged yet. Use the buttons above to record a Call, Text, or Video check-in.</div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};


const InteractionRow = ({ type, note, date, icon }) => (
  <div className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors group">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 flex items-center justify-center bg-slate-50 rounded-lg text-xl group-hover:bg-white transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-sm font-bold text-slate-700">{type}</p>
        <p className="text-xs text-slate-400 font-medium">{note}</p>
      </div>
    </div>
    <div className="text-xs text-slate-400 font-medium">{date}</div>
  </div>
);

export default FriendProfile;