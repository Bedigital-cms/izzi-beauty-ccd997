/** Galerij content — data lives in galerij.json (CMS + AI editable). Images may be empty
 *  strings; the gallery renders a blank placeholder tile until a client uploads photos. */
import type { PortfolioContent } from '@/lib/types'

import data from './galerij.json'

export const galerij = data as unknown as PortfolioContent
