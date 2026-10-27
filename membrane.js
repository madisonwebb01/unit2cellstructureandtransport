/* Cell Membrane & Transport: fluid mosaic model, membrane components, membrane functions */
window.BANKS = window.BANKS || {};
window.BANKS.membrane = {
  id: "membrane",
  name: "Cell Membrane & Transport",
  questions: [
    {
      n: 1,
      topic: "Cholesterol",
      stem: "<b>Cholesterol</b> in the cell membrane:",
      opts: [
        ["regulates fluidity, keeping the phospholipids spread out at low temperatures", 1, "Correct. Cholesterol is a type of lipid that sits between the phospholipids and controls how fluid the membrane is."],
        ["carries large, polar molecules across the membrane", 0, "Transport proteins do that. Cholesterol stays wedged among the phospholipids and moves nothing across."],
        ["marks the cell as self so the immune system does not attack it", 0, "Glycoproteins and glycolipids are the markers on the cell surface. Cholesterol sits inside the bilayer, not on its face."]
      ]
    },
    {
      n: 2,
      topic: "Fluid Mosaic Model",
      stem: "The phospholipids in a membrane slide around each other like a liquid, and different proteins and molecules sit embedded among them like tiles.<br><b>What is this description called?</b>",
      opts: [
        ["The phospholipid bilayer", 0, "That name describes the two layers of phospholipids themselves. It says nothing about the sliding or the embedded molecules."],
        ["Selective permeability", 0, "Selective permeability is what the membrane does, which is control what passes through. It is not a description of how the membrane is built."],
        ["The fluid mosaic model", 1, "Correct. Fluid refers to the phospholipids moving around each other, and mosaic refers to the proteins and other molecules set into them like tiles."]
      ]
    },
    {
      n: 3,
      topic: "Selective Permeability",
      stem: "Fill in the blank:<br>The middle of the cell membrane is _______, which is why only small nonpolar molecules pass through it easily.",
      opts: [
        ["hydrophilic", 0, "A water-loving interior would welcome polar molecules and water, which is the opposite of how the membrane behaves."],
        ["hydrophobic", 1, "Correct. The interior is hydrophobic, so lipid-soluble molecules such as oxygen slip through while polar molecules and ions cannot."],
        ["charged", 0, "A charged interior would attract ions rather than block them. Ions are exactly what needs a transport protein to get across."]
      ]
    },
    {
      n: 4,
      topic: "Membrane Proteins",
      stem: "<b>Carrier proteins</b> differ from channel proteins because they:",
      opts: [
        ["are more selective about which molecules they transport", 1, "Correct. Both move substances across the membrane, but carrier proteins are pickier about what they will carry."],
        ["are the only membrane proteins that can move ions", 0, "Channel proteins move ions too. Their interior is hydrophilic, so polar and charged particles pass through."],
        ["are found only in prokaryotic cells", 0, "Both cell types use carrier proteins. Membrane transport is not a prokaryote-only problem."]
      ]
    },
    {
      n: 5,
      topic: "Cell Recognition",
      stem: "Glycoproteins and glycolipids act as markers on the surface of a cell.<br><b>What do those markers let the immune system do?</b>",
      opts: [
        ["Recognize the body's own cells as self and leave them alone.", 1, "Correct. Without those surface markers the immune system has no way to tell your own cells from invaders."],
        ["Pull neighboring cells together to form tissues.", 0, "That is cell adhesion. Some glycoproteins do help with adhesion, but adhesion is not what the immune system reads them for."],
        ["Trigger cell division whenever a signal arrives.", 0, "Cell division gets triggered through receptor proteins reacting to signaling molecules, which is a different job from identifying the cell."]
      ]
    },
    {
      n: 6,
      topic: "Cell Signaling",
      stem: "A signaling molecule attaches to a receptor protein on the outside of a cell.<br><b>What happens next?</b>",
      opts: [
        ["The receptor protein changes shape, which causes a change inside the cell.", 1, "Correct. The shape change is the message. It can set off something like production of a protein or the start of cell division."],
        ["The receptor protein breaks apart and releases energy.", 0, "Receptors are not destroyed by the signals they receive, and receiving a signal is not an energy-releasing reaction."],
        ["The receptor protein pumps the signaling molecule into the cytoplasm.", 0, "The signaling molecule does not have to enter the cell at all. The message crosses through the receptor's shape change."]
      ]
    },
    {
      n: 7,
      topic: "Cell Adhesion",
      stem: "<b>Cell adhesion</b> is:",
      opts: [
        ["the ability of cells to stick to each other to form tissues and organs", 1, "Correct. Various molecules, glycoproteins among them, let cells hold onto each other so larger structures can form."],
        ["the ability of a cell to stick to the inside of its own membrane", 0, "Adhesion describes cells joining to other cells. A cell holding onto its own membrane would build nothing."],
        ["the ability of a cell to pull nutrients toward its surface", 0, "Moving nutrients in is the work of transport proteins and bulk transport, not of adhesion molecules."]
      ]
    },
    {
      n: 8,
      topic: "Selective Permeability",
      stem: "<b>What is the definition of selective permeability?</b>",
      opts: [
        ["the ability of a membrane to let all substances pass through freely", 0, "A membrane like that would control nothing, and the cell could not keep its interior stable."],
        ["the ability of a membrane to control which substances pass through it", 1, "Correct. The membrane is selectively permeable, so only certain substances get through and the cell stays stable and functional."],
        ["the ability of a membrane to repair itself after it is damaged", 0, "Membranes do reseal, but permeability describes what gets through, not what gets fixed."]
      ]
    },
    {
      n: 9,
      topic: "Membrane Proteins",
      stem: "<b>Which molecules need a transport protein to get across the cell membrane?</b>",
      opts: [
        ["Small nonpolar molecules such as oxygen.", 0, "Those are the molecules that need no help at all. They are lipid soluble, so they pass straight through the hydrophobic middle."],
        ["Large polar molecules and ions, such as glucose and sodium ions.", 1, "Correct. Glucose is too large to fit between the phospholipids, and an ion carries a charge the hydrophobic middle repels, so both need a protein to get through."],
        ["Water, and nothing else.", 0, "Aquaporins do move water quickly, but water is small enough to slip through unaided at times, and it is far from the only molecule that needs help."]
      ]
    },
    {
      n: 10,
      topic: "Membrane Proteins",
      stem: "<b>An integral protein</b> is one that:",
      opts: [
        ["is embedded within the phospholipid bilayer", 1, "Correct. Integral proteins sit inside the bilayer, and many of them span it completely so they can move substances from one side to the other."],
        ["rests loosely on the surface of the membrane", 0, "That describes a peripheral protein. It sits on the face of the membrane rather than inside it."],
        ["floats freely in the cytosol away from the membrane", 0, "A protein floating in the cytosol is not a membrane protein at all, so neither name applies to it."]
      ]
    }
  ]
};
