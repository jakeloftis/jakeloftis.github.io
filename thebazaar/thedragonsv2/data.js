// Full item list for The Dragons hero in The Bazaar, sourced from Mobalytics
// (https://mobalytics.gg/the-bazaar/the-dragons-items).
// Each row: name, size, category tags, cooldown (null for passives),
// and the base ability text. Enchantment effects (Golden, Heavy, Icy, etc.)
// are intentionally left out to keep this page focused and readable.
//
// To add a new item, append another object in the same shape:
// { name: '...', size: 'Small'|'Medium'|'Large', types: ['Weapon', ...], cooldown: '4 seconds' | null, text: ['...'] }

const dragonsItems = [
  { name: 'Aila Chibi', size: 'Small', types: ['Toy', 'Weapon', 'Friend'], cooldown: '4 seconds', text: [
    'Deal 10 > 20 > 40 > 80 Damage',
    'Adjacent items have +10 > 20 > 30 > 40'
  ] },
  { name: 'Amp', size: 'Medium', types: ['Tech', 'Tool'], cooldown: '8 > 6 seconds', text: [
    'Haste adjacent items 3 second(s)',
    '♫ 4 : Double the damage of the item to the right'
  ] },
  { name: 'A Note', size: 'Small', types: [], cooldown: null, text: [
    'When you sell this, get an A Note if able',
    'Then get an Enchanted small Weapon item from any Hero'
  ] },
  { name: 'Arcade Machine', size: 'Medium', types: ['Property', 'Toy', 'Tech', 'Weapon'], cooldown: '5 seconds', text: [
    'Deal 25 > 50 > 100 > 200 Damage',
    'For each 10 Tempo you gain, this has +1 Multicast'
  ] },
  { name: 'Backstage Pass', size: 'Small', types: [], cooldown: null, text: [
    'When you visit a Merchant, this permanently gains 1 > 2 > 3 Sell Price value',
    'When you sell this, reroll your hourly Encounters'
  ] },
  { name: 'Backup Dancer', size: 'Medium', types: ['Friend'], cooldown: '3 seconds', text: [
    'Heal 5 > 10 > 15 for each Tempo you have',
    'Shield 5 > 10 > 15 for each Tempo you have'
  ] },
  { name: 'Bandana', size: 'Small', types: ['Apparel'], cooldown: '6 seconds', text: [
    'Shield 20 > 40 > 80 > 160',
    'When you Crit, reduce this item\'s cooldown by 1 second'
  ] },
  { name: 'Bangles', size: 'Small', types: ['Apparel', 'Weapon'], cooldown: '4 seconds', text: [
    'Deal 6 Damage',
    'When you use an adjacent Weapon, this and it gain 3 > 6 > 9 > 12 Damage'
  ] },
  { name: 'Bass', size: 'Medium', types: ['Weapon', 'Instrument'], cooldown: '5 seconds', text: [
    'Deal 40 Damage',
    'When you Slow, this gains 20 > 40 > 80'
  ] },
  { name: 'Bedazzler', size: 'Small', types: ['Tool'], cooldown: '6 seconds', text: [
    'Enchant 1 > 2 > 3 > 4 non-enchanted item(s)'
  ] },
  { name: 'Black Lipstick', size: 'Small', types: ['Apparel'], cooldown: null, text: [
    'At the start of each fight, gain 4 > 6 > 8 > 10 Tempo.'
  ] },
  { name: 'Blades', size: 'Medium', types: ['Weapon', 'Apparel'], cooldown: '6 seconds', text: [
    '♫ 1 : Haste 2 item(s) 1 > 2 second(s)',
    'When you Haste, deal 25 > 50 Damage'
  ] },
  { name: 'B Note', size: 'Small', types: [], cooldown: null, text: [
    'When you sell this, get a B Note if able',
    'Then get an Enchanted small Burn item from any Hero'
  ] },
  { name: 'Bomber Jacket', size: 'Medium', types: ['Apparel'], cooldown: '5 > 4 seconds', text: [
    'A Dragon gains +1 Multicast'
  ] },
  { name: 'Bongos', size: 'Small', types: ['Instrument'], cooldown: '3 seconds', text: [
    '2 items gain 5 > 10 > 15 > 20 Damage'
  ] },
  { name: 'Boombox', size: 'Medium', types: ['Tech'], cooldown: null, text: [
    'Adjacent items have +10 > 20 > 30% Crit Chance',
    'When you Crit with an adjacent item, your items gain 10 > 20 > 30 Damage and 10 > 20 > 30 Shield'
  ] },
  { name: 'Boom Mic', size: 'Medium', types: ['Tool', 'Weapon'], cooldown: '6 seconds', text: [
    'Deal 20 Damage',
    'When you use an Instrument or Tempo item, this gains 10 > 20 > 40 > 80 Damage'
  ] },
  { name: 'Bubble Gum', size: 'Small', types: ['Food'], cooldown: '3 seconds', text: [
    'Heal 10 > 20 > 40 > 80',
    'Every 3rd use, gain 5 Tempo'
  ] },
  { name: 'Choker', size: 'Small', types: ['Apparel'], cooldown: null, text: [
    'Your items have +3 > 4 > 5% Crit chance for each Apparel or Dragon item you have'
  ] },
  { name: 'Chronos Chibi', size: 'Small', types: ['Toy', 'Friend'], cooldown: '4 seconds', text: [
    'Haste 1 > 2 > 3 item(s) 1 second(s)',
    'When you use an adjacent Toy, gain 1 Tempo'
  ] },
  { name: 'C Note', size: 'Small', types: [], cooldown: null, text: [
    'When you sell this, get a C Note if able',
    'Then get an Enchanted small Slow item from any Hero'
  ] },
  { name: 'Cobweb Chibi', size: 'Small', types: ['Toy', 'Friend'], cooldown: '4 seconds', text: [
    'Slow 1 > 2 > 3 item(s) 1 second(s)',
    'When you use an adjacent Toy, gain 1 Tempo'
  ] },
  { name: 'Concert Hall', size: 'Large', types: ['Property'], cooldown: null, text: [
    'Your Instruments have +1 Multicast',
    'When you use an Instrument on a matching Note, gain 1 Tempo'
  ] },
  { name: 'Confetti Cannon', size: 'Small', types: ['Toy'], cooldown: '5 seconds', text: [
    'Ammo Max: 1',
    'Burn 5 > 10 > 15 > 20',
    'Gain 1 Tempo for each Toy or Burn item you have'
  ] },
  { name: 'Cymbal', size: 'Medium', types: ['Instrument', 'Weapon'], cooldown: '4 seconds', text: [
    'Deal 15 > 30 > 60 > 120 Damage',
    '♫ 1 : Deal 15 > 30 > 60 > 120 Damage',
    '♫ 2 : Deal 15 > 30 > 60 > 120 Damage'
  ] },
  { name: 'Death Metal Drum Kit', size: 'Large', types: ['Weapon', 'Instrument'], cooldown: '6 seconds', text: [
    'Deal 100 > 150 Damage',
    'Burn equal to 10% of this item\'s Damage',
    'When you use this, spend ♫ 4 to use it again'
  ] },
  { name: 'Disco Drone', size: 'Small', types: ['Drone', 'Friend', 'Tech'], cooldown: '4 seconds', text: [
    'Shield 20 > 40 > 80 > 160',
    '♫ 8 : Charge your other items 1 second(s)'
  ] },
  { name: 'D Note', size: 'Small', types: [], cooldown: null, text: [
    'When you sell this, get a D Note if able',
    'Then get an Enchanted small Shield item from any Hero'
  ] },
  { name: 'Dragonheart Pendant', size: 'Small', types: ['Apparel', 'Dragon'], cooldown: '7 seconds', text: [
    'Shield 5 > 10 > 20 > 40',
    'Burn 1 > 2 > 3 > 4',
    'This has +1 Multicast for each adjacent Dragon item'
  ] },
  { name: 'Dragon Lighter', size: 'Small', types: ['Tool', 'Dragon'], cooldown: '6 seconds', text: [
    'Burn 2 > 4 > 6 > 8',
    '♫ 2 : This and adjacent items gain 1 > 2 > 3 > 4'
  ] },
  { name: 'Dragon\'s Breath Mints', size: 'Small', types: ['Food', 'Dragon'], cooldown: '3 seconds', text: [
    'Ammo Max: 3',
    'Burn 3 > 6 > 9 > 12',
    '♫ 5 : Freeze 3 items 1 second(s)'
  ] },
  { name: 'Dragon Statue', size: 'Small', types: ['Dragon', 'Property'], cooldown: null, text: [
    'When you use an adjacent item, Heal 10 > 20 > 40 > 80',
    'When an enemy would destroy your items, this is destroyed instead'
  ] },
  { name: 'Drag Racer', size: 'Large', types: ['Tech', 'Vehicle', 'Weapon'], cooldown: '10 seconds', text: [
    '♫ 8 : Double this item\'s Damage',
    'Deal 40 > 80 > 120 Damage',
    'When you Haste or Slow, Charge this 1 second(s)'
  ] },
  { name: 'Energy Shot', size: 'Small', types: ['Food'], cooldown: '4 seconds', text: [
    'Ammo Max: 1 > 2 > 3 > 4',
    'Heal 10% of your Max Health',
    'Haste your slowest item 2 second(s)'
  ] },
  { name: 'E Note', size: 'Small', types: [], cooldown: null, text: [
    'When you sell this, get an E Note if able',
    'Then get an Enchanted small Heal or Regen item from any Hero'
  ] },
  { name: 'Equipment Van', size: 'Large', types: ['Vehicle'], cooldown: '6 seconds', text: [
    'Burn 5 > 10 and Shield 25 > 50 for each type this has',
    'This has the Types of items you have in your stash',
    'At the start of each day, get a random item from any Hero'
  ] },
  { name: 'Event Poster', size: 'Small', types: ['Dragon'], cooldown: '3 seconds', text: [
    'Charge 1 > 2 other Dragon(s) 1 second',
    'Adjacent items are Dragons'
  ] },
  { name: 'Fingerless Gloves', size: 'Small', types: ['Apparel'], cooldown: null, text: [
    'When you spend Tempo, reduce the cooldowns of adjacent items by 2 > 4%'
  ] },
  { name: 'Fireworks Drone', size: 'Small', types: ['Drone', 'Tech'], cooldown: '5 seconds', text: [
    'Burn 4',
    'When you Slow, this gains 1 > 2 > 3 > 4 Burn'
  ] },
  { name: 'Flame Skirt', size: 'Medium', types: ['Apparel'], cooldown: '5 seconds', text: [
    'Haste adjacent items 1 > 2 > 3 second(s)',
    'When an adjacent item Slows, Burn 5 > 10 > 15'
  ] },
  { name: 'Flute', size: 'Small', types: ['Weapon', 'Instrument'], cooldown: '4 seconds', text: [
    'Deal 10 > 20 > 40 > 80 Damage',
    '♫ 2 : Deal 10 > 20 > 40 > 80 Damage'
  ] },
  { name: 'F Note', size: 'Small', types: [], cooldown: null, text: [
    'When you sell this, get an F Note if able',
    'Then get an Enchanted small Haste item from any Hero'
  ] },
  { name: 'G Note', size: 'Small', types: [], cooldown: null, text: [
    'When you sell this, get a G Note if able',
    'Then get an Enchanted small Tempo item from any Hero'
  ] },
  { name: 'Green Screen', size: 'Medium', types: ['Tech'], cooldown: '4 seconds', text: [
    'Transform into an Enchanted copy of the Medium item to the left'
  ] },
  { name: 'Guzheng', size: 'Large', types: ['Instrument', 'Weapon'], cooldown: '4 seconds', text: [
    'Deal 15 > 30 Damage and Shield 15 > 30 for each Tempo you have',
    'When your items Crit, gain 3 Tempo'
  ] },
  { name: 'Hairpins', size: 'Small', types: ['Weapon', 'Apparel', 'Tool', 'Dragon'], cooldown: '4 seconds', text: [
    'Shield 20 > 40 > 80 > 160',
    'When you Crit with this, Deal Damage equal to triple its Shield'
  ] },
  { name: 'Harmonica', size: 'Small', types: ['Weapon', 'Instrument'], cooldown: '3 seconds', text: [
    'Deal 5 > 10 > 20 > 40 Damage',
    'Items on Monsters have their Cooldowns increased by 5 > 10 > 15 > 20%'
  ] },
  { name: 'Heels', size: 'Small', types: ['Apparel'], cooldown: null, text: [
    'Adjacent items have +10 > 20% Crit Chance',
    'Adjacent items have +Damage, Heal, and Shield equal to half their Crit Chance'
  ] },
  { name: 'Hef Chibi', size: 'Small', types: ['Toy', 'Friend'], cooldown: '4 seconds', text: [
    'Burn 2 > 4 > 6 > 8',
    'Adjacent items have +2 > 4 > 6 > 8'
  ] },
  { name: 'Hoodie', size: 'Medium', types: ['Apparel', 'Dragon'], cooldown: null, text: [
    'When you use a Friend, your items gain 5 > 10 > 15 Heal',
    'When you use a Dragon, your items gain 5 > 10 > 15 Damage',
    'When you use an Instrument, your items gain 5 > 10 > 15 Shield'
  ] },
  { name: 'Hot Pants', size: 'Medium', types: ['Apparel'], cooldown: '5 seconds', text: [
    'Shield 30 > 60 > 90',
    'When you Crit, Burn equal to 25% of this item\'s Shield',
    'When you Haste this, your items gain 3 > 6 > 9'
  ] },
  { name: 'Hover Pad', size: 'Medium', types: ['Vehicle', 'Tech'], cooldown: '4 seconds', text: [
    '2 > 3 item(s) start Flying',
    '♫ 3 : Charge your other Flying items 1 second(s)'
  ] },
  { name: 'ISO-Belle', size: 'Small', types: ['Tech', 'Drone', 'Friend'], cooldown: '4 seconds', text: [
    'At the start of each fight, this starts Flying',
    'Slow 1 > 2 > 3 item(s) 2 second(s)'
  ] },
  { name: 'Jammer', size: 'Small', types: ['Tech'], cooldown: '4 seconds', text: [
    'Slow the fastest enemy item 2 > 4 second(s)',
    'At the start of each fight, reduce an enemy item\'s Charge effects by 0.5 second(s)'
  ] },
  { name: 'Jin Chibi', size: 'Small', types: ['Toy', 'Friend', 'Dragon'], cooldown: '4 seconds', text: [
    'Shield 10 > 20 > 40 > 80',
    'Adjacent items have +10 > 20 > 30 > 40 and +10 > 20 > 30 > 40 Heal'
  ] },
  { name: 'Keytar', size: 'Medium', types: ['Instrument', 'Dragon'], cooldown: '5 seconds', text: [
    '♫ 2 : Haste your Instruments 1 second(s)',
    'When you use an Instrument, Burn 4 > 8 > 12'
  ] },
  { name: 'Kicks', size: 'Medium', types: ['Apparel', 'Dragon'], cooldown: '5 seconds', text: [
    'Heal 10',
    'Shield 10',
    'When you use another Dragon or Apparel item, this gains 5 > 10 > 20 > 40 and 5 > 10 > 20 > 40'
  ] },
  { name: 'Laser Bow', size: 'Small', types: ['Tool', 'Tech'], cooldown: '5 seconds', text: [
    'Your items gain 2 > 4 > 6 Burn'
  ] },
  { name: 'Light Drone', size: 'Small', types: ['Drone', 'Tech'], cooldown: '3 seconds', text: [
    'This starts Flying',
    'Slow an item 1 > 2 > 3 > 4 second(s)',
    'Every 3rd use, Shield 40 > 80 > 160 > 320'
  ] },
  { name: 'Lightstick', size: 'Small', types: ['Toy'], cooldown: '3 seconds', text: [
    'Ammo Max: 2',
    'Enchant a non-Enchanted item',
    'Gain 1 > 2 Tempo for each Enchanted item you have'
  ] },
  { name: 'Light-Up Sneakers', size: 'Small', types: ['Apparel'], cooldown: '3 seconds', text: [
    'Shield 5 > 10 > 20 > 40',
    'Enchant this'
  ] },
  { name: 'Lumi', size: 'Small', types: ['Friend'], cooldown: '5 > 4 > 3 seconds', text: [
    'Charge adjacent Enchanted items 1 second',
    '🔒 Enchant a non-Enchanted Tool item.',
    '[Quest: Buy 5 Tools]',
    'OR',
    '🔒 Enchant a non-Enchanted Tech item.',
    '[Quest: Buy 5 Tech Items]'
  ] },
  { name: 'Maracas', size: 'Small', types: ['Weapon', 'Instrument'], cooldown: '4 seconds', text: [
    'Charge the item to the left 1 second',
    'When you use the item to the left, deal 5 > 10 > 15 > 20 damage'
  ] },
  { name: 'Megaphone', size: 'Small', types: ['Tool'], cooldown: '5 seconds', text: [
    'Haste a Friend 1 > 2 > 3 > 4 second(s)',
    'Haste a non-Friend item 1 > 2 > 3 > 4 second(s)'
  ] },
  { name: 'Microphone', size: 'Small', types: ['Weapon', 'Tool'], cooldown: '4 seconds', text: [
    'Deal 5 > 10 > 20 > 40 Damage',
    '♫ 1 : This gains +50% Crit Chance'
  ] },
  { name: 'Mini Disc Launcher', size: 'Small', types: ['Weapon', 'Toy', 'Tech'], cooldown: '5 seconds', text: [
    'Ammo Max: 2',
    'Multicast: 3',
    'Deal 5 > 10 > 20 > 40 Damage',
    'When you Crit, reload this 1 Ammo'
  ] },
  { name: 'Mini Keyboard', size: 'Small', types: ['Instrument', 'Tech'], cooldown: '6 > 5 > 4 seconds', text: [
    'Charge an adjacent Instrument 2 seconds',
    'Charge an adjacent Tech item 2 seconds'
  ] },
  { name: 'Multimeter', size: 'Small', types: ['Tool', 'Tech'], cooldown: null, text: [
    'Adjacent items have +15 > 30% Crit Chance',
    'When you Crit with an adjacent item, Charge 1 > 2 other Tech and Instruments 1 second(s)'
  ] },
  { name: 'Neon Sign', size: 'Medium', types: ['Tech'], cooldown: '5 seconds', text: [
    'Shield 10 > 20 > 40 > 80 for each Enchanted item you have',
    'At the start of each fight, Enchant this and 1 > 2 > 3 > 4 non-enchanted item(s)'
  ] },
  { name: 'Panpipes', size: 'Small', types: ['Instrument'], cooldown: '6 seconds', text: [
    'Heal 10',
    'When you Haste or Slow, this gains 5 > 10 > 20 > 40'
  ] },
  { name: 'Patch', size: 'Small', types: ['Friend', 'Dragon'], cooldown: '5 seconds', text: [
    'Heal 30 > 60 > 120 > 240',
    'When you Heal or Slow, an item gains 3 > 6 > 9 > 12% Crit Chance'
  ] },
  { name: 'Photo Booth', size: 'Medium', types: ['Property'], cooldown: '4 seconds', text: [
    'Haste a Friend and items adjacent to it for 1 > 2 > 3 second(s)',
    'At the start of each day, permanently add a random Type to your Friends'
  ] },
  { name: 'Pipe Organ', size: 'Large', types: ['Instrument'], cooldown: '8 seconds', text: [
    'Multicast: 3',
    'Burn 10 > 20 > 30',
    'When you use another Instrument or Tempo item, Charge this 2 second(s)'
  ] },
  { name: 'Power Bank', size: 'Small', types: ['Tech'], cooldown: '5 > 4 > 3 seconds', text: [
    'Ammo Max: 4',
    'Charge adjacent items 1 second(s)',
    'When you use another Tech item, reload this 1 ammo'
  ] },
  { name: 'Puffer Jacket', size: 'Medium', types: ['Apparel'], cooldown: '4 seconds', text: [
    'Shield equal to 1 > 2 > 3 times this item\'s Crit Chance',
    'This has Crit Chance equal to 5 times the Tempo you gained this fight'
  ] },
  { name: 'Pyrotechnics', size: 'Small', types: ['Tech'], cooldown: '6 seconds', text: [
    'Burn 2 > 4 > 6 > 8',
    'When you use a Tech or Instrument, Charge this 1 second'
  ] },
  { name: 'Quixel Chibi', size: 'Small', types: ['Toy', 'Friend'], cooldown: '4 seconds', text: [
    'Charge another Small item 1 > 2 > 3 second(s)',
    'When you use an adjacent Toy, gain 1 Tempo'
  ] },
  { name: 'Razor Bow', size: 'Small', types: ['Tool', 'Weapon'], cooldown: '4 seconds', text: [
    'Your items gain +5 > 10% Crit Chance',
    'When you Crit, Deal 40 > 80 Damage'
  ] },
  { name: 'Rhythm Sticks', size: 'Small', types: ['Weapon', 'Instrument'], cooldown: '6 seconds', text: [
    'Deal 15 > 30 > 60 > 120 Damage',
    'When you use another Tempo item, Charge this 1 second(s)'
  ] },
  { name: 'Rin Chibi', size: 'Small', types: ['Toy', 'Friend', 'Dragon'], cooldown: '4 seconds', text: [
    'Heal 10 > 20 > 40 > 80',
    'Adjacent items have +10 > 20 > 30 > 40 Shield and +10 > 20 > 30 > 40'
  ] },
  { name: 'Rings', size: 'Small', types: ['Apparel', 'Dragon'], cooldown: '6 > 5 seconds', text: [
    'Gain 1 Tempo',
    'If you have another item with Burn, Slow, Shield, or Haste, this has +1 Multicast for each'
  ] },
  { name: 'Saxophone', size: 'Medium', types: ['Instrument'], cooldown: '4 seconds', text: [
    'Your items gain 15 > 30 > 45 Damage',
    'Slow an item 2 > 3 > 4 second(s)'
  ] },
  { name: 'Scaled Jacket', size: 'Medium', types: ['Apparel', 'Dragon'], cooldown: '6 seconds', text: [
    'Shield 100 > 200',
    'When you use an adjacent Flying or Dragon item, Burn equal to 20% of this item\'s Shield'
  ] },
  { name: 'Scorch', size: 'Medium', types: ['Friend', 'Dragon'], cooldown: '6 seconds', text: [
    'Burn 4 > 8 > 12',
    'When you use a Dragon or Burn item, this gains 4 > 8 > 12 Burn'
  ] },
  { name: 'Shelby Chibi', size: 'Small', types: ['Toy', 'Friend'], cooldown: '4 seconds', text: [
    'Charge another Friend 1 > 2 > 3 second(s)',
    'When you use an adjacent Toy, gain 1 Tempo'
  ] },
  { name: 'Shredder', size: 'Medium', types: ['Weapon', 'Instrument'], cooldown: '4 seconds', text: [
    'Deal 25 > 50 > 100 > 200 Damage',
    '♫ 3 : Charge this 2 second(s)'
  ] },
  { name: 'Signal Booster', size: 'Medium', types: ['Property', 'Tech'], cooldown: '3 seconds', text: [
    'Adjacent items gain 1 > 2 > 3 > 4 Burn and 5 > 10 > 15 > 20 Shield'
  ] },
  { name: 'Smoke Machine', size: 'Medium', types: ['Tool', 'Dragon'], cooldown: '4 seconds', text: [
    'Burn 3 > 6 > 9',
    'When you Burn, Shield 15 > 30 > 60'
  ] },
  { name: 'Smokey', size: 'Small', types: ['Dragon', 'Friend'], cooldown: '4 seconds', text: [
    'Slow an item 1 > 2 > 3 second(s)',
    '♫ 9 : Burn 33 > 66 > 99'
  ] },
  { name: 'Sound Engineer', size: 'Small', types: ['Friend'], cooldown: '2 seconds', text: [
    '♫ 1 : Adjacent items gain 5 > 10 > 15% Crit Chance'
  ] },
  { name: 'Sparkler', size: 'Small', types: ['Toy'], cooldown: '4 seconds', text: [
    'Ammo Max: 2',
    'Multicast: 3',
    'Burn 1 > 2 > 3 > 4'
  ] },
  { name: 'Spray Can', size: 'Small', types: ['Tool'], cooldown: '4 > 3 seconds', text: [
    'Enchant the item to the right',
    'When you buy this, Enchant it'
  ] },
  { name: 'Star Projector', size: 'Small', types: ['Tech', 'Toy'], cooldown: '3 seconds', text: [
    'Ammo Max: 3',
    'Slow an item 1 > 2 > 3 > 4 second(s)',
    'Gain 1 > 2 > 3 > 4 Tempo'
  ] },
  { name: 'Stompers', size: 'Medium', types: ['Weapon', 'Apparel'], cooldown: '5 seconds', text: [
    'Deal 10 > 20 > 40 > 80 Damage',
    'Shield equal to this item\'s Damage',
    'This has +1 Multicast for each adjacent Apparel'
  ] },
  { name: 'Straight Edge', size: 'Small', types: ['Weapon', 'Tool'], cooldown: '6 seconds', text: [
    'Deal 10 > 20 > 40 > 80 Damage',
    'When you spend Tempo, this and adjacent items gain 5 > 10 > 15 > 20% Crit Chance'
  ] },
  { name: 'Strobe Grenade', size: 'Small', types: [], cooldown: '6 seconds', text: [
    'Ammo Max: 1 > 2',
    'Haste ALL items 1 second(s)',
    'When you Haste an item with this, gain 1 Tempo'
  ] },
  { name: 'Superfan', size: 'Medium', types: ['Friend', 'Weapon'], cooldown: '6 seconds', text: [
    'Deal 10 > 20 > 40 Damage',
    'Shield 10 > 20 > 40',
    'This has +1 Multicast for each Dragon item you have'
  ] },
  { name: 'Synth', size: 'Medium', types: ['Tech'], cooldown: null, text: [
    'Tech items to the left have their Cooldowns reduced by 10 > 15 > 20%',
    'Items to the right have +20 > 40 > 80 Damage and +20 > 40 > 80 Shield'
  ] },
  { name: 'Talon Earrings', size: 'Small', types: ['Dragon', 'Apparel'], cooldown: '5 > 4 > 3 seconds', text: [
    'Charge the item to the left 1 second(s)',
    'If the item to the left is a Dragon, this has double Charge'
  ] },
  { name: 'Tambourine', size: 'Small', types: ['Weapon', 'Instrument'], cooldown: '4 seconds', text: [
    'Crit Chance: 15 > 30 > 45 > 60',
    'Deal 4 > 8 > 16 > 32 Damage',
    'When you Crit with this, gain 4 Tempo'
  ] },
  { name: 'Ticket Terra', size: 'Medium', types: ['Friend', 'Tech'], cooldown: '5 seconds', text: [
    'Gain 2 > 4 > 6 > 8 Tempo',
    'Heal equal to 3 > 6 > 9 > 12 times the Tempo you have gained this fight'
  ] },
  { name: 'Tour Bus', size: 'Large', types: ['Vehicle'], cooldown: '4 seconds', text: [
    'Shield 50 > 100 > 150',
    'Haste 1 > 2 > 3 item(s) 2 seconds',
    '🔒 This gains the Core type. When you use a Friend or Tech item, Charge this 1 second.',
    '[Quest: Visit Dooley]',
    '🔒 Your items start Flying.',
    '[Quest: Visit Stelle]',
    '🔒 Deal Damage equal to this item\'s Shield.',
    '[Quest: Visit Vanessa]',
    '🔒 This has +Shield equal to the Gold you have gained this run.',
    '[Quest: Visit Pyg]',
    '🔒 Charge your other Enchanted items 1 second.',
    '[Quest: Visit Mak]',
    '🔒 This gains the Food type and your Food have +1 Multicast.',
    '[Quest: Visit Jules]',
    '🔒 Gain 25 Rage.',
    '[Quest: Visit Karnok]'
  ] },
  { name: 'Tour Schedule', size: 'Medium', types: [], cooldown: null, text: [
    'When you complete a quest on any item, gain a Skill from another Hero',
    '🔒 When you sell this, Upgrade your leftmost item of a lower tier.',
    '[Quest: Visit or Fight a Gold-tier Encounter]',
    '🔒 When you sell this, get an Enchanted item from another Hero.',
    '[Quest: Visit or Fight a Diamond-tier Encounter]',
    '🔒 When you sell this, get 2 XP.',
    '[Quest: Visit or Fight a Legendary-tier Encounter]'
  ] },
  { name: 'Trumpet', size: 'Small', types: ['Instrument'], cooldown: '7 > 6 > 5 > 4 seconds', text: [
    'Haste an item 2 second(s)',
    '♫ 1 : Haste an item 2 second(s)',
    '♫ 2 : Haste an item 2 second(s)'
  ] },
  { name: 'Tuba', size: 'Medium', types: ['Instrument'], cooldown: '6 > 5 > 4 seconds', text: [
    'Slow 2 item(s) 2 second(s)',
    '♫ 2 : Slow 2 items 2 second(s)',
    '♫ 4 : Slow 2 items 2 second(s)'
  ] },
  { name: 'Turner', size: 'Medium', types: ['Friend', 'Drone', 'Instrument', 'Tech'], cooldown: '4 seconds', text: [
    'Haste this 2 second(s)',
    'When you Haste this, gain 2 > 3 > 4 Tempo'
  ] },
  { name: 'Visor', size: 'Small', types: ['Apparel'], cooldown: '4 seconds', text: [
    'Gain 1 > 2 > 3 Tempo',
    'When you Shield or Heal, Charge this 1 second'
  ] },
  { name: 'Vocoder', size: 'Small', types: ['Tool', 'Tech'], cooldown: null, text: [
    'When you spend Tempo, Haste an item 1 > 2 > 3 > 4 second(s)'
  ] },
  { name: 'Whistling Glaive', size: 'Large', types: ['Dragon', 'Weapon', 'Instrument'], cooldown: '10 seconds', text: [
    'Spend All Tempo:',
    'Deal 100 > 150 Damage for each Tempo spent',
    'When this becomes Frozen or Slowed, spend 1 Tempo and remove it'
  ] },
  { name: 'Wig Closet', size: 'Medium', types: ['Apparel'], cooldown: '4 seconds', text: [
    'When you buy this, this gains 3 random Types',
    'Charge your other Enchanted items or items from other heroes 1 > 2 second(s)'
  ] },
  { name: 'Wings', size: 'Medium', types: ['Apparel', 'Dragon'], cooldown: '4 seconds', text: [
    'Haste your other Flying items 1 > 2 > 3 second(s)',
    'Adjacent items start Flying',
    'When you use a Flying item, Heal 20 > 40 > 80'
  ] },
  { name: 'Wireless Headset', size: 'Small', types: ['Tech', 'Apparel'], cooldown: '4 seconds', text: [
    'Haste an adjacent item 1 > 2 > 3 > 4 seconds'
  ] },
];
