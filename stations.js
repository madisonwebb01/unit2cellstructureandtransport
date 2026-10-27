/* Cell Stations: cell theory, prokaryotic vs eukaryotic, plant vs animal, organelle functions */
window.BANKS = window.BANKS || {};
window.BANKS.stations = {
  id: "stations",
  name: "Cell Stations",
  questions: [
    {
      n: 1,
      topic: "Cell Theory",
      stem: "Cell theory states that all cells come from preexisting cells.<br><b>What does that rule out?</b>",
      opts: [
        ["That a new cell can form on its own out of nonliving material.", 1, "Correct. This part of cell theory says a cell only ever comes from a cell that was already there, so no cell assembles itself out of nonliving matter."],
        ["That a cell can divide to make more cells.", 0, "Division is how a cell comes from a preexisting cell, so this part of cell theory depends on division rather than ruling it out."],
        ["That an organism can be made of only one cell.", 0, "A single-celled organism still came from an earlier cell, so cell theory allows it. The first part of cell theory says one or more cells."]
      ]
    },
    {
      n: 2,
      topic: "Prokaryotic vs. Eukaryotic",
      stem: "A single-celled organism has ribosomes, DNA, cytoplasm, and a cell membrane, but no nucleus.<br><b>What type of cell is this?</b>",
      opts: [
        ["Eukaryotic", 0, "Eukaryotic cells are defined by having a nucleus and other membrane-bound organelles. This cell has neither."],
        ["Prokaryotic", 1, "Correct. A prokaryote is a simple, unicellular organism that lacks a nucleus and other membrane-bound organelles."],
        ["Plant", 0, "Plant cells are eukaryotic, so they have a nucleus. They also have a cell wall, chloroplasts, and a large central vacuole, none of which are listed here."]
      ]
    },
    {
      n: 3,
      topic: "Cell Theory",
      stem: "Cell theory has three parts.<br><b>Which statement is one of them?</b>",
      opts: [
        ["All cells contain a nucleus.", 0, "Prokaryotic cells have no nucleus and they are still cells, so this cannot be part of cell theory."],
        ["All organisms are composed of one or more cells.", 1, "Correct. This is the first part of cell theory. The other two are that cells are the basic unit of structure and organization in organisms, and that all cells come from preexisting cells."],
        ["All cells carry out photosynthesis.", 0, "Only cells with chloroplasts photosynthesize. Animal cells and most prokaryotes do not, and they are still cells."]
      ]
    },
    {
      n: 4,
      topic: "Cell Theory",
      stem: "A biologist finds a living organism in a hot spring and has not yet looked at it under a microscope.<br><b>What does cell theory already let her say about it?</b>",
      opts: [
        ["It is made of exactly one cell.", 0, "Cell theory says one or more cells. It does not tell you how many, so she cannot narrow it down without looking."],
        ["It is built from at least one cell.", 1, "Correct. Cell theory covers all organisms, so knowing the thing is alive is enough to predict that cells build it."],
        ["It has a nucleus.", 0, "Cell theory says nothing about nuclei. Prokaryotes are cells and have no nucleus at all."]
      ]
    },
    {
      n: 5,
      topic: "Cell Theory",
      stem: "Cell theory says cells are the basic unit of structure and organization in organisms.<br><b>What does that mean for something as large as a human body?</b>",
      opts: [
        ["Every structure in the body, from skin to muscle to bone, is built out of cells.", 1, "Correct. Being the basic unit means cells are the building blocks, so tissues and organs are all assembled from them."],
        ["The body is organized by its organs, and cells are a small detail underneath that.", 0, "Organs are themselves made of cells, so the cells are what the organization is built out of rather than a detail sitting below it."],
        ["Every cell in the body carries out the exact same job.", 0, "Cells specialize into many different jobs. Basic unit describes what the body is built from, not that the pieces are identical."]
      ]
    },
    {
      n: 6,
      topic: "Plant vs. Animal Cells",
      stem: "<b>Which group of structures is found in plant cells but not in animal cells?</b>",
      opts: [
        ["Mitochondria, ribosomes, and nucleus", 0, "Animal cells have all three of these. They appear in the shared middle of the Venn diagram, not the plant-only side."],
        ["Chloroplast, large central vacuole, and cell wall", 1, "Correct. These three are the plant-only structures. Animal cells may have many small vacuoles, but never one large central vacuole, a cell wall, or chloroplasts."],
        ["Golgi apparatus, lysosome, and cytoskeleton", 0, "These are all found in animal cells, so they do not separate plant cells from animal cells."]
      ]
    },
    {
      n: 7,
      topic: "Organelle Functions",
      stem: "A protein has just been built and modified in the rough endoplasmic reticulum. It still needs to be sorted and packaged before it can leave the cell.<br><b>Which organelle does that job?</b>",
      opts: [
        ["Golgi apparatus", 1, "Correct. The Golgi apparatus modifies, sorts, and packages cell materials and prepares them for transport."],
        ["Lysosome", 0, "A lysosome is filled with enzymes that break down and digest waste. Sending a finished protein there would destroy it, not ship it."],
        ["Ribosome", 0, "Ribosomes make proteins, so this one has already done its part. Packaging happens after the protein exists."]
      ]
    },
    {
      n: 8,
      topic: "Organelle Functions",
      stem: "<b>Lysosomes</b> in a cell:",
      opts: [
        ["store water and nutrients and help the cell keep its shape", 0, "That describes vacuoles, especially the large central vacuole in a plant cell. Lysosomes hold digestive enzymes instead."],
        ["contain enzymes that break down and digest cell waste", 1, "Correct. A lysosome is a vacuole carrying enzymes that digest waste inside the cell."],
        ["convert and release energy during cell respiration", 0, "That is the mitochondria's job. Lysosomes break material down for disposal, not to power the cell."]
      ]
    },
    {
      n: 9,
      topic: "Prokaryotic Structures",
      stem: "A prokaryotic cell uses one of its surface structures to move itself through its environment.<br><b>Which structure is it?</b>",
      opts: [
        ["Pili", 0, "Pili exchange genetic material between cells. They transfer DNA rather than drive the cell forward."],
        ["Capsule", 0, "The capsule is a sticky outer layer that helps the cell attach to surfaces, which is closer to holding still than to moving."],
        ["Flagellum", 1, "Correct. The flagellum handles locomotion for a prokaryotic cell."]
      ]
    },
    {
      n: 10,
      topic: "Prokaryotic vs. Eukaryotic",
      stem: "Prokaryotes and eukaryotes are very different cells, but four structures appear in both.<br><b>Which list names those four?</b>",
      opts: [
        ["Ribosomes, DNA, cytoplasm, and cell membrane", 1, "Correct. Every cell has these four. In a prokaryote the DNA sits loose in the nucleoid region rather than inside a nucleus."],
        ["Nucleus, mitochondria, ribosomes, and cell wall", 0, "A nucleus and mitochondria are both membrane-bound, which rules them out of prokaryotes, and animal cells have no cell wall."],
        ["DNA, nucleus, cytoplasm, and cell membrane", 0, "Three of these are shared, but the nucleus is the single structure prokaryotes are defined by lacking."]
      ]
    }
  ]
};
