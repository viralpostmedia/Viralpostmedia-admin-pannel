const fs = require('fs');
const path = 'c:/Users/QA3/Desktop/vpm/src/data/frames.ts';

fs.copyFileSync('C:/Users/QA3/.gemini/antigravity/brain/1ab2a690-dae9-4f63-a1aa-5737f39f5291/heart_stethoscope_1775120788809.png', 'c:/Users/QA3/Desktop/vpm/public/health_custom.png');
fs.copyFileSync('C:/Users/QA3/.gemini/antigravity/brain/1ab2a690-dae9-4f63-a1aa-5737f39f5291/nagadurga_dancer_1775120808353.png', 'c:/Users/QA3/Desktop/vpm/public/nagadurga_custom.png');

let content = fs.readFileSync(path, 'utf8');

const urls = [
  'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600',
  '/health_custom.png',
  'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=600',
  '/nagadurga_custom.png',
  'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600'
];

let i = 0;
content = content.replace(/image: 'https:\/\/image\.pollinations\.ai\/prompt\/[^']+'/g, () => {
    return `image: '${urls[i++]}'`;
});

fs.writeFileSync(path, content);
console.log('done replacing back to unsplash and custom paths');
