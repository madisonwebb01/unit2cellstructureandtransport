/* Osmosis & Tonicity: water movement, hypertonic/hypotonic/isotonic, water potential, gummy bear lab */
window.BANKS = window.BANKS || {};
window.BANKS.osmosis = {
  id: "osmosis",
  name: "Osmosis & Tonicity",
  questions: [
    {
      n: 1,
      topic: "Gummy Bear Lab",
      stem: "In the gummy bear lab, one bear sat overnight in a cup with 1 tablespoon of salt stirred into the water.<br><b>What happened to that bear, and why?</b>",
      opts: [
        ["It shrank, because the solution had more solute than the bear, so water moved out of the bear.", 1, "Correct. A tablespoon of salt makes the solution hypertonic to the bear, and water always moves toward the higher solute concentration."],
        ["It swelled, because salt was pulled into the bear along with the water.", 0, "Osmosis moves water, not salt. The salt stayed in the cup, and the water left the bear rather than entering it."],
        ["It stayed the same size, because the salt solution was isotonic to the bear.", 0, "The isotonic cup held 1 teaspoon of salt, which is much less. A full tablespoon put far more solute outside the bear than inside it."]
      ]
    },
    {
      n: 2,
      topic: "Osmosis",
      stem: "<b>What is the definition of osmosis?</b>",
      opts: [
        ["the movement of any solute from a high concentration to a low concentration", 0, "That is diffusion in general. Osmosis is specifically about water, and water is the solvent rather than the solute."],
        ["the diffusion of water from a high water concentration to a low water concentration across a semipermeable membrane", 1, "Correct. Osmosis is a special case of diffusion, limited to water crossing a semipermeable membrane."],
        ["the movement of water across a membrane using energy from ATP", 0, "Osmosis is passive, so no ATP is spent. Movement that costs the cell energy is active transport."]
      ]
    },
    {
      n: 3,
      topic: "Hypertonic",
      stem: "A red blood cell that is 82% water and 18% solute is dropped into a solution that is 74% water and 26% solute.<br><b>What happens to the cell?</b>",
      opts: [
        ["It loses water and shrivels.", 1, "Correct. The solution is hypertonic to the cell, so water leaves the cell and it shrinks into a shriveled shape."],
        ["It gains water and may burst.", 0, "That is what happens in a hypotonic solution. Here the outside holds more solute than the cell, so water moves out instead of in."],
        ["It stays the same size.", 0, "Staying the same requires an isotonic solution. These two concentrations are not equal, so water has a direction to move."]
      ]
    },
    {
      n: 4,
      topic: "Hypotonic",
      stem: "A cell that is 80% water and 20% solute is placed in a solution that is 95% water and 5% solute.<br><b>What kind of solution is this to the cell, and what happens?</b>",
      opts: [
        ["Hypotonic. The cell gains water, swells, and may burst.", 1, "Correct. Hypo means less, and the solution has less solute than the cell. Water moves in, and in an animal cell that swelling can end in lysis."],
        ["Hypertonic. The cell loses water and shrivels.", 0, "Hyper means more, and this solution has less solute than the cell, not more. Water moves into the cell here."],
        ["Isotonic. There is no net movement of water.", 0, "Isotonic requires equal solute concentrations on both sides. 20% and 5% are not equal."]
      ]
    },
    {
      n: 5,
      topic: "Isotonic",
      stem: "A cell is 84% water and 16% solute. It is placed in a solution that is also 84% water and 16% solute.<br><b>What is the net movement of water?</b>",
      opts: [
        ["Water moves into the cell.", 0, "Water moves toward the higher solute concentration, and neither side is higher here. There is nothing to pull it in."],
        ["There is no net movement of water.", 1, "Correct. Water molecules keep crossing in both directions, which is why this is called dynamic equilibrium, but the amounts cancel out."],
        ["Water moves out of the cell.", 0, "That would need a higher solute concentration outside the cell. The two concentrations match exactly."]
      ]
    },
    {
      n: 6,
      topic: "Plant Cells and Tonicity",
      stem: "A plant cell is placed in a hypertonic solution.<br><b>What happens to it?</b>",
      opts: [
        ["It becomes turgid, pressing firmly against its cell wall.", 0, "Turgid is the result of a hypotonic solution, when the cell takes water in. A hypertonic solution pulls water out."],
        ["The cytoplasm pulls away from the cell wall and the cell becomes plasmolyzed.", 1, "Correct. The cell loses water, the cytoplasm shrinks back from the wall, and the cell is plasmolyzed."],
        ["It bursts.", 0, "Bursting is what happens to an animal cell in a hypotonic solution. A plant cell loses water here, and its rigid cell wall would prevent bursting anyway."]
      ]
    },
    {
      n: 7,
      topic: "Plant Cells and Tonicity",
      stem: "<b>A turgid plant cell</b> is one that:",
      opts: [
        ["has taken in water, so its cytoplasm presses against the cell wall", 1, "Correct. Turgid is the normal, healthy state for a plant cell, and the pressure against the wall is what holds the plant up."],
        ["has lost water, so its cytoplasm has pulled away from the cell wall", 0, "That is a plasmolyzed cell, which is what a hypertonic solution produces. Turgid is the opposite condition."],
        ["sits in an isotonic solution, so there is no pressure on the cell wall", 0, "With no pressure on the wall the cell is flaccid, not turgid. Turgor is defined by that pressure existing."]
      ]
    },
    {
      n: 8,
      topic: "Water Potential",
      stem: "Fill in the blank:<br>Pure water has the highest water potential, 0 bar. As solute is added to it, the water potential gets _______.",
      opts: [
        ["lower", 1, "Correct. Adding solute lowers water potential, and water always moves from a high water potential to a low one."],
        ["higher", 0, "Nothing can rise above pure water's 0 bar, since 0 is already the highest value on this scale."],
        ["stays the same", 0, "If solute made no difference to water potential, water would have no reason to move during osmosis at all."]
      ]
    },
    {
      n: 9,
      topic: "Tonicity",
      stem: "IV bags given to patients in the hospital contain solutes such as salt rather than pure water.<br><b>Why does that matter?</b>",
      opts: [
        ["So the fluid stays isotonic to the patient's blood cells and the cells do not burst.", 1, "Correct. Pure water would be hypotonic to a blood cell, so water would rush in and the cell could undergo lysis."],
        ["So the fluid can carry energy directly to the cells.", 0, "Salt is not an energy source, and the reason for the solutes is the water movement, not fuel."],
        ["So water moves into the blood cells faster.", 0, "Speeding water into blood cells is the danger being avoided here, not the goal."]
      ]
    },
    {
      n: 10,
      topic: "Tonicity",
      stem: "Paxton has tender, swollen gums as a side effect of a medication.<br><b>Which rinse would reduce the swelling, and why?</b>",
      opts: [
        ["Tap water, because a hypotonic solution draws water out of the swollen gum cells.", 0, "A hypotonic solution sends water into the cells, so rinsing with plain tap water would leave the gums as swollen or worse."],
        ["Saltwater, because a hypertonic solution draws water out of the swollen gum cells.", 1, "Correct. The salty rinse holds more solute than the gum tissue, so water leaves the cells and moves into the mouth, easing the swelling."],
        ["Either one, because water crosses the membrane equally in both directions.", 0, "Water does cross in both directions, but the net movement follows the solute, so the two rinses have opposite effects."]
      ]
    }
  ]
};
