/**
 * THEMES DATA
 * Each theme has:
 *   - id, title, icon, description
 *   - songs[]: array of { deezerId, title, artist, keywords[] }
 *     keywords: accepted answers that are related to the theme
 *
 * To add more themes, duplicate a theme block and fill in Deezer track IDs.
 * You can find track IDs at: https://www.deezer.com/track/<ID>
 */
const THEMES = [
  {
    id: "numbers",
    title: "Numbers",
    icon: "🔢",
    description: "Songs with a number in the title",
    songs: [
      { title: "Two Princes", artist: "Spin Doctors", keywords: ["two", "2"], keywordsFr: ["deux"] },
      { title: "One", artist: "U2", keywords: ["one", "1", "two", "2"], keywordsFr: ["un", "une", "deux"] },
      { title: "Seven Nation Army", artist: "The White Stripes", keywords: ["seven", "7"], keywordsFr: ["sept"] },
      { title: "Mambo No. 5", artist: "Lou Bega", keywords: ["five", "5"], keywordsFr: ["cinq"] }
    ]
  },
  {
    id: "days",
    title: "Days & Months",
    icon: "📅",
    description: "Songs with a day or month in the title",
    songs: [
      { title: "Ruby Tuesday", artist: "The Rolling Stones", keywords: ["tuesday"], keywordsFr: ["mardi"] },
      { title: "November Rain", artist: "Guns N' Roses", keywords: ["november", "rain"], keywordsFr: ["novembre", "pluie"] },
      { title: "Sunday Bloody Sunday", artist: "U2", keywords: ["sunday"], keywordsFr: ["dimanche"] },
      { title: "Wednesday Morning, 3 A.M.", artist: "Simon & Garfunkel", keywords: ["wednesday"], keywordsFr: ["mercredi"] },
      { title: "Saturday Night Fever", artist: "Bee Gees", keywords: ["saturday"], keywordsFr: ["samedi"] },
      { title: "December Song", artist: "George Michael", keywords: ["december"], keywordsFr: ["decembre"] }
    ]
  },
  {
    id: "weather",
    title: "Weather",
    icon: "🌦️",
    description: "Songs about weather phenomena",
    songs: [
      { title: "Here Comes the Sun", artist: "The Beatles", keywords: ["sun"], keywordsFr: ["soleil"] },
      { title: "Blowin' in the Wind", artist: "Bob Dylan", keywords: ["wind"], keywordsFr: ["vent"] },
      { title: "Let It Snow", artist: "Dean Martin", keywords: ["snow"], keywordsFr: ["neige"] },
      { title: "Fog on the Tyne", artist: "Lindisfarne", keywords: ["fog", "mist"], keywordsFr: ["brouillard", "brume"] }
    ]
  },
  {
    id: "cities",
    title: "Cities",
    icon: "🏙️",
    description: "Songs named after or about a city",
    songs: [
      { title: "Baker Street", artist: "Gerry Rafferty", keywords: ["london"], keywordsFr: ["londres"] },
      { title: "Streets of Philadelphia", artist: "Bruce Springsteen", keywords: ["philadelphia"], keywordsFr: ["philadelphie"] },
      { title: "Viva Las Vegas", artist: "Elvis Presley", keywords: ["las vegas", "vegas"], keywordsFr: [] },
      { title: "London Calling", artist: "The Clash", keywords: ["london", "calling"], keywordsFr: ["londres"] },
      { title: "Empire State of Mind", artist: "Jay-Z", keywords: ["york", "new york"], keywordsFr: [] }
    ]
  },
  {
    id: "food",
    title: "Food & Drink",
    icon: "🍕",
    description: "Songs about food or drink",
    songs: [
      { title: "Sugar", artist: "Maroon 5", keywords: ["sugar"], keywordsFr: ["sucre"] },
      { title: "Milkshake", artist: "Kelis", keywords: ["milkshake"], keywordsFr: [] },
      { title: "American Pie", artist: "Don McLean", keywords: ["pie", "american"], keywordsFr: ["tarte"] },
      { title: "Lemon Tree", artist: "Fools Garden", keywords: ["lemon"], keywordsFr: ["citron"] },
      { title: "Coffee & TV", artist: "Blur", keywords: ["coffee"], keywordsFr: ["cafe"] },
      { title: "Strawberry Fields Forever", artist: "The Beatles", keywords: ["strawberry"], keywordsFr: ["fraise"] },
      { title: "Red Red Wine", artist: "UB40", keywords: ["wine", "red"], keywordsFr: ["vin", "rouge"] }
    ]
  },
  {
    id: "body",
    title: "Body Parts",
    icon: "🫀",
    description: "Songs with a body part in the title",
    songs: [
      { title: "Head, Shoulders, Knees and Toes", artist: "Traditional", keywords: ["head", "shoulders", "knees", "toes"], keywordsFr: ["tete", "epaules", "genoux", "orteils"] },
      { title: "Legs", artist: "ZZ Top", keywords: ["legs"], keywordsFr: ["jambes"] },
      { title: "Hands", artist: "Jewel", keywords: ["hands"], keywordsFr: ["mains"] },
      { title: "Lips Are Movin", artist: "Meghan Trainor", keywords: ["lips"], keywordsFr: ["levres"] }
    ]
  },
  {
    id: "space",
    title: "Space",
    icon: "🚀",
    description: "Songs about space, stars and the cosmos",
    songs: [
      { title: "Rocket Man", artist: "Elton John", keywords: ["rocket"], keywordsFr: ["fusee"] },
      { title: "Starman", artist: "David Bowie", keywords: ["starman", "star"], keywordsFr: ["etoile"] },
      { title: "Life on Mars", artist: "David Bowie", keywords: ["mars", "life"], keywordsFr: ["vie"] },
      { title: "Fly Me to the Moon", artist: "Frank Sinatra", keywords: ["moon"], keywordsFr: ["lune"] },
      { title: "Galaxy", artist: "War", keywords: ["galaxy"], keywordsFr: ["galaxie"] },
      { title: "Supermassive Black Hole", artist: "Muse", keywords: ["black", "hole"], keywordsFr: ["trou", "noir"] }
    ]
  },
  {
    id: "movies",
    title: "Movies",
    icon: "🎬",
    description: "Songs from or about movies",
    songs: [
      { title: "My Heart Will Go On", artist: "Celine Dion", keywords: ["titanic"], keywordsFr: [] },
      { title: "Eye of the Tiger", artist: "Survivor", keywords: ["rocky"], keywordsFr: [] },
      { title: "Stayin Alive", artist: "Bee Gees", keywords: ["saturday", "night", "fever"], keywordsFr: ["nuit", "fievre"] },
      { title: "Ghostbusters", artist: "Ray Parker Jr.", keywords: ["ghostbusters"], keywordsFr: ["fantomes"] },
      { title: "Take My Breath Away", artist: "Berlin", keywords: ["top", "gun"], keywordsFr: [] },
      { title: "Circle of Life", artist: "Elton John", keywords: ["lion", "king"], keywordsFr: ["roi"] }
    ]
  },
  {
    id: "dance",
    title: "Dance",
    icon: "🕺",
    description: "Songs that make you dance",
    songs: [
      { title: "Dancing Queen", artist: "ABBA", keywords: ["queen"], keywordsFr: ["reine"] },
      { title: "Uptown Funk", artist: "Mark Ronson", keywords: ["funk"], keywordsFr: [] },
      { title: "Rhythm Is Gonna Get You", artist: "Gloria Estefan", keywords: ["rhythm"], keywordsFr: ["rythme"] }
    ]
  },
  {
    id: "night",
    title: "Night",
    icon: "🌙",
    description: "Songs about the night or darkness",
    songs: [
      { title: "Black Night", artist: "Deep Purple", keywords: ["black", "black night"], keywordsFr: ["noir", "nuit noire"] },
      { title: "Midnight Train to Georgia", artist: "Gladys Knight", keywords: ["midnight", "train"], keywordsFr: ["minuit", "train"] },
      { title: "Night Fever", artist: "Bee Gees", keywords: ["fever"], keywordsFr: ["fievre"] },
      { title: "Dancing in the Dark", artist: "Bruce Springsteen", keywords: ["dark"], keywordsFr: ["noir", "obscurite"] },
      { title: "Nightcall", artist: "Kavinsky", keywords: ["nightcall", "call"], keywordsFr: ["appel"] },
      { title: "Blinding Lights", artist: "The Weeknd", keywords: ["blinding", "lights"], keywordsFr: ["lumieres", "aveuglant"] }
    ]
  },
  {
    id: "sea",
    title: "Sea & Water",
    icon: "🌊",
    description: "Songs about the ocean, rivers and water",
    songs: [
      { title: "Octopus's Garden", artist: "The Beatles", keywords: ["octopus", "garden"], keywordsFr: ["pieuvre", "jardin"] },
      { title: "Beyond the Sea", artist: "Bobby Darin", keywords: ["beyond"], keywordsFr: ["au dela"] },
      { title: "Rock the Boat", artist: "Hues Corporation", keywords: ["boat", "ship", "sail"], keywordsFr: ["bateau", "naviguer"] },
      { title: "Sailing", artist: "Rod Stewart", keywords: ["sailing"], keywordsFr: ["naviguer", "voile"] },
      { title: "Under the Sea", artist: "Samuel E. Wright", keywords: ["under"], keywordsFr: ["sous"] },
      { title: "Waterloo", artist: "ABBA", keywords: ["waterloo"], keywordsFr: [] }
    ]
  },
  {
    id: "fire",
    title: "Fire & Heat",
    icon: "🔥",
    description: "Songs about fire, heat and burning",
    songs: [
      { title: "Burning Down the House", artist: "Talking Heads", keywords: ["burning", "house"], keywordsFr: ["bruler", "maison"] },
      { title: "We Didn't Start the Fire", artist: "Billy Joel", keywords: ["start the fire", "start"], keywordsFr: ["commencer"] },
      { title: "Ring of Fire", artist: "Johnny Cash", keywords: ["ring"], keywordsFr: ["anneau", "cercle"] },
      { title: "Great Balls of Fire", artist: "Jerry Lee Lewis", keywords: ["great", "balls"], keywordsFr: ["boules", "grand"] },
      { title: "Light My Fire", artist: "The Doors", keywords: ["light"], keywordsFr: ["lumiere", "feu"] },
      { title: "Firestarter", artist: "The Prodigy", keywords: ["firestarter", "starter"], keywordsFr: ["allumer"] }
    ]
  },
  {
    id: "travel",
    title: "Travel",
    icon: "🚗",
    description: "Songs about travelling and the open road",
    songs: [
      { title: "Vacation", artist: "The Go-Go's", keywords: ["vacation"], keywordsFr: ["vacances"] },
      { title: "Leaving On A Jet Plane", artist: "Peter, Paul, and Mary", keywords: ["jet plane", "jet"], keywordsFr: ["avion", "reaction"] },
      { title: "Road to Hell", artist: "Chris Rea", keywords: ["road to hell", "road"], keywordsFr: ["route", "enfer"] },
      { title: "Nightcall", artist: "Kavinsky", keywords: ["Drive", "ryan gosling"], keywordsFr: ["conduire"] },
      { title: "Highway to Hell", artist: "AC/DC", keywords: ["highway to hell", "highway"], keywordsFr: ["autoroute", "enfer"] }
    ]
  },
  {
    id: "money",
    title: "Money",
    icon: "💰",
    description: "Songs about money and wealth",
    songs: [
      { title: "Material Girl", artist: "Madonna", keywords: ["material", "material girl"], keywordsFr: ["materiel", "materialiste"] },
      { title: "Can't Buy Me Love", artist: "The Beatles", keywords: ["buy me love", "buy love"], keywordsFr: ["acheter", "amour"] },
      { title: "Rich Girl", artist: "Hall & Oates", keywords: ["rich girl"], keywordsFr: ["riche", "fille"] },
      { title: "Gold Digger", artist: "Kanye West", keywords: ["gold digger", "gold", "digger"], keywordsFr: ["or", "chercheuse"] },
      { title: "Mo Money Mo Problems", artist: "Notorious B.I.G.", keywords: ["mo money", "more money", "problem"], keywordsFr: ["plus d'argent", "problemes"] },
      { title: "Bills Bills Bills", artist: "Destiny's Child", keywords: ["bills"], keywordsFr: ["factures", "billets"] }
    ]
  },
  {
    id: "war",
    title: "War",
    icon: "☮️",
    description: "Songs about war, peace and conflict",
    songs: [
      { title: "Hymn To The Fallen", artist: "Katherine Jenkins", keywords: ["saving", "private", "ryan"], keywordsFr: ["sauver", "soldat"] },
      { title: "The Imitation Game", artist: "Alexandre Desplat", keywords: ["imitation", "game", "enigma", "turing"], keywordsFr: ["cumberbatch"] },
      { title: "Give Peace a Chance", artist: "John Lennon", keywords: ["peace"], keywordsFr: ["paix"] },
      { title: "Brothers in Arms", artist: "Dire Straits", keywords: ["brothers", "arms"], keywordsFr: ["freres", "armes"] },
      { title: "Imagine", artist: "John Lennon", keywords: ["peace"], keywordsFr: ["paix"] }
    ]
  },
  {
    id: "supernatural",
    title: "Supernatural",
    icon: "👻",
    description: "Songs about ghosts, magic and the supernatural",
    songs: [
      { title: "Season of the Witch", artist: "Donovan", keywords: ["witch"], keywordsFr: ["sorciere"] },
      { title: "Thriller", artist: "Michael Jackson", keywords: ["werewolf", "zombie", "undead"], keywordsFr: ["loup", "garou"] },
      { title: "Ghostbusters", artist: "Ray Parker Jr.", keywords: ["ghost", "ghostbusters"], keywordsFr: ["fantome"] },
      { title: "Black Magic Woman", artist: "Santana", keywords: ["black magic", "witch"], keywordsFr: ["magie noire", "sorciere"] },
      { title: "Superstition", artist: "Stevie Wonder", keywords: ["superstition"], keywordsFr: [] }
    ]
  },
  {
    id: "instruments",
    title: "Instruments",
    icon: "🎹",
    description: "Songs with an instrument in the title",
    songs: [
      { title: "Piano Man", artist: "Billy Joel", keywords: ["piano"], keywordsFr: [] },
      { title: "Tubular Bells", artist: "Mike Oldfield", keywords: ["tubular", "bell"], keywordsFr: ["cloche"] },
      { title: "Funky Drummer - Pt. 1 & 2", artist: "James Brown", keywords: ["drums"], keywordsFr: ["batterie", "tambour"] },
      { title: "Hells Bells", artist: "AC/DC", keywords: ["Hells Bells", "bell"], keywordsFr: ["cloche"] },
      { title: "Eruption (2015 Remaster)", artist: "Van Halen", keywords: ["guitar"], keywordsFr: ["guitare"] }
    ]
  },
  {
    id: "emotions",
    title: "Emotions",
    icon: "😢",
    description: "Songs named after an emotion",
    songs: [
      { title: "Happy", artist: "Pharrell Williams", keywords: ["happy"], keywordsFr: ["heureux", "heureuse", "bonheur"] },
      { title: "Mad World", artist: "Michael Andrews", keywords: ["mad"], keywordsFr: ["fou"] },
      { title: "Hurt", artist: "Johnny Cash", keywords: ["hurt"], keywordsFr: ["blesse", "douleur"] },
      { title: "Angry", artist: "The Rolling Stones", keywords: ["angry"], keywordsFr: ["enerve", "colere"] },
      { title: "Fear of the Dark", artist: "Iron Maiden", keywords: ["fear"], keywordsFr: ["peur", "appeure"] },
      { title: "Jealous Guy", artist: "John Lennon", keywords: ["jealous"], keywordsFr: ["jaloux"] }
    ]
  }
];
