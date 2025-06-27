// Utility to process and organize extracted content
export interface ExtractedContent {
  type: string;
  text?: string;
  level?: number;
  src?: string;
  title?: string;
  description?: string;
  sections?: any[];
  images?: string[];
  icon_src?: string;
  image_src?: string;
}

export interface ProcessedContent {
  navigation: {
    logo: string;
    solutions: any[];
    freeTools: any[];
    actions: string[];
  };
  hero: {
    challenge: string;
    headline: string;
    description: string;
    ctas: string[];
    heroImage: string;
  };
  featuredLogos: string[];
  features: any[];
  allContent: ExtractedContent[];
}

export async function loadAndProcessContent(): Promise<ProcessedContent> {
  try {
    const response = await fetch('/data/merchynt_paige_content.json');
    const rawData = await response.json();
    
    // Parse the nested JSON structure safely
    let data;
    try {
      data = JSON.parse(rawData.raw_content);
    } catch (parseError) {
      console.warn('JSON parse error, using fallback data structure');
      // Fallback to mock data if parsing fails
      return getFallbackContent();
    }
    
    const extractedInfo: ExtractedContent[] = data.data?.extracted_information || [];
    
    // Process navigation
    const logo = extractedInfo.find(item => item.type === 'logo')?.src || '';
    const solutionsMenu = extractedInfo.find(item => item.type === 'navigation_menu' && item.title === 'Solutions');
    const freeToolsMenu = extractedInfo.find(item => item.type === 'navigation_menu' && item.title === 'Free tools');
    const actions = extractedInfo.filter(item => item.type === 'navigation_action').map(item => item.text || '');
    
    // Process hero section
    const challenge = extractedInfo.find(item => item.type === 'headline' && item.level === 5)?.text || '';
    const headline = extractedInfo.find(item => item.type === 'headline' && item.level === 1)?.text || '';
    const heroDescription = extractedInfo.find(item => item.type === 'description')?.text || '';
    const ctas = extractedInfo.filter(item => item.type === 'call_to_action').slice(0, 2).map(item => item.text || '');
    const heroImage = extractedInfo.find(item => item.type === 'image' && item.src?.includes('paige-images'))?.src || '';
    
    // Process featured logos
    const featuredLogos = extractedInfo.filter(item => item.type === 'featured_logo').map(item => item.src || '');
    
    // Process features
    const features = extractedInfo.filter(item => item.type === 'feature_section');
    
    return {
      navigation: {
        logo,
        solutions: solutionsMenu?.sections || [],
        freeTools: freeToolsMenu?.sections || [],
        actions
      },
      hero: {
        challenge,
        headline,
        description: heroDescription,
        ctas,
        heroImage
      },
      featuredLogos,
      features,
      allContent: extractedInfo
    };
  } catch (error) {
    console.error('Error loading content:', error);
    return getFallbackContent();
  }
}

function getFallbackContent(): ProcessedContent {
  return {
    navigation: {
      logo: 'https://localdigitalmarketing.us/wp-content/uploads/2024/11/xLocal-SEO-in-Revere-MA-1.png.pagespeed.ic.RLBzAjNqlr.png',
      solutions: [
        {
          title: 'LDM',
          description: 'Let our AI automate your GBP management',
          image_src: 'https://cdn.prod.website-files.com/66339c43cbff20ea82838f39/66bb8e6b7e759e76b4215003_paige-icon.svg'
        },
        {
          title: 'Google Business Pro',
          description: 'Let our SEO experts optimize your GBP',
          image_src: 'https://cdn.prod.website-files.com/66339c43cbff20ea82838f39/66bb8e6b7e759e76b4215045_google-business-icon.svg'
        },
        {
          title: 'Reviews Software',
          description: 'Get and manage Google reviews',
          image_src: 'https://cdn.prod.website-files.com/66339c43cbff20ea82838f39/66bb8e6b2130fbc1217ded8e_review-icon.svg'
        }
      ],
      freeTools: [
        {
          title: 'ProfilePro',
          description: 'Optimize your GBP with free Chrome extension',
          image_src: 'https://cdn.prod.website-files.com/66339c43cbff20ea82838f39/66bb8e6b46be4fa9b81bbf17_profile-pro-icon.svg'
        },
        {
          title: 'GBP Auditor',
          description: 'Audit your GBP optimization for free',
          image_src: 'https://cdn.prod.website-files.com/66339c43cbff20ea82838f39/66bb8e6bf4c3a6d5ae7e53f9_gbp-icon.svg'
        }
      ],
      actions: ['LOGIN', 'AUDIT YOUR GBP', 'START $1 Trial']
    },
    hero: {
      challenge: 'Challenge: Optimizing Google Business Profiles is hard and expensive',
      headline: 'Meet LDM, the AI fully automated Google My Business Management software',
      description: 'LDM is trained on thousands of data points and your website data to auto publish content to your Google Business Profile at the perfect time to rank higher.',
      ctas: ['START $1 TRIAL', 'PROOF IT WORKS'],
      heroImage: 'https://cdn.prod.website-files.com/66339c43cbff20ea82838f39/66a4ffa3064cbda2d4330a29_paige-images.webp'
    },
    featuredLogos: [
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f39/668be7cac2d208f7b685b93b_business-news-logo.svg',
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f39/668be7ca50e49af103d357a2_spectrum-logo.svg',
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f39/668be7cad11b5ed3e9633dbb_chamber-logo.svg',
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f39/668be7ca410ce6d4d550eb3f_trends-logo.svg',
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f39/668be7ca092379a138f8293e_Techbullion.svg',
      'https://cdn.prod.website-files.com/66339c43cbff20ea82838f39/668be7ca032036ccaf13b2bd_business-logo.svg'
    ],
    features: [
      {
        title: 'Images',
        description: 'When you upload images to LDM, it optimizes them for your keywords including their file names, meta descriptions, plus geotags them, then uploads them to your Google Business Profile photos section at the optimal moment instead of all at once.',
        images: [
          'https://cdn.prod.website-files.com/66339c43cbff20ea82838f39/66a78005d5b386744cf7e5e6_merchynt-mobile-image.webp',
          'https://cdn.prod.website-files.com/66339c43cbff20ea82838f39/66a7800500822f578f8fec82_merchynt-mobile-image-one.webp'
        ]
      },
      {
        title: 'Reviews',
        description: 'LDM can automatically reply to reviews or simply suggest replies for you if you prefer. You can even train LDM to sound exactly how you like to based on the type of Google review you receive.',
        icon_src: 'https://cdn.prod.website-files.com/66339c43cbff20ea82838f39/66a783efdf4c5ff9bfa21758_reviews-icon.svg'
      },
      {
        title: 'Q&As',
        description: 'LDM can automatically ask hyper specific questions and answer them on your Google Business Profile by using information about your business found on your website.',
        icon_src: 'https://cdn.prod.website-files.com/66339c43cbff20ea82838f39/66a783efa0bdd5c155d36302_q-and-a-icon.svg'
      },
      {
        title: 'Google Business Posts',
        description: 'LDM can automatically write, schedule and publish posts onto your Google Business Profile. It can even create custom graphics if you don\'t have any and turn your 5-star reviews into posts.',
        icon_src: 'https://cdn.prod.website-files.com/66339c43cbff20ea82838f39/66a783effe3bfe788c01a0d1_google-post.svg'
      }
    ],
    allContent: []
  };
}

export function getContentByType(content: ExtractedContent[], type: string): ExtractedContent[] {
  return content.filter(item => item.type === type);
}

export function getContentByLevel(content: ExtractedContent[], level: number): ExtractedContent[] {
  return content.filter(item => item.level === level);
}
