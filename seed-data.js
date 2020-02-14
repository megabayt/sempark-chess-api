const axios = require('axios');

let roomNo = 1;

const getRoomType = (sectionIndex, flatIndex) => {
  switch (sectionIndex + 1) {
    case 1:
      switch (flatIndex + 1) {
        case 1:
          return '3';
        case 2:
          return '1';
        case 3:
          return '2';
        case 4:
          return '2';
      }
    case 2:
      switch (flatIndex + 1) {
        case 1:
          return '1';
        case 2:
          return 'C';
        case 3:
          return '1';
        case 4:
          return '1';
        case 5:
          return '2';
        case 6:
          return '3';
        case 7:
          return '1';
      }
    case 3:
      switch (flatIndex + 1) {
        case 1:
          return '3';
        case 2:
          return '1';
        case 3:
          return '2';
        case 4:
          return '2';
      }
    case 4:
      switch (flatIndex + 1) {
        case 1:
          return '3';
        case 2:
          return '1';
        case 3:
          return '2';
        case 4:
          return '2';
      }
    case 5:
      switch (flatIndex + 1) {
        case 1:
          return '1';
        case 2:
          return '3';
        case 3:
          return '2';
        case 4:
          return '1';
        case 5:
          return '1';
        case 6:
          return 'C';
        case 7:
          return '1';
      }
    case 6:
      switch (flatIndex + 1) {
        case 1:
          return '3';
        case 2:
          return '1';
        case 3:
          return '2';
        case 4:
          return '2';
      }
  }
}

const sleep = () => new Promise(resolve => setTimeout(resolve, 250));

[...new Array(6)].forEach(async function (_, sectionIndex) {
  const isAngle = (sectionIndex + 1) === 2 || (sectionIndex + 1) === 5;
  const sectionRef = await axios.post('https://api.sempark.xyz/sections', {
    number: sectionIndex + 1,
  });
  [...new Array(isAngle ? 20 : 25)].forEach(async (_, floorIndex) => {
    const floorRef = await axios.post('https://api.sempark.xyz/floors', {
      number: floorIndex + 1,
      section: sectionRef.data.id,
    });
    [...new Array(isAngle ? 7 : 4)].forEach(async (_, flatIndex) => {
      await sleep();
      const flatRef = await axios.post('https://api.sempark.xyz/flats', {
        floor: floorRef.data.id,
        roomNo: floorIndex === 0 ? '-' : roomNo++,
        roomType: floorIndex === 0 ? '-' : getRoomType(sectionIndex, flatIndex),
        contactInfo: '',
      });
    });
  });
});
