/* Diffusion: simple vs facilitated, transport proteins, diffusion in the body, rate factors */
window.BANKS = window.BANKS || {};
window.BANKS.diffusion = {
  id: "diffusion",
  name: "Diffusion",
  questions: [
    {
      n: 1,
      topic: "Simple vs. Facilitated Diffusion",
      stem: "Oxygen is a small, nonpolar molecule. It crosses the cell membrane without any help from a transport protein.<br><b>Which process is this?</b>",
      opts: [
        ["Facilitated diffusion", 0, "Facilitated diffusion is defined by needing a transport protein. Oxygen needs none, since it is small and lipid soluble."],
        ["Simple diffusion", 1, "Correct. Small nonpolar molecules pass straight through the hydrophobic middle of the membrane, which is simple diffusion."],
        ["Active transport", 0, "Active transport costs the cell ATP and pushes molecules against their gradient. Oxygen is moving down its gradient for free."]
      ]
    },
    {
      n: 2,
      topic: "Diffusion",
      stem: "<b>What is the definition of diffusion?</b>",
      opts: [
        ["the movement of a substance from a region of high concentration to a region of low concentration", 1, "Correct. Molecules move in both directions, but the net movement runs down the concentration gradient."],
        ["the movement of water across a semipermeable membrane", 0, "That is osmosis, which is one specific kind of diffusion rather than the general definition."],
        ["the movement of a substance from low concentration to high concentration using ATP", 0, "Moving up a gradient at the cost of ATP is active transport. Diffusion runs the other way and is free."]
      ]
    },
    {
      n: 3,
      topic: "Diffusion",
      stem: "Fill in the blank:<br>Diffusion is a _______ process, which means it does not require any extra energy to move the molecules.",
      opts: [
        ["active", 0, "Active is the word for transport that does spend energy, so it means the opposite of what this sentence describes."],
        ["passive", 1, "Correct. Diffusion and osmosis are both passive processes, powered by the concentration gradient rather than by the cell."],
        ["facilitated", 0, "Facilitated diffusion is passive too, but the word refers to needing a transport protein, not to whether energy is required."]
      ]
    },
    {
      n: 4,
      topic: "Equilibrium",
      stem: "The concentration of a substance is now equal on both sides of a membrane. Molecules keep moving in both directions, but the amounts cancel out.<br><b>What is this state called?</b>",
      opts: [
        ["Equilibrium", 1, "Correct. It is also called dynamic equilibrium, because the movement never stops even though the net movement is zero."],
        ["A concentration gradient", 0, "A gradient is a difference in concentration between two regions. Once concentrations match, the gradient is gone."],
        ["Osmosis", 0, "Osmosis names a process of water moving, not a condition of balance. Osmosis can end at equilibrium, but the two are not the same thing."]
      ]
    },
    {
      n: 5,
      topic: "Simple vs. Facilitated Diffusion",
      stem: "Glucose is a large, polar molecule, so it cannot pass directly through the middle of the cell membrane.<br><b>How does it get into the cell?</b>",
      opts: [
        ["A transport protein carries it through, which is facilitated diffusion.", 1, "Correct. Large or polar molecules need a transport protein, and when no energy is spent that assisted crossing is facilitated diffusion."],
        ["It slips between the phospholipids, which is simple diffusion.", 0, "Only molecules small enough to fit through those gaps manage this, and glucose is far too large."],
        ["A pump pushes it in using ATP.", 0, "Facilitated diffusion is passive. The glucose is moving down its gradient, so the cell spends nothing."]
      ]
    },
    {
      n: 6,
      topic: "Transport Proteins",
      stem: "<b>Which two types of transport proteins make facilitated diffusion possible?</b>",
      opts: [
        ["Integral proteins and peripheral proteins", 0, "Those two names describe where a protein sits in the membrane, not whether it transports anything."],
        ["Channel proteins and carrier proteins", 1, "Correct. Both have a hydrophilic interior, so polar and charged molecules can pass through them."],
        ["Glycoproteins and glycolipids", 0, "These act as markers on the cell surface for recognition and adhesion. They are not passageways."]
      ]
    },
    {
      n: 7,
      topic: "Transport Proteins",
      stem: "Water is polar, so it can only slip through the membrane slowly on its own.<br><b>What moves water across the membrane quickly?</b>",
      opts: [
        ["Channel proteins called aquaporins.", 1, "Correct. Water is small enough to sneak through unaided at times, but aquaporins are what move it fast."],
        ["Carrier proteins called pumps.", 0, "Pumps spend ATP to push molecules against their gradient. Water movement by osmosis is passive."],
        ["Cholesterol molecules in the bilayer.", 0, "Cholesterol sets how fluid the membrane is. It is not a passageway for anything."]
      ]
    },
    {
      n: 8,
      topic: "Diffusion in the Body",
      stem: "Gas exchange in the human body takes place in the lungs.<br><b>Which direction do the gases diffuse?</b>",
      opts: [
        ["Oxygen diffuses into the bloodstream and carbon dioxide diffuses out of it.", 1, "Correct. Each gas moves down its own gradient, which sends oxygen toward the blood and carbon dioxide toward the lungs."],
        ["Carbon dioxide diffuses into the bloodstream and oxygen diffuses out of it.", 0, "This reverses both gases. Blood arriving at the lungs is already loaded with carbon dioxide and short on oxygen."],
        ["Both oxygen and carbon dioxide diffuse into the bloodstream.", 0, "Carbon dioxide is a waste product the body is getting rid of, so it leaves the blood rather than entering it."]
      ]
    },
    {
      n: 9,
      topic: "Diffusion in the Body",
      stem: "<b>Where do nutrients from digested food diffuse into the cells and then into the bloodstream?</b>",
      opts: [
        ["The stomach", 0, "Digestion gets going in the stomach, but the nutrients are absorbed further along the tract."],
        ["The small intestine", 1, "Correct. Nutrients from digested food diffuse into the cells of the small intestine and then into the bloodstream."],
        ["The lungs", 0, "The lungs handle gas exchange. Nutrients from food never pass through them."]
      ]
    },
    {
      n: 10,
      topic: "Rate of Diffusion",
      stem: "<b>Which change would increase the rate of diffusion across a membrane?</b>",
      opts: [
        ["Increasing the thickness of the exchange surface.", 0, "Thickness is one of the factors, but a thicker surface gives molecules farther to travel, so the rate drops."],
        ["Decreasing the concentration gradient.", 0, "A steeper gradient speeds diffusion up, so flattening it slows diffusion down."],
        ["Increasing the surface area of the exchange surface.", 1, "Correct. More surface area means more room for molecules to cross at once. Raising the temperature or the concentration gradient would speed it up too."]
      ]
    }
  ]
};
