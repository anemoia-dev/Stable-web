// hooks/useGTM.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useGTM = () => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            // Replace with your GTM event trigger
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'rutaVisitada',
                pagePath: url,
            });
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);
};

export default useGTM;
