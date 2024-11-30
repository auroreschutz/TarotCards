const tarotDeck = [
  {
    name: "The Fool",
    image: "cards/i_tarotfool.webp",
    character: "Nëreys Zal Talii",
    meaning: "Beginnings, Freedom, Innocence, Originality, Idealism",
  },
  {
    name: "The Magician",
    image: "cards/i_tarotpetrea.webp",
    character: "Petrea of Shedra",
    meaning:
      "Desire, Willpower, Manipulation, Cunning, Trickery, Illusion, Deception, Wasted talent",
  },
  {
    name: "The High Priestess",
    image: "cards/i_tarotnalani.webp",
    character: "Nalani Dawnstar",
    meaning:
      "Intuition, Mysteries, Secrets, Spirituality, Higher power, Losing your authentic self, Hidden motive",
  },
  {
    name: "The Empress",
    image: "cards/i_tarotempress.webp",
    character: "Wes Oltyss",
    meaning: "Femininity, Beauty, Creativity, Sensuality, Abundance",
  },
  {
    name: "The Emperor",
    image: "cards/i_emperorlysha.webp",
    character: "Lysha of Shedra",
    meaning:
      "Authority, Power, Structure, Control, Protection, Tyrant, Dominant, Rigid",
  },
  {
    name: "The Hierophant",
    image: "cards/i_tarotorne.webp",
    character: "Orne Goldbloom",
    meaning: "Tradition, Education, Knowledge, Beliefs, New methods",
  },
  {
    name: "The Lovers",
    image: "cards/i_tarotlovers.webp",
    character: "Dolvan & Nyrea",
    meaning:
      "Love, Unions, Partnerships, Relationships, Choices, Romance, Balance, Unity",
  },
  {
    name: "The Chariot",
    image: "cards/i_tarotsheerah.webp",
    character: "Sheerah of Ophis",
    meaning: "Control, Willpower, Focus, Success, Self-confidence",
  },
  {
    name: "Strength",
    image: "cards/i_tarotalsim.webp",
    character: "Alsim of Shedra",
    meaning:
      "Concentration, Control, Self-confidence, Endurance, Losing control",
  },
  {
    name: "The Hermit",
    image: "cards/i_tarotseth.webp",
    character: "Seth of Shedra",
    meaning:
      "Loneliness, Teaching, Self-reflection, Repeating the same mistakes, Lack of insight",
  },
  {
    name: "The Wheel of Fortune",
    image: "cards/i_tarotpetrea.webp",
    character: "Nyrea & Nalani",
    meaning: "Change, Cycles, Fate, Decisive moments, Unexpected events",
  },
  {
    name: "Justice",
    image: "cards/i_tarotjustice.webp",
    character: "Zephirel Nefeli",
    meaning: "Honesty, Truth, Justice, Fairness",
  },
  {
    name: "The Hanged Man",
    image: "cards/i_tarothangedman.webp",
    character: "Sean Beryl",
    meaning:
      "Waiting, Uncertainty, Lack of direction, Stalling, Disinterest, Stagnation, Avoiding sacrifice",
  },
  {
    name: "Death",
    image: "cards/i_tarotoranh.webp",
    character: "Oranh, King of Dragons",
    meaning: "End of cycle, Change, Transition, Liberation, Stagnation",
  },
  {
    name: "Temperance",
    image: "cards/i_tarotvenus.webp",
    character: "Venus Dragmire",
    meaning: "Balance, Peace, Patience, Moderation, Calm",
  },
  {
    name: "The Devil",
    image: "cards/i_tarotdevil.webp",
    character: "Sorel Blacksun",
    meaning:
      "Oppression, Addiction, Obsession, Dependency, Excess, Powerlessness, Reclaiming power, Reclaiming control",
  },
  {
    name: "The Tower",
    image: "cards/i_tarotnyrea.webp",
    character: "Nyrea Skyrider",
    meaning:
      "Sudden change, Upheaval, Chaos, Revelation, Awakening, Personal transformation",
  },
  {
    name: "The Star",
    image: "cards/i_tarotdolvan.webp",
    character: "Dolvan Blacksun",
    meaning:
      "Hope, Inspiration, Faith, Healing, Loss of hope, Existential lack",
  },
  {
    name: "The Moon",
    image: "cards/i_tarotkyara.webp",
    character: "Kyara Scylla",
    meaning: "Secrets, Intuition, Fears, Illusions, Revelations",
  },
  {
    name: "The Sun",
    image: "cards/i_tarotkalas.webp",
    character: "Kalas of Ophis",
    meaning:
      "Optimism, Joy, Success, Unrealized potential, Confidence, Unrealistic expectations",
  },
  {
    name: "Judgement",
    image: "cards/i_tarotsaarkeh.webp",
    character: "Saar'Keh",
    meaning:
      "Self-evaluation, Awakening, Renewal, Purpose, Reflection, Reckoning",
  },
  {
    name: "The World",
    image: "cards/i_tarotizel.webp",
    character: "Izel Astrae",
    meaning: "Harmony, Fulfillment, Inertia, Unfinished cycle",
  },
];

const drawButton = document.getElementById("drawButton");
const cardContainer = document.getElementById("cardContainer");
const cardDetails = document.getElementById("cardDetails");

drawButton.addEventListener("click", () => {
  // Clear previous cards
  cardContainer.innerHTML = "";
  cardDetails.innerHTML = "";

  // Shuffle and pick 3 random cards
  const shuffledDeck = tarotDeck.sort(() => Math.random() - 0.5);
  const drawnCards = shuffledDeck.slice(0, 3);

  // Display the cards
  drawnCards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    // Create the back face
    const cardBack = document.createElement("div");
    cardBack.classList.add("card-back");

    // Create the front face
    const cardFront = document.createElement("div");
    cardFront.classList.add("card-front");
    cardFront.style.backgroundImage = `url(${card.image})`;

    // Append front and back to the card
    cardElement.appendChild(cardBack);
    cardElement.appendChild(cardFront);

    // Handle card click to reveal
    cardElement.addEventListener("click", () => {
      cardElement.classList.add("revealed");

      // Clear previous card details
      cardDetails.innerHTML = "";

      // h2
      const cardName = document.createElement("h2");
      cardName.textContent = card.name;
      cardDetails.appendChild(cardName);

      // h3
      const cardCharacter = document.createElement("h3");
      cardCharacter.textContent = card.character;
      cardDetails.appendChild(cardCharacter);

      // p
      const cardMeaning = document.createElement("p");
      cardMeaning.textContent = card.meaning;
      cardDetails.appendChild(cardMeaning);
    });

    cardContainer.appendChild(cardElement);
  });
});
