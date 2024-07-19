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
  const router = useRouter();

  useEffect(() => {
    const fetchTeamData = async () => {
      setLoading(true);
      const savedLang = localStorage.getItem("lang") || initialLang;
      if (savedLang !== lang) {
        setLang(savedLang);
        router.replace(router.pathname, router.asPath, { locale: savedLang });
      }
      try {
        const data = await getTeamInfo(savedLang);
        setTeamData(data);
      } catch (error) {
        console.error('Error fetching team info:', error);
        setTeamData([]);
      }
      setLoading(false);
    };

    fetchTeamData();
  }, [router.locale, router.query.lang, initialLang, lang, router]);

  return (
    <TeamContext.Provider value={{ teamData, loading }}>
      {children}
    </TeamContext.Provider>
  );
}
