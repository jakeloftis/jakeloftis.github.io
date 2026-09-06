// Add new rows here as { group, item, size, types, mainItem, aux } objects, then commit + push.
// size is one of: "Small", "Medium", "Large"
// types is an array of 0-2 category strings, e.g. ["Weapon", "Instrument"]
// mainItem: true marks this row as a group's crafted output (gets a checkmark
// in the "Main/Aux" column). aux: true marks it as the auxiliary main item for
// its group (colored blue instead of gold). Most rows should have both false.
// The filter dropdowns and table columns on the page populate themselves
// automatically from whatever values show up here, so new categories just work.

const itemData = [
  { group: "1", item: "Tambourine", size: "Small", types: ["Weapon", "Instrument"], mainItem: false, aux: false },
  { group: "1", item: "Hover Pad", size: "Medium", types: ["Vehicle", "Tech"], mainItem: false, aux: false },
  { group: "1", item: "Guzheng", size: "Large", types: ["Instrument", "Weapon"], mainItem: true, aux: false },
  { group: "1", item: "Multimeter", size: "Small", types: ["Tool", "Tech"], mainItem: true, aux: true },
  { group: "1", item: "Mini Disc Launcher", size: "Small", types: ["Weapon", "Toy"], mainItem: false, aux: false },
  { group: "1", item: "Mini Keyboard", size: "Small", types: ["Instrument", "Tech"], mainItem: false, aux: false },
  { group: "1", item: "Jammer", size: "Small", types: ["Tech"], mainItem: false, aux: false },

  { group: "2", item: "Rhythm Sticks", size: "Small", types: ["Weapon", "Instrument"], mainItem: false, aux: false },
  { group: "2", item: "Sound Engineer", size: "Small", types: ["Friend"], mainItem: false, aux: false },
  { group: "2", item: "Pipe Organ", size: "Large", types: ["Instrument"], mainItem: true, aux: false },
  { group: "2", item: "Fingerless Gloves", size: "Small", types: ["Apparel"], mainItem: false, aux: false },
  { group: "2", item: "Keytar", size: "Medium", types: ["Instrument", "Dragon"], mainItem: true, aux: true },
  { group: "2", item: "Maracas", size: "Small", types: ["Weapon", "Instrument"], mainItem: false, aux: false },
  { group: "2", item: "Lightstick", size: "Small", types: ["Toy"], mainItem: false, aux: false },

  { group: "3", item: "Bandana", size: "Small", types: ["Apparel"], mainItem: false, aux: false },
  { group: "3", item: "Event Poster", size: "Small", types: ["Dragon"], mainItem: false, aux: false },
  { group: "3", item: "Visor", size: "Small", types: ["Apparel"], mainItem: false, aux: false },
  { group: "3", item: "Dragon Statue", size: "Small", types: ["Dragon", "Property"], mainItem: false, aux: false },
  { group: "3", item: "Superfan", size: "Medium", types: ["Friend", "Weapon"], mainItem: true, aux: false },
  { group: "3", item: "Maracas", size: "Small", types: ["Weapon", "Instrument"], mainItem: false, aux: false },
  { group: "3", item: "Patch", size: "Small", types: ["Friend", "Dragon"], mainItem: false, aux: false },
  { group: "3", item: "Hoodie", size: "Medium", types: ["Apparel", "Dragon"], mainItem: true, aux: true },
];
