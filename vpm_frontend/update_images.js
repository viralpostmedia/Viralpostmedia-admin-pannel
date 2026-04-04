const fs = require('fs');
const path = 'c:/Users/QA3/Desktop/vpm/src/data/frames.ts';
let content = fs.readFileSync(path, 'utf8');

const urls = [
  'https://image.pollinations.ai/prompt/Cinematic-ultra-realistic-digital-media-marketing-control-room-monitors-4k?width=600&height=800&nologo=true&seed=101',
  'https://image.pollinations.ai/prompt/Cinematic-ultra-realistic-professional-video-camera-Red-setup-in-studio-4k?width=600&height=800&nologo=true&seed=102',
  'https://image.pollinations.ai/prompt/Cinematic-ultra-realistic-high-end-podcast-microphone-studio-mood-lighting?width=600&height=800&nologo=true&seed=103',
  'https://image.pollinations.ai/prompt/Cinematic-ultra-realistic-modern-news-anchor-desk-global-broadcast-studio?width=600&height=800&nologo=true&seed=104',
  'https://image.pollinations.ai/prompt/Cinematic-ultra-realistic-professional-executive-sit-down-interview-studio?width=600&height=800&nologo=true&seed=105',
  'https://image.pollinations.ai/prompt/Cinematic-ultra-realistic-street-photography-people-laughing-candid-4k?width=600&height=800&nologo=true&seed=106',
  'https://image.pollinations.ai/prompt/Cinematic-ultra-realistic-film-slate-on-set-with-director-chair-mood-lighting?width=600&height=800&nologo=true&seed=107',
  'https://image.pollinations.ai/prompt/Cinematic-ultra-realistic-futuristic-holographic-learning-classroom-technology?width=600&height=800&nologo=true&seed=108',
  'https://image.pollinations.ai/prompt/Cinematic-ultra-realistic-high-end-sleek-gadgets-on-a-studio-table-macro?width=600&height=800&nologo=true&seed=109',
  'https://image.pollinations.ai/prompt/Cinematic-ultra-realistic-luxury-sports-car-on-coastal-highway-sunset?width=600&height=800&nologo=true&seed=110',
  'https://image.pollinations.ai/prompt/Cinematic-ultra-realistic-vintage-film-projector-in-dark-theater-4k?width=600&height=800&nologo=true&seed=111',
  'https://image.pollinations.ai/prompt/Cinematic-ultra-realistic-executive-boardroom-high-rise-city-night-view?width=600&height=800&nologo=true&seed=112',
  'https://image.pollinations.ai/prompt/Cinematic-ultra-realistic-minimalist-modern-smart-home-interior-sunlight?width=600&height=800&nologo=true&seed=113',
  'https://image.pollinations.ai/prompt/Cinematic-ultra-realistic-modern-healthcare-technology-wellness-clinic?width=600&height=800&nologo=true&seed=114',
  'https://image.pollinations.ai/prompt/Cinematic-ultra-realistic-stock-market-trading-setup-graphs-glowing?width=600&height=800&nologo=true&seed=115',
  'https://image.pollinations.ai/prompt/Cinematic-ultra-realistic-influential-leader-speaking-on-stage-spotlight?width=600&height=800&nologo=true&seed=116',
  'https://image.pollinations.ai/prompt/Cinematic-ultra-realistic-high-end-gaming-setup-neon-lights-4k?width=600&height=800&nologo=true&seed=117',
  'https://image.pollinations.ai/prompt/Cinematic-ultra-realistic-headphones-on-dj-deck-neon-club-lighting?width=600&height=800&nologo=true&seed=118',
  'https://image.pollinations.ai/prompt/Cinematic-ultra-realistic-acoustic-guitar-in-warm-cozy-indie-studio?width=600&height=800&nologo=true&seed=119',
  'https://image.pollinations.ai/prompt/Cinematic-ultra-realistic-global-world-map-digital-technology-hologram?width=600&height=800&nologo=true&seed=120',
  'https://image.pollinations.ai/prompt/Cinematic-ultra-realistic-social-media-influencer-vlogging-ring-light-setup?width=600&height=800&nologo=true&seed=121'
];

let i = 0;
content = content.replace(/image: 'https:\/\/images\.unsplash\.com\/photo-[^']+'/g, () => {
    return `image: '${urls[i++]}'`;
});

fs.writeFileSync(path, content);
console.log('done replacing images');
