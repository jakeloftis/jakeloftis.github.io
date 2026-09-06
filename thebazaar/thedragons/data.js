// Add new rows here as { group, item, size, types, mainItem } objects, then commit + push.
// size is one of: "Small", "Medium", "Large"
// types is an array of 0-2 category strings, e.g. ["Weapon", "Instrument"]
// mainItem: true marks this row as a group's crafted output (highlighted gold,
// gets a checkmark in the "Main Item" column). Most rows should be false.
// The filter dropdowns and table columns on the page populate themselves
// automatically from whatever values show up here, so new categories just work.

const itemData = [
  { group: "1", item: "Tambourine", size: "Small", types: ["Weapon", "Instrument"], mainItem: false },
  { group: "1", item: "Hover Pad", size: "Medium", types: ["Vehicle", "Tech"], mainItem: false },
  { group: "1", item: "Guzheng", size: "Large", types: ["Instrument", "Weapon"], mainItem: true },
  { group: "1", item: "Multimeter", size: "Small", types: ["Tool", "Tech"], mainItem: true },
  { group: "1", item: "Mini Disc Launcher", size: "Small", types: ["Weapon", "Toy"], mainItem: false },
  { group: "1", item: "Mini Keyboard", size: "Small", types: ["Instrument", "Tech"], mainItem: false },
  { group: "1", item: "Jammer", size: "Small", types: ["Tech"], mainItem: false },

  { group: "2", item: "Rhythm Sticks", size: "Small", types: ["Weapon", "Instrument"], mainItem: false },
  { group: "2", item: "Sound Engineer", size: "Small", types: ["Friend"], mainItem: false },
  { group: "2", item: "Pipe Organ", size: "Large", types: ["Instrument"], mainItem: true },
  { group: "2", item: "Fingerless Gloves", size: "Small", types: ["Apparel"], mainItem: false },
  { group: "2", item: "Keytar", size: "Medium", types: ["Instrument", "Dragon"], mainItem: true },
  { group: "2", item: "Maracas", size: "Small", types: ["Weapon", "Instrument"], mainItem: false },
  { group: "2", item: "Lightstick", size: "Small", types: ["Toy"], mainItem: false },

  { group: "3", item: "Bandana", size: "Small", types: ["Apparel"], mainItem: false },
  { group: "3", item: "Event Poster", size: "Small", types: ["Dragon"], mainItem: false },
  { group: "3", item: "Visor", size: "Small", types: ["Apparel"], mainItem: false },
  { group: "3", item: "Dragon Statue", size: "Small", types: ["Dragon", "Property"], mainItem: false },
  { group: "3", item: "Superfan", size: "Medium", types: ["Friend", "Weapon"], mainItem: true },
  { group: "3", item: "Maracas", size: "Small", types: ["Weapon", "Instrument"], mainItem: false },
  { group: "3", item: "Patch", size: "Small", types: ["Friend", "Dragon"], mainItem: false },
  { group: "3", item: "Hoodie", size: "Medium", types: ["Apparel", "Dragon"], mainItem: true },
];
