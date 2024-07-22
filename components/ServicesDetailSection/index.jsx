import React, { useEffect, useState } from 'react';
import styles from './services.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Flex, Spinner } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { getServicesDetail } from '@/services/servicesDetails';

function ServicesDetailSection() {
  const router = useRouter();
  const { query } = router;
  const [isClient, setIsClient] = useState(false);
  const { t, i18n } = useTranslation();
  const [servicesDetail, setServicesDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState('az');

  useEffect(() => {
    setIsClient(true);
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getServicesDetail(query?.id, lang);

        if (response && response.data) {
          setServicesDetail(response?.data);
          setError(null);
        } else {
          console.error('Invalid response format:', response);
          setError('Invalid response from server. Please try again later.');
        }
      } catch (error) {
        console.error('Error fetching services details:', error);
        setError('Failed to fetch services details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (query.id) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [query.id, lang]);

  if (loading) {
    return (
      <Flex height='50vh' alignItems='center' justifyContent='center'>
        <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
      </Flex>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!servicesDetail) {
    return <p>No data found for this service item.</p>;
  }

  const {
    title,
    desc,
    image,
    image_2,
    key,
    value,
    meta_title,
    meta_description,
    meta_keywords,
  } = servicesDetail;

  return (
    <>
      <Head>
        <title>{meta_title || title}</title>
        <meta name='description' content={meta_description || desc} />
        <meta name='keywords' content={meta_keywords || ''} />
      </Head>
      <div className={styles.newsDetailSection}>
        <div className={styles.aboutSectContainer}>
          <div className={styles.aboutSectBox} data-aos='fade-right'>
            <h2>{key}</h2>
            <div style={{ display: 'flex', gap: '29px', marginTop: '26px' }}>
              <h5>BCG group</h5>
            </div>
          </div>
          <div className={styles.aboutSectImage}>
            <Image
              style={{ width: '700px', height: '700px', marginLeft: '260px', borderRadius: '12px' }}
              src={image_2 || '/images/newsTitleImg.jpg'}
              width={1000}
              height={900}
              alt={title}
            />
          </div>
        </div>
        <div className={styles.newsDetailDescription}>
          <div dangerouslySetInnerHTML={{ __html: desc }} />
          <div>
            <p>{value}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesDetailSection;
