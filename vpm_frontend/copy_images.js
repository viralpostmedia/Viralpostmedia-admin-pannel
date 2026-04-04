const fs = require('fs');

const imagesToCopy = [
  {
    src: 'C:\\Users\\QA3\\.gemini\\antigravity\\brain\\48c54a82-1d54-46a5-ae46-5760a7c63351\\prank_videos_refined_image_1775113164546.png',
    dest: 'C:\\Users\\QA3\\Desktop\\vpm\\public\\pranks.png'
  },
  {
    src: 'C:\\Users\\QA3\\.gemini\\antigravity\\brain\\48c54a82-1d54-46a5-ae46-5760a7c63351\\healthcare_heart_stethoscope_refined_1775113185090.png',
    dest: 'C:\\Users\\QA3\\Desktop\\vpm\\public\\healthcare.png'
  },
  {
    src: 'C:\\Users\\QA3\\.gemini\\antigravity\\brain\\48c54a82-1d54-46a5-ae46-5760a7c63351\\nagadurga_folk_dancer_refined_1775113205941.png',
    dest: 'C:\\Users\\QA3\\Desktop\\vpm\\public\\folk_dancer.png'
  }
];

imagesToCopy.forEach(({src, dest}) => {
  fs.copyFileSync(src, dest);
  console.log(`Copied ${src} to ${dest}`);
});
