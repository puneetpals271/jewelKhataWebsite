export type CountryCode = 'IN' | 'US' | 'GB' | 'AU' | 'DEFAULT';

export interface PricingConfig {
  basic: string;
  pro: string;
  currency: string;
  symbol: string;
}

export const pricingByCountry: Record<CountryCode, PricingConfig> = {
  IN: {
    basic: '₹999',
    pro: '₹1,999',
    currency: 'INR',
    symbol: '₹',
  },
  US: {
    basic: '$12.99',
    pro: '$24.99',
    currency: 'USD',
    symbol: '$',
  },
  GB: {
    basic: '£9.99',
    pro: '£19.99',
    currency: 'GBP',
    symbol: '£',
  },
  AU: {
    basic: '$19.99',
    pro: '$39.99',
    currency: 'AUD',
    symbol: '$',
  },
  DEFAULT: {
    basic: '$12.99',
    pro: '$24.99',
    currency: 'USD',
    symbol: '$',
  },
};

export async function detectCountry(): Promise<CountryCode> {
  try {
    // Try using ip-api.com (free, no auth required)
    const response = await fetch('https://ip-api.com/json/', {
      method: 'GET',
    });

    if (!response.ok) return 'DEFAULT';

    const data = await response.json();
    const countryCode = data.countryCode?.toUpperCase();

    if (countryCode && countryCode in pricingByCountry) {
      return countryCode as CountryCode;
    }

    return 'DEFAULT';
  } catch (error) {
    console.error('Geolocation detection failed:', error);
    return 'DEFAULT';
  }
}

export function getPricing(countryCode: CountryCode): PricingConfig {
  return pricingByCountry[countryCode] || pricingByCountry.DEFAULT;
}
