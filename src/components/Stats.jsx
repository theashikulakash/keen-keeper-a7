import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import LoadingSpinner from './LoadingSpinner';

const COLORS = {
  'Call': '#34A853',
  'Text': '#F59E0B',
  'Video': '#EF4444',
};

const Stats = ({ friendsData = [], loading = false }) => {
  const [chartData, setChartData] = useState([
    { name: 'Call', value: 0 },
    { name: 'Text', value: 0 },
    { name: 'Video', value: 0 },
  ]);

  useEffect(() => {
    const counts = friendsData.reduce((acc, friend) => {
      (friend.interactions || []).forEach(item => {
        if (['Call', 'Text', 'Video'].includes(item.type)) {
          acc[item.type] = (acc[item.type] || 0) + 1;
        }
      });
      return acc;
    }, { Call: 0, Text: 0, Video: 0 });

    setChartData([
      { name: 'Call', value: counts['Call'] },
      { name: 'Text', value: counts['Text'] },
      { name: 'Video', value: counts['Video'] },
    ]);
  }, [friendsData]);

  if (loading) return <LoadingSpinner message="Loading stats..." />;

  const isDataEmpty = chartData.every(item => item.value === 0);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#f8fafc] min-h-screen">
      <h1 className="text-3xl font-bold text-[#1a2b3b] mb-6">Friendship Analytics</h1>
      
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-sm font-semibold text-[#244D3F] mb-4 uppercase tracking-wider">
          Interaction Distribution
        </h2>

        {isDataEmpty ? (
          <div className="h-[300px] flex items-center justify-center text-gray-500">
            No interaction data available yet.
          </div>
        ) : (
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData.filter(d => d.value > 0)}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {chartData.filter(d => d.value > 0).map((entry, index) => (
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
        )}
      </div>
    </div>
  );
};

export default Stats;