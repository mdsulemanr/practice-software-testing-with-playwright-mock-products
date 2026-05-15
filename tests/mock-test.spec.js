import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const storageStatePath = path.join(__dirname, 'storageState.json');
const productsApiUrl = 'https://api.practicesoftwaretesting.com/products?page=1&between=price,1,100&is_rental=false';
const mockProductsResponse = {
  data: [
    {
      id: '01KQKGY3QYDXVV45G5ZT1SHTGK',
      name: 'Combination Pliers',
      description: 'Versatile combination pliers designed for gripping, bending, and cutting wire with ease. Featuring chrome vanadium steel construction with induction-hardened cutting edges, these pliers deliver excellent grip and leverage for a wide range of tasks. The precision-machined jaws combine flat gripping surfaces with a pipe-grip section and integrated wire cutter for true multi-purpose functionality. Ergonomic bi-component handles reduce hand fatigue during extended use and provide a secure hold even with oily or gloved hands. The joint is precisely fitted to eliminate play and ensure smooth operation over thousands of cycles. Ideal for electricians, mechanics, and DIY enthusiasts tackling everyday projects around the workshop or job site.',
      price: 14.15,
      is_location_offer: false,
      is_rental: false,
      co2_rating: 'D',
      in_stock: true,
      is_eco_friendly: false,
      product_image: {
        id: '01KQKGY3QBM4XEE1W6V3JVBC90',
        by_name: 'Helinton Fantin',
        by_url: 'https://unsplash.com/@fantin',
        source_name: 'Unsplash',
        source_url: 'https://unsplash.com/photos/W8BNwvOvW4M',
        file_name: 'pliers01.avif',
        title: 'Combination pliers',
      },
      category: {
        id: '01KQKGY3Q0G9NP3XMCR2VWV08J',
        name: 'Pliers',
        slug: 'pliers',
      },
      brand: {
        id: '01KQKGY3CR9G63XNXTCGPPTGYZ',
        name: 'ForgeFlex Tools',
      },
    },
    {
      id: '01KQKGY3R319CY6WQ5RC5B7JJX',
      name: 'Pliers',
      description: 'Reliable general-purpose pliers crafted from drop-forged carbon steel for long-lasting durability in demanding working conditions. The serrated jaws provide a firm grip on a variety of materials including wire, nails, small fasteners, and irregularly shaped objects. Comfortable rubber-coated handles absorb vibration and reduce hand fatigue during repetitive use, while the non-slip surface ensures confident handling. The precision pivot joint maintains alignment under load, delivering smooth, controlled jaw action with every squeeze. Heat-treated steel construction resists wear and deformation even under heavy use. A must-have foundational tool for any workshop, equally suited for professional tradespeople and home repair projects.',
      price: 12.01,
      is_location_offer: false,
      is_rental: false,
      co2_rating: 'D',
      in_stock: true,
      is_eco_friendly: false,
      product_image: {
        id: '01KQKGY3QBM4XEE1W6V3JVBC91',
        by_name: 'Everyday basics',
        by_url: 'https://unsplash.com/@zanardi',
        source_name: 'Unsplash',
        source_url: 'https://unsplash.com/photos/I8eTuMmxIfo',
        file_name: 'pliers02.avif',
        title: 'Pliers',
      },
      category: {
        id: '01KQKGY3Q0G9NP3XMCR2VWV08J',
        name: 'Pliers',
        slug: 'pliers',
      },
      brand: {
        id: '01KQKGY3CR9G63XNXTCGPPTGYZ',
        name: 'ForgeFlex Tools',
      },
    },
    {
      id: '01KQKGY3R6ZVGJTYXENV7DNS92',
      name: 'Bolt Cutters',
      description: 'Heavy-duty bolt cutters engineered to slice through hardened bolts, chains, padlocks, and wire fencing with minimal effort. The compound leverage mechanism multiplies your cutting force by a factor of 30, enabling clean cuts through materials up to 10mm in diameter. Hardened alloy steel blades are precisely ground and heat-treated to maintain a sharp edge through years of repeated use on tough materials. Ergonomic rubber grips and the generous 750mm handle length provide excellent control, leverage, and reach during overhead or awkward-angle cuts. An adjustable blade tension screw lets you fine-tune the jaw alignment for optimal cutting performance. Built for demolition crews, locksmiths, fencing contractors, and maintenance professionals who need reliable cutting power day after day.',
      price: 48.41,
      is_location_offer: true,
      is_rental: false,
      co2_rating: 'D',
      in_stock: true,
      is_eco_friendly: false,
      product_image: {
        id: '01KQKGY3QBM4XEE1W6V3JVBC92',
        by_name: 'Michael Dziedzic',
        by_url: 'https://unsplash.com/@lazycreekimages',
        source_name: 'Unsplash',
        source_url: 'https://unsplash.com/photos/pM9pkc9J918',
        file_name: 'pliers03.avif',
        title: 'Bolt cutters',
      },
      category: {
        id: '01KQKGY3Q0G9NP3XMCR2VWV08J',
        name: 'Pliers',
        slug: 'pliers',
      },
      brand: {
        id: '01KQKGY3CR9G63XNXTCGPPTGZ0',
        name: 'MightyCraft Hardware',
      },
    },
    {
      id: '01KQKGY3R9KVHF41Z9T5EV3TXG',
      name: 'Long Nose Pliers',
      description: 'Precision long nose pliers with narrow tapered jaws designed for reaching into tight, confined spaces and bending fine wire with accuracy. Made from chrome vanadium steel with induction-hardened cutting edges that cleanly sever copper, brass, and steel wire without crushing or fraying. The slim jaw profile tapers to a fine point, making these pliers indispensable for electrical terminal work, jewelry making, and intricate mechanical repairs. The leaf-spring joint returns to the open position automatically, speeding up repetitive tasks. A must-have precision tool trusted by electricians, electronics technicians, and hobbyists worldwide.',
      price: 14.24,
      is_location_offer: false,
      is_rental: false,
      co2_rating: 'D',
      in_stock: false,
      is_eco_friendly: false,
      product_image: {
        id: '01KQKGY3QBM4XEE1W6V3JVBC93',
        by_name: 'Brett Jordan',
        by_url: 'https://unsplash.com/@brett_jordan',
        source_name: 'Unsplash',
        source_url: 'https://unsplash.com/photos/GamuDTVm02g',
        file_name: 'pliers04.avif',
        title: 'Long nose pliers',
      },
      category: {
        id: '01KQKGY3Q0G9NP3XMCR2VWV08J',
        name: 'Pliers',
        slug: 'pliers',
      },
      brand: {
        id: '01KQKGY3CR9G63XNXTCGPPTGZ0',
        name: 'MightyCraft Hardware',
      },
    },
    {
      id: '01KQKGY3RC887AY7WDASASB686',
      name: 'Slip Joint Pliers',
      description: 'Adjustable slip joint pliers that feature a two-position pivot mechanism for switching between regular and wide jaw openings to accommodate different fasteners. The PVC-coated handles offer a comfortable, non-slip grip while the precisely machined jaws securely grasp round, flat gripping surfaces while the precisely machined jaws securely grasp round, flat gripping surfaces while the precisely machined jaws securely grasp round, flat gripping surfaces while the precisely machined jaws securely grasp round, flat gripping surfaces while the precisely machined jaws securely grasp round, flat gripping surfaces while the precisely machined jaws securely grasp round, flat gripping surfaces while the precisely machined jaws securely grasp round, flat gripping surfaces while the precisely machined jaws securely grasp round, flat gripping surfaces while the precisely machined jaws securely grasp round, flat gripping surfaces while the precisely machined jaws securely grasp round, flat gripping surfaces while the precisely machined jaws securely grasp round, flat gripping surfaces while the precisely machined jaws securely grasp round, flat gripping surfaces while the precisely machined jaws securely grasp round, flat gripping surfaces while the precisely machined jaws securely grasp round, flat gripping surfaces while the precisely machined jaws securely grasp round, flat gripping surfaces while the precisely machined jaws securely grasp round, flat gripping surfaces',
      price: 9.17,
      is_location_offer: false,
      is_rental: false,
      co2_rating: 'D',
      in_stock: true,
      is_eco_friendly: false,
      product_image: {
        id: '01KQKGY3QBM4XEE1W6V3JVBC94',
        by_name: 'Yasin Hasan',
        by_url: 'https://unsplash.com/@yasin',
        source_name: 'Unsplash',
        source_url: 'https://unsplash.com/photos/dwlxTSpfKXg',
        file_name: 'pliers05.avif',
        title: 'Slip joint pliers',
      },
      category: {
        id: '01KQKGY3Q0G9NP3XMCR2VWV08J',
        name: 'Pliers',
        slug: 'pliers',
      },
      brand: {
        id: '01KQKGY3CR9G63XNXTCGPPTGYZ0',
        name: 'ForgeFlex Tools',
      },
    },
  ],
};

test('should mock the products API response', async ({ page }) => {
  await page.route(productsApiUrl, route => route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify(mockProductsResponse),
  }));

  const result = await page.evaluate(async url => {
    const response = await fetch(url);
    return response.json();
  }, productsApiUrl);

  expect(result.data[0].name).toBe('Combination Pliers');
  expect(result.data.some(product => product.in_stock)).toBe(true);
});