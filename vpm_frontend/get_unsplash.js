const https = require('https');

https.get('https://unsplash.com/s/photos/medical-stethoscope-heart', {
  headers: {
    'User-Agent': 'Mozilla/5.0'
  }
}, (res) => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => {
    const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+/g;
    const matches = data.match(regex);
    if (matches) {
      console.log([...new Set(matches)].slice(0, 5));
    } else {
      console.log("No matches found.");
    }
  });
}).on('error', (e) => {
  console.error(e);
});
