function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const favoriteFood = process.env.FAVORITE_FOOD;  
  const buildNumber = process.env.BUILD_NUM;  
  
  while(true) {
    console.log(`My favorite food is ${favoriteFood}`);    
    console.log(`Build #: ${buildNumber}`);    
    console.log('Containers rule!');
    await sleep(5000);
  }
}

main();
