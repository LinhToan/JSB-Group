//////////////////////////////////////////////////////
///                                                ///
///           JS BEGINNER GROUP PROJECT            ///
///                                                ///
///        Save One Life, Save The Universe        ///
///                                                ///
//////////////////////////////////////////////////////
/*
  Now it's time to put all those new skill to the test!  We're going to create
  a little text based choose-your-own adventure game!
  Work together in your group to come up with the most creative story you can
  come up with. The more twists and turns the better!  You can definitely do
  better than this silly little example below.
  You'll notice some new functions used below (alert, confirm & prompt).  These
  are all built in browser functions.  They allow you to interact with the user by
  sending them messages or asking the questions.  With alert, you just send a message,
  but with confirm and prompt, you can save their response and use it to determine
  what your game should do next!
  DOCUMENTATION:  https://javascript.info/alert-prompt-confirm
  HAVE SOME FUN WITH IT!
*/

// We use an Object here to keep track of all our messages in one easy to access place.

const messages = {
  start: "Hey! We need your help saving the world. Join us as we search for an infinity stone. Would you like to travel in time to the past or future?",

  past: "When and where in history do you want to search? Year 1019 Jutland, Year 1867 Kyoto, Year 1315 Xanadu, or Year 1944 Amsterdam?",

  past1: "Year 1019 Jutland. There is rising hostilities against the Danish occupation of England. You must either join King Cnut\'s army or fight for English independence. Join or fight?",

  past2: "Year 1867 Kyoto. The bloodiest civil war in Japanese history rages on. You must either join the Shinsengumi or the Choshu faction. Shinsengumi or Choshu?",

  past3: "Year 1315 Xanadu. You find yourself in the siege of XiangYang fighting for Kublai Khan. Do you man a trebuchet or charge into the city? Trebuchet or charge?",

  past4: "Year 1944 Amsterdam. You've spent some time in the Opekta offices and sometimes hear noises above you. Do you want to report this strange noise or not? Yes or no?",
  
  past1A: "Welcome to the Cnut army! Let\'s prepare for battle! The battlefield is chaotic. You hear nothing but shouts and metal clanging against metal. It's so loud that you don't hear someone running up behind you to stab you through the heart. You die. When you open your eyes, you find yourself in a familiar situation...",
  
  past2A: "You join the Choshu Faction to fight for western imperialists. During monsoon season you stay out in the rain for a little too long and catch pneumonia. You die. When you open your eyes, you find yourself in a familiar situation...",
  
  past3A: "You charge into the city but get hit by a random arrow. You die. When you open your eyes, you find yourself in a familiar situation...",

  past4A: "You report the noise to the gestapo, but they beat you to death for bothering them. You die. When you open your eyes, you find yourself in a familiar situation...",
  
  past1B: "You stand with the English now. You train almost every day and take care of errands on your off days. While writing a letter to an old friend you get a paper cut. Unfortunately medicine doesn't exist yet. You die. When you open your eyes, you find yourself in a familiar situation...",
  
  past2B: "You are now a part of the Shinsengumi. While patrolling the streets at night, a man with long red hair and a cross-shaped scar on his left cheek runs up to you and kills you. You die. When you open your eyes, you find yourself in a familiar situation...",
  
  past3B: "You operate a nearby trebuchet. Oils land on your trebuchet and it gets set alight by flaming arrows. The flames jump onto you and you burn alive. You die. When you open your eyes, you find yourself in a familiar situation...",
  
  past4B: "You decide not to report anything and go on with your life. One day you hear rumors of Red Skull's army experimenting a strange stone. You sneak into their facilities to steal the stone. Turns out it\'s the infinity stone you need. Now you can travel to the future.",
  
  future: "The future is dark and scary and full of creepy clown dentists. Good luck ahead! You can travel with Starlord and the Guardians of the Galaxy or go on a space patrol with Buzz LightYear. Starlord or Buzz?",
  
  future1: "With the infinity stone in hand and the Guardians of the Galaxy working alongside you, you save the universe! Now you can escape from the timeloop to save the timeline. You win!",

  future2: "You go to infinity and beyond with Buzz Lightyear. You run into a massive shapeshifting spaceship that blows you to smithereens. The world ends. Better luck in your next life."
}

//framework
// node 1 Past or future
  // past
    // past1
      //past1a  --> death / lose
      //past1b --> restart game
    // past2
      //past2a --> restart game
      //past2b  --> death / lose
    // past3
      //past3a  --> death / lose
      //past3b --> restart game
    // past4
      //past4a  --> death / lose
      //past4b --> Win / find infinity stone
  //future
    //future2 --> death / lose
    //future1 --> Win / find infinity stone

function beginGame() {
  // 'confirm' shows a message and waits for the user to press “OK” or “CANCEL”. It returns true for OK and false for CANCEL/Esc.
  const response = prompt(messages.start);
  // The player can travel to the past or the future.
  if (response.toLowerCase() === 'past') {
    pastBranch();
  } else if (response.toLowerCase() === 'future') {
    futureBranch();
  } else {
    beginGame();
  }
}

function pastBranch() {
  const response = prompt(messages.past);
  // Transports the player to Jutland in the year 1019, during King Cnut's reign as the king of Denmark, Norway, England, and some of Sweden.
  if (response.toLowerCase() === 'year 1019 jutland') {
    past1Branch();

  // Transports the player to the Kyoto in the year 1867, towards the tail end of the Meiji Revolution. A Japanese civil war fought to preserve the Tokugawa shogunate or to adopt western democracy.
  } else if (response.toLowerCase() === 'year 1867 kyoto') {
    past2Branch();
  
  // Transports the player to Xanadu in the year 1315, approximately when Kublai Khan conquered China. The Mongol Empire is the second largest empire in human history if you go by landmass. First is the Britain with colonies at the height of their naval and economic power.
  } else if (response.toLowerCase() === 'year 1315 xanadu') {
    past3Branch();

  // Transports the player to Amsterdam in the year 1944, the year when Anne Frank and her family were caught.
  } else if (response.toLowerCase() === 'year 1944 amsterdam') {
    past4Branch();
  } else {

  // Starts the game over. The in-game explanation is the player is stuck in a time loop until they can figure out how to save the world.
    beginGame();
  }
}

function past1Branch() {
  const response = prompt(messages.past1);
  //The player arrives in Jutland in the year 1019. The player is presented with the choice to either join Cnut's army or fight for English independence.
  if (response.toLowerCase() === 'join') {
    alert(messages.past1A); 
    beginGame();
  //If the player chooses to join Cnut's army, they are directed to the beginning of the game
  } else if (response.toLowerCase() === 'fight') {
    alert(messages.past1B);
    beginGame();
    //If the player chooses to join Cnut's army, they are directed to the beginning of the game
  } else {
     beginGame();
     //any other responses will also lead the player back to the beginning of the game
  }
} 

function past2Branch() {
  const response = prompt(messages.past2);
  //The player arrives in 1867 Kyoto and is presented with two choices: to join either the Shinsengumi or the Choshu factions. 
  if (response.toLowerCase() === 'shinsengumi') {
    alert(messages.past2B); 
    beginGame();
    //If the player chooses Shinsengumi, they are directed to the beginning of the game
  } else if (response.toLowerCase() === 'choshu') {
    alert(messages.past2A);
    beginGame();
     //If the player chooses to join Chosu, they are directed to the beginning of the game
  } else {
     beginGame();
     //any other responses will also lead the player back to the beginning of the game
  }
} 

// same logic is used as function past2branch
function past3Branch() {
  const response = prompt(messages.past3);
  if (response.toLowerCase() === 'trebuchet') {
    alert(messages.past3B); 
    beginGame();
  } else if (response.toLowerCase() === 'charge') {
    alert(messages.past3A);
    beginGame();
  } else {
     beginGame();
  }
} 

// same logic is used as function past2branch
function past4Branch() {
  const response = prompt(messages.past4);
  if (response.toLowerCase() === 'yes') {
    alert(messages.past4A);
    beginGame();
  } else if (response.toLowerCase() === 'no') {
    alert(messages.past4B);
    futureBranch();
  } else {
     beginGame();
  }
}

function futureBranch() {
  const response = prompt(messages.future);

 // Player has retrieved the inifinity stone and has saved the universe.
  if (response.toLowerCase() === 'starlord') {
    alert(messages.future1);

  // Player goes infinity and beyond with Buzz but crosses paths with a massive shapeshifting spaceship along the way that puts an end to the journey. 
  } else if (response.toLowerCase() === 'buzz') {
    alert(messages.future2);
    beginGame();

  } else {
    
    // Starts the game over. The in-game explanation is the player is stuck in a time loop until they can figure out how to save the world. 
    beginGame();
  }
}

beginGame();