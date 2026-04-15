import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const timelineData = [
  { type: 'Meetup' }, { type: 'Text' }, { type: 'Meetup' }, { type: 'Video' },
  { type: 'Meetup' }, { type: 'Call' }, { type: 'Meetup' }, { type: 'Text' },
  { type: 'Call' }, { type: 'Call' }, { type: 'Video' }, { type: 'Video' },
  { type: 'Meetup' }, { type: 'Text' }, { type: 'Call' }, { type: 'Video' },
];

const processData = () => {
  const counts = timelineData.reduce((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(counts).map(key => ({
    name: key,
    value: counts[key]
  }));
};

const chartData = processData();

const COLORS = {
  'Meetup': '#FFA500', 
  'Call': '#FB607F',   
  'Text': '#8B5CF6',   
  'Video': '#34A853',  
};

const Stats = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#f8fafc] min-h-screen">
      <h1 className="text-3xl font-bold text-[#1a2b3b] mb-6">Friendship Analytics</h1>
      
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-sm font-semibold text-[#244D3F] mb-4 uppercase tracking-wider">
          By Interaction Type
        </h2>
        
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}   
                outerRadius={90}
                paddingAngle={5}   
                dataKey="value"
                stroke="none"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[entry.name] || '#ccc'} />
                ))}
              </Pie>
              <Legend 
                verticalAlign="bottom" 
                align="center"
                iconType="circle"
                iconSize={8}
                formatter={(value) => <span className="text-gray-500 text-xs px-2">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;