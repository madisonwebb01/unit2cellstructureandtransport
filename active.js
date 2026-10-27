/* Active Transport: active vs passive, sodium-potassium pump, endocytosis and exocytosis */
window.BANKS = window.BANKS || {};
window.BANKS.active = {
  id: "active",
  name: "Active Transport",
  questions: [
    {
      n: 1,
      topic: "Active vs. Passive Transport",
      stem: "Fill in the blank:<br>Active transport moves molecules _______ their concentration gradient, which is why it needs energy from ATP.",
      opts: [
        ["down", 0, "Moving down a gradient is what passive transport does, and it costs the cell nothing."],
        ["against", 1, "Correct. Molecules go from low to high concentration, which is uphill, so the cell has to pay for it."],
        ["along", 0, "Along suggests following the gradient rather than fighting it, and following it would need no ATP."]
      ]
    },
    {
      n: 2,
      topic: "Active vs. Passive Transport",
      stem: "<b>What separates active transport from passive transport?</b>",
      opts: [
        ["Active transport requires an input of extra energy, usually ATP.", 1, "Correct. That energy is what lets the cell move molecules the direction they would not go on their own."],
        ["Active transport moves molecules down their concentration gradient.", 0, "Downhill movement is exactly what passive transport does. Active transport goes the other way, from low to high concentration."],
        ["Active transport happens without any membrane proteins.", 0, "Active transport always needs transport proteins. Simple diffusion is the process that uses no protein at all."]
      ]
    },
    {
      n: 3,
      topic: "Active vs. Passive Transport",
      stem: "Active transport has three requirements: extra energy such as ATP, a cell membrane to cross, and one more.<br><b>What is the third?</b>",
      opts: [
        ["Transport proteins to move the molecules.", 1, "Correct. Energy alone moves nothing. A protein has to physically carry the molecule across."],
        ["A concentration gradient that already favors the movement.", 0, "If the gradient already favored the movement, the molecules would diffuse on their own and no active transport would be needed."],
        ["A hypotonic solution outside the cell.", 0, "Tonicity describes water movement around the cell. Active transport happens regardless of the outside solution."]
      ]
    },
    {
      n: 4,
      topic: "Active Transport in Nature",
      stem: "Plants absorb mineral ions through their roots. When soil quality is poor, there are fewer of those ions in the soil than inside the root cells.<br><b>How do the roots take them in anyway?</b>",
      opts: [
        ["By simple diffusion, since ions are small.", 0, "Ions are charged, so the hydrophobic middle of the membrane blocks them, and in this case they would be heading the wrong way down the gradient regardless."],
        ["By active transport, against the concentration gradient.", 1, "Correct. The ions are more concentrated inside the root than outside, so the plant spends energy to pull them in."],
        ["By osmosis, since water carries the ions in with it.", 0, "Osmosis moves water, and water crossing a membrane does not drag dissolved ions along with it."]
      ]
    },
    {
      n: 5,
      topic: "Endocytosis",
      stem: "<b>Endocytosis</b> is the process in which:",
      opts: [
        ["the cell membrane folds in on itself to bring macromolecules into the cell", 1, "Correct. The fold pinches off into a new vesicle made from the cell membrane, with the macromolecules inside it."],
        ["a vesicle fuses with the cell membrane and releases its contents outside", 0, "That describes exocytosis. Endo means in, and this option moves material out."],
        ["a protein pump carries single ions across the membrane", 0, "Pumping individual ions is active transport, but endocytosis handles molecules too large for any protein to carry."]
      ]
    },
    {
      n: 6,
      topic: "Exocytosis",
      stem: "A vesicle carrying a finished protein moves to the cell surface, fuses with the cell membrane, and releases the protein into the space outside the cell.<br><b>What is this process?</b>",
      opts: [
        ["Endocytosis", 0, "Endocytosis brings material into the cell by folding the membrane inward. This vesicle is going the opposite direction."],
        ["Exocytosis", 1, "Correct. Exo means out of, and the vesicle fusing with the membrane is what releases the contents to the outside."],
        ["Facilitated diffusion", 0, "Facilitated diffusion sends one molecule at a time through a transport protein, and it uses no vesicles and no energy."]
      ]
    },
    {
      n: 7,
      topic: "Bulk Transport",
      stem: "Endocytosis and exocytosis are both forms of bulk transport.<br><b>What do they have in common with the sodium-potassium pump?</b>",
      opts: [
        ["All three require extra energy from the cell.", 1, "Correct. Bulk transport and pumping both cost the cell energy, which is what makes them all active transport."],
        ["All three move only water.", 0, "Water movement across a membrane is osmosis. These processes move macromolecules and ions."],
        ["All three move molecules down a concentration gradient.", 0, "Running down a gradient is free, so a process that does it would not need energy and would not be active transport."]
      ]
    },
    {
      n: 8,
      topic: "Bulk Transport",
      stem: "<b>What is the definition of a vesicle?</b>",
      opts: [
        ["a protein channel that lets ions pass through the membrane", 0, "A channel is a single protein set in the membrane. A vesicle is a membrane sac carrying cargo."],
        ["a small sac made of membrane that carries materials within the cell", 1, "Correct. Vesicles form from the cell membrane during endocytosis and fuse back with it during exocytosis."],
        ["a fold in the cell wall that stores water", 0, "Only plant cells have a cell wall, and water storage there is the job of the large central vacuole."]
      ]
    },
    {
      n: 9,
      topic: "Sodium-Potassium Pump",
      stem: "<b>The sodium-potassium pump moves:</b>",
      opts: [
        ["3 sodium ions out of the cell and 2 potassium ions in.", 1, "Correct. Both ions move against their gradients, and the uneven count leaves the inside of the cell more negative."],
        ["3 potassium ions out of the cell and 2 sodium ions in.", 0, "The two ions are swapped here. Sodium is the one pumped out, and potassium is the one pumped in."],
        ["3 sodium ions into the cell and 2 potassium ions out.", 0, "The counts are right but both directions are backwards, which would undo the gradient the pump exists to build."]
      ]
    },
    {
      n: 10,
      topic: "Sodium-Potassium Pump",
      stem: "<b>What is the overall purpose of the sodium-potassium pump?</b>",
      opts: [
        ["To bring glucose into the cell for energy.", 0, "Glucose crosses by facilitated diffusion through its own transport proteins, and this pump handles ions instead."],
        ["To maintain the resting potential of the cell membrane by building an electrochemical gradient.", 1, "Correct. Pumping unequal numbers of charged ions in opposite directions sets up the charge difference the cell depends on."],
        ["To balance the water concentration on both sides of the membrane.", 0, "Balancing water is osmosis, which is passive. The pump moves ions and spends ATP doing it."]
      ]
    }
  ]
};
