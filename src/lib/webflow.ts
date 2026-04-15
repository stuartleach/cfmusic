/**
 * Webflow CMS integration layer.
 *
 * Fetches content from the Webflow CMS API so the team can keep
 * editing in Webflow's visual editor while Next.js handles rendering.
 *
 * Setup:
 *   1. Get a Webflow API token from your site's Project Settings → Integrations
 *   2. Set WEBFLOW_API_TOKEN and WEBFLOW_SITE_ID in .env.local
 *   3. Find collection IDs in the Webflow Designer → CMS panel
 *
 * Docs: https://developers.webflow.com/data/reference
 */

const WEBFLOW_API_TOKEN = process.env.WEBFLOW_API_TOKEN || "";
const WEBFLOW_SITE_ID = process.env.WEBFLOW_SITE_ID || "";
const WEBFLOW_API_BASE = "https://api.webflow.com/v2";

interface WebflowResponse<T> {
  items: T[];
  count: number;
  limit: number;
  offset: number;
  total: number;
}

interface WebflowItem {
  id: string;
  cmsLocaleId?: string;
  lastPublished?: string;
  lastUpdated?: string;
  createdOn?: string;
  isArchived?: boolean;
  isDraft?: boolean;
  fieldData: Record<string, unknown>;
}

async function webflowFetch<T>(path: string): Promise<T> {
  if (!WEBFLOW_API_TOKEN) {
    throw new Error("WEBFLOW_API_TOKEN not set — configure in .env.local");
  }

  const res = await fetch(`${WEBFLOW_API_BASE}${path}`, {
    headers: {
      Authorization: `Bearer ${WEBFLOW_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    next: { revalidate: 300 }, // Cache for 5 minutes
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Webflow API error ${res.status}: ${text}`);
  }

  return res.json();
}

/**
 * List all CMS collections for the site.
 */
export async function listCollections() {
  return webflowFetch<{ collections: Array<{ id: string; displayName: string; slug: string }> }>(
    `/sites/${WEBFLOW_SITE_ID}/collections`
  );
}

/**
 * Get all items from a CMS collection.
 */
export async function getCollectionItems(collectionId: string): Promise<WebflowItem[]> {
  const data = await webflowFetch<WebflowResponse<WebflowItem>>(
    `/collections/${collectionId}/items`
  );
  return data.items.filter((item) => !item.isArchived && !item.isDraft);
}

/**
 * Get a single CMS item by ID.
 */
export async function getCollectionItem(collectionId: string, itemId: string): Promise<WebflowItem> {
  return webflowFetch<WebflowItem>(
    `/collections/${collectionId}/items/${itemId}`
  );
}

/**
 * Get site metadata.
 */
export async function getSiteInfo() {
  return webflowFetch<{
    id: string;
    displayName: string;
    shortName: string;
    previewUrl?: string;
    customDomains?: Array<{ url: string }>;
  }>(`/sites/${WEBFLOW_SITE_ID}`);
}

/**
 * Webflow-ready mode check.
 * Returns true if Webflow credentials are configured.
 */
export function isWebflowConfigured(): boolean {
  return Boolean(WEBFLOW_API_TOKEN && WEBFLOW_SITE_ID);
}
