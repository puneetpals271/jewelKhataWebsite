'use client';

import { useState, useEffect } from 'react';
import { detectCountry, getPricing, type CountryCode, type PricingConfig } from '@/lib/geolocation';

export function usePricing() {
  const [pricing, setPricing] = useState<PricingConfig | null>(null);
  const [country, setCountry] = useState<CountryCode>('DEFAULT');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPricing = async () => {
      try {
        const detectedCountry = await detectCountry();
        setCountry(detectedCountry);
        const countryPricing = getPricing(detectedCountry);
        setPricing(countryPricing);
      } catch (error) {
        console.error('Failed to load pricing:', error);
        // Fallback to default
        import('@/lib/geolocation').then((mod) => {
          setPricing(mod.getPricing('DEFAULT'));
        });
      } finally {
        setLoading(false);
      }
    };

    loadPricing();
  }, []);

  return { pricing, country, loading };
}
