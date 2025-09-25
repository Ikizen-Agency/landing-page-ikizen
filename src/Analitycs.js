import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Analytics = () => {
  const router = useRouter();
  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

  useEffect(() => {
    // Si la ID de Google Analytics no está configurada, no hacemos nada
    if (!GA_ID) return;

    // Esta función envía el evento de página vista a Google Analytics
    const handleRouteChange = (url) => {
      window.gtag('config', GA_ID, {
        page_path: url,
      });
    };

    // Añade el listener para el cambio de ruta
    router.events.on('routeChangeComplete', handleRouteChange);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [GA_ID, router.events]);

  if (!GA_ID) {
    return null; // No renderizar nada si no hay ID
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `,
        }}
      />
    </>
  );
};

export default Analytics;