import { platformFeatures as financialServices } from './financial-services.js'
import { platformFeatures as legalCompliance } from './legal-compliance.js'
import { platformFeatures as healthcare } from './healthcare.js'
import { platformFeatures as government } from './government.js'
import { platformFeatures as insurance } from './insurance.js'
import { platformFeatures as realEstate } from './real-estate.js'
import { platformFeatures as banksCreditUnions } from './banks-credit-unions.js'
import { platformFeatures as accountingTax } from './accounting-tax.js'

export const platformFeatures = {
  ...financialServices,
  ...legalCompliance,
  ...healthcare,
  ...government,
  ...insurance,
  ...realEstate,
  ...banksCreditUnions,
  ...accountingTax,
}

// Get a specific feature by capability slug and feature slug
export function getFeature(capabilitySlug, featureSlug) {
  const cap = platformFeatures[capabilitySlug]
  if (!cap) return null
  return cap[featureSlug] || null
}

// Get all features for a capability
export function getCapabilityFeatures(capabilitySlug) {
  const cap = platformFeatures[capabilitySlug]
  if (!cap) return []
  return Object.entries(cap).map(([slug, data]) => ({ slug, ...data }))
}

// Get all features across all capabilities
export function getAllFeatures() {
  const all = []
  for (const [capSlug, features] of Object.entries(platformFeatures)) {
    for (const [featSlug, data] of Object.entries(features)) {
      all.push({ capabilitySlug, featureSlug: featSlug, ...data })
    }
  }
  return all
}
