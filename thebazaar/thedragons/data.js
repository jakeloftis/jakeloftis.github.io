// Add new rows here as { group, item, size, types } objects, then commit + push.
// size is one of: "Small", "Medium", "Large", "Main Item"
// types is an array of 0-2 category strings, e.g. ["Weapon", "Instrument"]
// The size/type filter dropdowns on the page populate themselves automatically
// from whatever values show up here, so new categories just work.

const itemData = [
  { group: "Group 1", item: "Guzheng", size: "Main Item", types: [] },
  { group: "Group 1", item: "Multimeter", size: "Main Item", types: [] },
  { group: "Group 1", item: "Tambourine", size: "Small", types: ["Weapon", "Instrument"] },
  { group: "Group 1", item: "Hover Pad", size: "Medium", types: ["Vehicle", "Tech"] },
  { group: "Group 1", item: "Guzheng", size: "Large", types: ["Instrument", "Weapon"] },
  { group: "Group 1", item: "Multimeter", size: "Small", types: ["Tool", "Tech"] },
  { group: "Group 1", item: "Mini Disc Launcher", size: "Small", types: ["Weapon", "Toy"] },
  { group: "Group 1", item: "Mini Keyboard", size: "Small", types: ["Instrument", "Tech"] },
  { group: "Group 1", item: "Jammer", size: "Small", types: ["Tech"] },

  { group: "Group 2", item: "Pipe Organ", size: "Main Item", types: [] },
  { group: "Group 2", item: "Keytar", size: "Main Item", types: [] },
  { group: "Group 2", item: "Rhythm Sticks", size: "Small", types: ["Weapon", "Instrument"] },
  { group: "Group 2", item: "Sound Engineer", size: "Small", types: ["Friend"] },
  { group: "Group 2", item: "Pipe Organ", size: "Large", types: ["Instrument"] },
  { group: "Group 2", item: "Fingerless Gloves", size: "Small", types: ["Apparel"] },
  { group: "Group 2", item: "Keytar", size: "Medium", types: ["Instrument", "Dragon"] },
  { group: "Group 2", item: "Maracas", size: "Small", types: ["Weapon", "Instrument"] },
  { group: "Group 2", item: "Lightstick", size: "Small", types: ["Toy"] },

  { group: "Group 3", item: "Superfan", size: "Main Item", types: [] },
  { group: "Group 3", item: "Hoodie", size: "Main Item", types: [] },
  { group: "Group 3", item: "Bandana", size: "Small", types: ["Apparel"] },
  { group: "Group 3", item: "Event Poster", size: "Small", types: ["Dragon"] },
  { group: "Group 3", item: "Visor", size: "Small", types: ["Apparel"] },
  { group: "Group 3", item: "Dragon Statue", size: "Small", types: ["Dragon", "Property"] },
  { group: "Group 3", item: "Superfan", size: "Medium", types: ["Friend", "Weapon"] },
  { group: "Group 3", item: "Maracas", size: "Small", types: ["Weapon", "Instrument"] },
  { group: "Group 3", item: "Patch", size: "Small", types: ["Friend", "Dragon"] },
  { group: "Group 3", item: "Hoodie", size: "Medium", types: ["Apparel", "Dragon"] },
];
