var health = 40;
var enemyhealth = 10;
var playing = true;
var wins = 0;
while (playing) {
    if (wins === 3) {
      console.log("You won the game!");
      break;    
}
health -= Math.floor(Math.random() *2) + 1;
enemyHealth -= Math.floor(Math.random() * 2) + 1;
console.log("My health is " + health);
console.log("Grant's health is" + enemyHealth);
if (enemyHealth <= 0) {
    wins++;
    enemyHealth = 10;
    console.log("You have won the fight!");
  }    
}