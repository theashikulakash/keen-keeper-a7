import React, { useState } from 'react';

const timelineData = [
  { id: 1, type: 'Meetup', person: 'Rakibul', date: 'March 29, 2026', icon: '🤝' },
  { id: 2, type: 'Text', person: 'Sarah Chen', date: 'March 28, 2026', icon: '💬' },
  { id: 3, type: 'Meetup', person: 'Marcus Thorne', date: 'March 26, 2026', icon: '🤝' },
  { id: 4, type: 'Video', person: 'Amina Jallow', date: 'March 23, 2026', icon: '📹' },
  { id: 5, type: 'Meetup', person: 'Leo Rossi', date: 'March 21, 2026', icon: '🤝' },
  { id: 6, type: 'Call', person: 'Elena Vance', date: 'March 19, 2026', icon: '📞' },
  { id: 7, type: 'Meetup', person: 'Jordan Smith', date: 'March 17, 2026', icon: '🤝' },
  { id: 8, type: 'Text', person: 'Priya Sharma', date: 'March 13, 2026', icon: '💬' },
  { id: 9, type: 'Call', person: 'Kevin Zhang', date: 'March 11, 2026', icon: '📞' },
  { id: 10, type: 'Call', person: 'Sofia Garsia', date: 'March 11, 2026', icon: '📞' },
  { id: 11, type: 'Video', person: 'David Miller', date: 'March 06, 2026', icon: '📹' },
  { id: 12, type: 'Video', person: 'Chloe Bennett', date: 'February 24, 2026', icon: '📹' },
  { id: 13, type: 'Meetup', person: 'Hassan Ali', date: 'February 20, 2026', icon: '🤝' },
  { id: 14, type: 'Text', person: 'Maya Patel', date: 'February 15, 2026', icon: '💬' },
  { id: 15, type: 'Call', person: 'Lucas Meyer', date: 'February 10, 2026', icon: '📞' },
  { id: 16, type: 'Video', person: 'Zoe Foster', date: 'February 02, 2026', icon: '📹' },
];

const Timeline = () => {
    
  const [filter, setFilter] = useState('All');

  
  const filteredData = filter === 'All' 
    ? timelineData 
    : timelineData.filter(item => item.type === filter);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white min-h-screen font-sans">
      <h1 className="text-3xl font-bold text-[#1a2b3b] mb-6">Timeline</h1>
      
      
      <div className="relative mb-8">
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="appearance-none w-48 p-2 px-4 border border-gray-200 rounded-md text-gray-500 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
        >
          <option value="All">All Activities</option>
          <option value="Meetup">Meetups</option>
          <option value="Text">Texts</option>
          <option value="Call">Calls</option>
          <option value="Video">Videos</option>
        </select>

        <div className="pointer-events-none absolute inset-y-0 left-40 flex items-center px-2 text-gray-400">
          <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>

      <div className="space-y-3">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.id} className="flex items-center p-4 border border-gray-100 rounded-lg bg-white shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-md mr-4 text-xl">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <p className="text-[#1a2b3b] font-medium">
                  <span className="font-bold">{item.type}</span> 
                  <span className="text-gray-500 font-normal ml-1">with {item.person}</span>
                </p>
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wide mt-0.5">
                  {item.date}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center py-10">No items found for this filter.</p>
        )}
      </div>
    </div>
  );
};

export default Timeline;