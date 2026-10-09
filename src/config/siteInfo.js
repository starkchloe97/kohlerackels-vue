export const SITE_NAME = 'kohlerackels'
export const SITE_LEGAL_NAME = SITE_NAME
export const SITE_PHONE = '+1 (000) 000-0000'
export const SITE_PHONE_RAW = '+00000000'
export const SITE_EMAIL = 'hello@kohlerackels.com'
export const SITE_EMAIL_DOMAIN = SITE_EMAIL.split('@')[1]
export const SITE_ADDRESS_LINE1 = '0000 aaaaaaaaa vvvl vvr Rvvnd'
export const SITE_ADDRESS_LINE2 = 'ssX 2327, United States'
export const SITE_ADDRESS_ONE_LINE = [SITE_ADDRESS_LINE1, SITE_ADDRESS_LINE2].filter(Boolean).join(', ')




export const SITE_URL = 'https://kohlerackels.com'
export const SITE_ENCOMPASS_URL = `${new URL(SITE_URL).protocol}//encompass.${new URL(SITE_URL).hostname.replace(/^www\./, '')}/`
