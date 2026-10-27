/* Label the Diagram: numbered multiple choice off the four diagrams in diagrams.js.
   The `fig` key names the diagram rendered above the stem, with its number badges showing. */
window.BANKS = window.BANKS || {};
window.BANKS.labeling = {
  id: "labeling",
  name: "Label the Diagram",
  questions: [
    {
      n: 1,
      topic: "Animal Cell Diagram",
      fig: "animal",
      stem: "<b>What is structure 3?</b>",
      opts: [
        ["Nucleus", 1, "Correct. The large round structure with a darker center is the nucleus, and it holds the DNA that controls the cell."],
        ["Large central vacuole", 0, "A large central vacuole belongs to a plant cell, and this diagram is an animal cell. Animal cells carry many small vacuoles instead."],
        ["Lysosome", 0, "The lysosome is structure 8, the much smaller circle with enzyme specks inside it."]
      ]
    },
    {
      n: 2,
      topic: "Animal Cell Diagram",
      fig: "animal",
      stem: "<b>What is structure 7?</b>",
      opts: [
        ["Endoplasmic reticulum", 0, "The endoplasmic reticulum is structure 4, the folded tubes running alongside the nucleus."],
        ["Golgi apparatus", 1, "Correct. The stack of flattened curves is the Golgi apparatus, where materials get modified, sorted, and packaged."],
        ["Mitochondria", 0, "The mitochondria are structure 6, the orange ovals with a folded line running through the middle."]
      ]
    },
    {
      n: 3,
      topic: "Animal Cell Diagram",
      fig: "animal",
      stem: "<b>Which numbered structure makes proteins?</b>",
      opts: [
        ["Structure 3", 0, "Structure 3 is the nucleus. It holds the instructions for building proteins, but it does not assemble them."],
        ["Structure 5", 1, "Correct. Structure 5 marks the ribosomes, the small dots that make proteins."],
        ["Structure 6", 0, "Structure 6 is the mitochondria, which release energy through cell respiration rather than build proteins."]
      ]
    },
    {
      n: 4,
      topic: "Plant Cell Diagram",
      fig: "plant",
      stem: "<b>What is structure 1?</b>",
      opts: [
        ["Cell wall", 1, "Correct. The thick green outer layer is the cell wall. It surrounds the membrane, protects the cell, and gives it rigidity."],
        ["Cell membrane", 0, "The cell membrane is structure 2, the thinner blue layer just inside the wall."],
        ["Capsule", 0, "A capsule is a prokaryotic structure, and this is a plant cell. The two look similar from outside but the capsule appears only on the prokaryote diagram."]
      ]
    },
    {
      n: 5,
      topic: "Plant Cell Diagram",
      fig: "plant",
      stem: "<b>What is structure 4?</b>",
      opts: [
        ["Nucleus", 0, "The nucleus is structure 5, the circle with the darker center over on the left."],
        ["Large central vacuole", 1, "Correct. The big rounded compartment taking up most of the middle is the large central vacuole. It stores water and nutrients and helps the cell keep its shape."],
        ["Chloroplast", 0, "Chloroplasts are structure 10, the smaller green ovals. There are several of them rather than one large compartment."]
      ]
    },
    {
      n: 6,
      topic: "Plant Cell Diagram",
      fig: "plant",
      stem: "<b>Which set of numbered structures would be missing from an animal cell?</b>",
      opts: [
        ["2, 5, and 8", 0, "Those are the cell membrane, nucleus, and mitochondria. Animal cells have all three."],
        ["1, 4, and 10", 1, "Correct. Cell wall, large central vacuole, and chloroplast are the three plant-only structures."],
        ["3, 6, and 7", 0, "Those are the cytoplasm, endoplasmic reticulum, and ribosomes, which animal cells have too."]
      ]
    },
    {
      n: 7,
      topic: "Prokaryotic Cell Diagram",
      fig: "prokaryote",
      stem: "<b>What is structure 3?</b>",
      opts: [
        ["Nucleus", 0, "A prokaryote has no nucleus at all. That is the defining difference between prokaryotic and eukaryotic cells."],
        ["Cytoplasm", 0, "Cytoplasm fills the whole interior rather than sitting in one coiled spot in the middle."],
        ["Nucleoid region", 1, "Correct. The coiled strand in the center is the nucleoid region, where a prokaryote's DNA sits without any membrane around it."]
      ]
    },
    {
      n: 8,
      topic: "Prokaryotic Cell Diagram",
      fig: "prokaryote",
      stem: "<b>What is structure 6, and what is it for?</b>",
      opts: [
        ["Pili, used to exchange genetic material.", 0, "Pili are structure 5, the short bristles along the outside. Structure 6 is far longer and there is only one of it."],
        ["Flagellum, used for locomotion.", 1, "Correct. The long whip-like tail is the flagellum, and it moves the cell through its environment."],
        ["Capsule, used to attach to surfaces.", 0, "The capsule is structure 1, the thick outer coat wrapped around the whole cell rather than a tail extending from it."]
      ]
    },
    {
      n: 9,
      topic: "Prokaryotic Cell Diagram",
      fig: "prokaryote",
      stem: "<b>Which numbered structure also appears on the animal cell diagram?</b>",
      opts: [
        ["Structure 1, the capsule", 0, "Only prokaryotes have a capsule. Nothing on the animal cell diagram corresponds to it."],
        ["Structure 4, the ribosome", 1, "Correct. Ribosomes are one of the four things every cell has, along with DNA, cytoplasm, and a cell membrane."],
        ["Structure 6, the flagellum", 0, "The flagellum appears only on the prokaryote diagram here. The animal cell in this unit has no tail."]
      ]
    },
    {
      n: 10,
      topic: "Cell Membrane Diagram",
      fig: "membrane",
      stem: "<b>What is structure 3?</b>",
      opts: [
        ["Cholesterol", 1, "Correct. The small purple molecule wedged between the tails is cholesterol, which regulates how fluid the membrane is."],
        ["Carrier protein", 0, "The carrier protein is structure 5. It spans the whole membrane, while structure 3 sits entirely inside the bilayer."],
        ["Peripheral protein", 0, "The peripheral protein is structure 7, resting on top of the membrane rather than buried among the tails."]
      ]
    },
    {
      n: 11,
      topic: "Cell Membrane Diagram",
      fig: "membrane",
      stem: "<b>What is structure 2, and why does it matter?</b>",
      opts: [
        ["The phospholipid heads, which face the water on both sides.", 0, "The heads are structure 1, the round yellow ends on the outer surfaces. Structure 2 points at the strands between them."],
        ["Cholesterol, which keeps the membrane fluid.", 0, "Cholesterol is structure 3, a separate molecule tucked among the tails rather than part of a phospholipid."],
        ["The phospholipid tails, which form the hydrophobic middle of the membrane.", 1, "Correct. The tails create the hydrophobic interior, which is exactly why polar molecules and ions cannot pass straight through."]
      ]
    },
    {
      n: 12,
      topic: "Cell Membrane Diagram",
      fig: "membrane",
      stem: "A large polar molecule needs to get across the membrane.<br><b>Which numbered structures could move it through?</b>",
      opts: [
        ["1 and 2", 0, "Those are the phospholipid heads and tails, which make up the barrier. A large polar molecule cannot get past them on its own."],
        ["6 and 7", 0, "The glycoprotein and the peripheral protein are markers and surface proteins. Neither one is a passageway through the membrane."],
        ["4 and 5", 1, "Correct. The channel protein and the carrier protein are the two transport proteins, and they are what facilitated diffusion depends on."]
      ]
    }
  ]
};
