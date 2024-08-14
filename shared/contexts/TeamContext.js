import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getTeamInfo } from '@/services/leadership-teamInfo';

const TeamContext = createContext();

export function useTeam() {
  return useContext(TeamContext);
}

export function TeamProvider({ children, initialLang }) {
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState(initialLang || 'az');
  const [pendingLang, setPendingLang] = useState(null);
  const router = useRouter();

  // Effect to handle the language change
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || initialLang;
    if (savedLang !== lang) {
      setPendingLang(savedLang);  // Set the pending language change
    }
  }, [initialLang, lang]);

  // Effect to handle data fetching
  useEffect(() => {
    let isMounted = true;
    const fetchTeamData = async () => {
      setLoading(true);
      try {
        const data = await getTeamInfo(lang);
        if (isMounted) {
          setTeamData(data);
        }
      } catch (error) {
        if (isMounted) {
          console.error('Error fetching team info:', error);
          setTeamData([]);
        }
      }
      if (isMounted) {
        setLoading(false);
      }
    };

    fetchTeamData();

    return () => {
      isMounted = false;
    };
  }, [lang]);

  // Effect to handle router navigation when language changes
  useEffect(() => {
    const handleRouteChangeComplete = () => {
      if (pendingLang) {
        setLang(pendingLang);  // Apply the pending language change
        setPendingLang(null);  // Clear pending language change
      }
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [pendingLang, router.events]);

  return (
    <TeamContext.Provider value={{ teamData, loading }}>
      {children}
    </TeamContext.Provider>
  );
}
