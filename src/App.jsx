import { useState, useEffect, useRef } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/home'
import Timeline from './components/timeline'
import Stats from './components/Stats'
import ProfilePage from './components/ProfilePage'
import NotFound from './components/NotFound'
import FRIENDS_DATA from './data/friends.json'

const normalizeStatus = (status) => {
  if (['On-track', 'Active', 'Online', 'In Progress'].includes(status)) return 'On-track';
  if (status === 'Almost Due') return 'Almost Due';
  if (status === 'Overdue') return 'Overdue';
  if (status === 'Inactive') return 'Almost Due';
  return status;
};

const normalizeData = (data) => data.map((friend) => ({
  ...friend,
  status: normalizeStatus(friend.status),
}));

function App() {
  const [friendsData, setFriendsData] = useState(() => {
    const saved = localStorage.getItem('keepKeeper_friendsData_v2');
    return saved ? normalizeData(JSON.parse(saved)) : normalizeData(FRIENDS_DATA);
  });
  const [loading, setLoading] = useState(false);
  const loadingTimerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    return () => {
      if (loadingTimerRef.current) {
        clearTimeout(loadingTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('keepKeeper_friendsData_v2', JSON.stringify(friendsData));
  }, [friendsData]);

  const showLoading = () => {
    setLoading(true);
    if (loadingTimerRef.current) clearTimeout(loadingTimerRef.current);
    loadingTimerRef.current = window.setTimeout(() => {
      setLoading(false);
      loadingTimerRef.current = null;
    }, 450);
  };

  const handleProfileClick = (friend) => {
    showLoading();
    navigate(`/profile/${friend.id}`);
  };

  const handleBackToHome = () => {
    showLoading();
    navigate('/');
  };

  const handleInteraction = (friendId, type) => {
    const now = new Date();
    const timestamp = now.toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });

    setFriendsData((prevData) =>
      prevData.map((friend) => {
        if (friend.id !== friendId) return friend;

        const interactions = [
          ...(friend.interactions || []),
          {
            id: `${friendId}-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
            type,
            person: friend.name,
            icon: type === 'Call' ? '📞' : type === 'Text' ? '💬' : '📹',
            date: timestamp,
            note: `${type} check-in recorded`,
          },
        ];

        return {
          ...friend,
          lastSeen: 'Just now',
          status: 'On-track',
          interactions,
        };
      })
    );
  };

  const getActiveTab = (pathname) => {
    if (pathname === '/' || pathname.startsWith('/profile/')) return 'home';
    if (pathname === '/timeline') return 'timeline';
    if (pathname === '/stats') return 'stats';
    return 'home';
  };

  const activeTab = getActiveTab(location.pathname);

  const handleTabChange = (tab) => {
    showLoading();
    navigate(tab === 'home' ? '/' : `/${tab}`);
  };

  return (
    <>
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
      />
      <Routes>
        <Route path="/" element={<Home friendsData={friendsData} onProfileClick={handleProfileClick} loading={loading} />} />
        <Route path="/timeline" element={<Timeline friendsData={friendsData} loading={loading} />} />
        <Route path="/stats" element={<Stats friendsData={friendsData} loading={loading} />} />
        <Route path="/profile/:id" element={<ProfilePage friendsData={friendsData} loading={loading} onBack={handleBackToHome} onInteraction={handleInteraction} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2500} hideProgressBar />
    </>
  )
}

export default App
