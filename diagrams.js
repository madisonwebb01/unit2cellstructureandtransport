/* Four original cell diagrams, drawn here rather than copied from any worksheet.
   Each labelable structure is a <g class="hot" data-part="key"> holding its shapes,
   one or more <circle class="ring"> click targets, and a <g class="numtag"> badge. */

(function(){

function tag(n, x, y, tx, ty){
  var lead = (tx === undefined) ? '' :
    '<line class="lead" x1="' + x + '" y1="' + y + '" x2="' + tx + '" y2="' + ty + '"/>';
  return '<g class="numtag">' + lead + '<circle cx="'+x+'" cy="'+y+'" r="10"/><text x="'+x+'" y="'+(y+4)+'">'+n+'</text></g>';
}
function ring(x, y, r){
  return '<circle class="ring" cx="'+x+'" cy="'+y+'" r="'+r+'"/>';
}

/* ---------------- animal cell ---------------- */
var animal =
  '<rect class="miss" x="0" y="0" width="420" height="300"/>' +

  '<g class="hot" data-part="membrane">' +
    '<ellipse cx="210" cy="150" rx="196" ry="136" fill="#eaf6fb" stroke="#1D4C7A" stroke-width="4"/>' +
    ring(210, 15, 21) +
  '</g>' +

  '<g class="hot" data-part="cytoplasm">' +
    ring(300, 250, 26) +
  '</g>' +

  '<g class="hot" data-part="er">' +
    '<path d="M196 56 q16 10 0 20 q-16 10 0 20 q16 10 0 20" fill="none" stroke="#1781A1" stroke-width="3.5"/>' +
    '<path d="M214 52 q16 10 0 20 q-16 10 0 20 q16 10 0 20" fill="none" stroke="#1781A1" stroke-width="3.5"/>' +
    ring(206, 76, 26) +
  '</g>' +

  '<g class="hot" data-part="nucleus">' +
    '<circle cx="150" cy="122" r="46" fill="#cfe3f2" stroke="#1D4C7A" stroke-width="3"/>' +
    '<circle cx="150" cy="122" r="16" fill="#9fc6e3"/>' +
    ring(150, 122, 30) +
  '</g>' +

  '<g class="hot" data-part="golgi">' +
    '<path d="M274 74 q26 -10 52 0" fill="none" stroke="#1D4C7A" stroke-width="3.5"/>' +
    '<path d="M276 84 q24 -10 48 0" fill="none" stroke="#1D4C7A" stroke-width="3.5"/>' +
    '<path d="M278 94 q22 -10 44 0" fill="none" stroke="#1D4C7A" stroke-width="3.5"/>' +
    ring(300, 84, 26) +
  '</g>' +

  '<g class="hot" data-part="mitochondria">' +
    '<ellipse cx="305" cy="186" rx="30" ry="17" fill="#f6d7c4" stroke="#b05a2a" stroke-width="2.5"/>' +
    '<path d="M283 186 q8 -9 14 0 q8 9 14 0 q8 -9 14 0" fill="none" stroke="#b05a2a" stroke-width="2"/>' +
    '<ellipse cx="128" cy="222" rx="26" ry="15" fill="#f6d7c4" stroke="#b05a2a" stroke-width="2.5"/>' +
    '<path d="M110 222 q7 -8 12 0 q7 8 12 0 q7 -8 12 0" fill="none" stroke="#b05a2a" stroke-width="2"/>' +
    ring(305, 186, 26) + ring(128, 222, 26) +
  '</g>' +

  '<g class="hot" data-part="lysosome">' +
    '<circle cx="236" cy="236" r="17" fill="#e7d4f0" stroke="#6b3f8f" stroke-width="2.5"/>' +
    '<circle cx="231" cy="232" r="2.6" fill="#6b3f8f"/><circle cx="241" cy="235" r="2.6" fill="#6b3f8f"/>' +
    '<circle cx="235" cy="242" r="2.6" fill="#6b3f8f"/>' +
    ring(236, 236, 26) +
  '</g>' +

  '<g class="hot" data-part="ribosome">' +
    '<circle cx="96" cy="92" r="5" fill="#1D4C7A"/><circle cx="112" cy="74" r="5" fill="#1D4C7A"/>' +
    '<circle cx="78" cy="138" r="5" fill="#1D4C7A"/><circle cx="262" cy="150" r="5" fill="#1D4C7A"/>' +
    ring(96, 92, 26) + ring(112, 74, 26) + ring(78, 138, 26) + ring(262, 150, 26) +
  '</g>' +
  '<g class="taglayer">' + tag(1, 190, 264, 186, 285) + tag(2, 300, 250) + tag(4, 248, 70, 222, 80) + tag(3, 150, 122) + tag(7, 300, 48, 300, 76) + tag(6, 352, 186, 330, 186) + tag(8, 190, 222, 219, 232) + tag(5, 52, 104, 90, 95) + '</g>';

/* ---------------- plant cell ---------------- */
var plant =
  '<rect class="miss" x="0" y="0" width="420" height="300"/>' +

  '<g class="hot" data-part="wall">' +
    '<rect x="8" y="8" width="404" height="284" rx="16" fill="#dff0e0" stroke="#2f6b3a" stroke-width="7"/>' +
    ring(300, 11, 17) +
  '</g>' +

  '<g class="hot" data-part="membrane">' +
    '<rect x="22" y="22" width="376" height="256" rx="11" fill="#eaf6fb" stroke="#1D4C7A" stroke-width="3"/>' +
    ring(150, 25, 26) +
  '</g>' +

  '<g class="hot" data-part="vacuole">' +
    '<rect x="112" y="72" width="206" height="150" rx="28" fill="#d6ecf7" stroke="#1781A1" stroke-width="3"/>' +
    ring(215, 147, 36) +
  '</g>' +

  '<g class="hot" data-part="nucleus">' +
    '<circle cx="66" cy="96" r="38" fill="#cfe3f2" stroke="#1D4C7A" stroke-width="3"/>' +
    '<circle cx="66" cy="96" r="13" fill="#9fc6e3"/>' +
    ring(66, 96, 27) +
  '</g>' +

  '<g class="hot" data-part="er">' +
    '<path d="M96 146 q14 9 0 18 q-14 9 0 18" fill="none" stroke="#1781A1" stroke-width="3.5"/>' +
    '<path d="M112 144 q14 9 0 18 q-14 9 0 18" fill="none" stroke="#1781A1" stroke-width="3.5"/>' +
    ring(104, 163, 23) +
  '</g>' +

  '<g class="hot" data-part="chloroplast">' +
    '<ellipse cx="362" cy="112" rx="25" ry="15" fill="#9fd6a4" stroke="#2f6b3a" stroke-width="2.5"/>' +
    '<ellipse cx="352" cy="204" rx="25" ry="15" fill="#9fd6a4" stroke="#2f6b3a" stroke-width="2.5"/>' +
    '<ellipse cx="70" cy="214" rx="25" ry="15" fill="#9fd6a4" stroke="#2f6b3a" stroke-width="2.5"/>' +
    ring(362, 112, 26) + ring(352, 204, 26) + ring(70, 214, 24) +
  '</g>' +

  '<g class="hot" data-part="mitochondria">' +
    '<ellipse cx="352" cy="56" rx="25" ry="14" fill="#f6d7c4" stroke="#b05a2a" stroke-width="2.5"/>' +
    '<path d="M335 56 q7 -8 12 0 q7 8 12 0" fill="none" stroke="#b05a2a" stroke-width="2"/>' +
    '<ellipse cx="252" cy="256" rx="25" ry="14" fill="#f6d7c4" stroke="#b05a2a" stroke-width="2.5"/>' +
    '<path d="M235 256 q7 -8 12 0 q7 8 12 0" fill="none" stroke="#b05a2a" stroke-width="2"/>' +
    ring(352, 56, 26) + ring(252, 256, 26) +
  '</g>' +

  '<g class="hot" data-part="golgi">' +
    '<path d="M156 250 q20 -9 40 0" fill="none" stroke="#1D4C7A" stroke-width="3.5"/>' +
    '<path d="M158 259 q18 -9 36 0" fill="none" stroke="#1D4C7A" stroke-width="3.5"/>' +
    '<path d="M160 268 q16 -9 32 0" fill="none" stroke="#1D4C7A" stroke-width="3.5"/>' +
    ring(176, 259, 26) +
  '</g>' +

  '<g class="hot" data-part="ribosome">' +
    '<circle cx="62" cy="158" r="5" fill="#1D4C7A"/><circle cx="46" cy="178" r="5" fill="#1D4C7A"/>' +
    '<circle cx="88" cy="252" r="5" fill="#1D4C7A"/>' +
    ring(62, 158, 17.5) + ring(46, 178, 17.5) + ring(88, 252, 16.5) +
  '</g>' +

  '<g class="hot" data-part="cytoplasm">' +
    ring(124, 238, 20.5) +
  '</g>' +
  '<g class="taglayer">' + tag(1, 250, 46, 250, 12) + tag(2, 150, 46, 150, 24) + tag(4, 215, 147) + tag(5, 66, 96) + tag(6, 100, 198, 108, 176) + tag(10, 340, 152, 358, 124) + tag(8, 306, 46, 330, 52) + tag(9, 210, 259, 194, 259) + tag(7, 38, 162, 58, 158) + tag(3, 124, 238) + '</g>';

/* ---------------- prokaryotic cell ---------------- */
var prokaryote =
  '<rect class="miss" x="0" y="0" width="420" height="240"/>' +

  '<g class="hot" data-part="pili">' +
    '<path d="M86 40 l-6 -20" stroke="#b8852c" stroke-width="3.5" fill="none"/>' +
    '<path d="M126 38 l2 -21" stroke="#b8852c" stroke-width="3.5" fill="none"/>' +
    '<path d="M166 40 l8 -20" stroke="#b8852c" stroke-width="3.5" fill="none"/>' +
    '<path d="M106 198 l-4 20" stroke="#b8852c" stroke-width="3.5" fill="none"/>' +
    ring(82, 28, 26) + ring(127, 26, 26) + ring(170, 28, 22.5) + ring(104, 210, 26) +
  '</g>' +

  '<g class="hot" data-part="capsule">' +
    '<rect x="40" y="40" width="280" height="158" rx="79" fill="#fdf0dc" stroke="#b8852c" stroke-width="6"/>' +
    ring(252, 44, 22) +
  '</g>' +

  '<g class="hot" data-part="membrane">' +
    '<rect x="54" y="54" width="252" height="130" rx="65" fill="#eaf6fb" stroke="#1D4C7A" stroke-width="3"/>' +
    ring(206, 57, 22) +
  '</g>' +

  '<g class="hot" data-part="nucleoid">' +
    '<path d="M138 120 q18 -24 38 -6 q20 18 38 -6 q16 -18 28 2" fill="none" stroke="#6b3f8f" stroke-width="4"/>' +
    '<path d="M142 132 q18 20 38 4 q20 -16 38 4" fill="none" stroke="#6b3f8f" stroke-width="4"/>' +
    ring(180, 122, 30) +
  '</g>' +

  '<g class="hot" data-part="ribosome">' +
    '<circle cx="96" cy="146" r="5" fill="#1D4C7A"/><circle cx="110" cy="92" r="5" fill="#1D4C7A"/>' +
    '<circle cx="262" cy="152" r="5" fill="#1D4C7A"/><circle cx="250" cy="88" r="5" fill="#1D4C7A"/>' +
    ring(96, 146, 26) + ring(110, 92, 26) + ring(262, 152, 26) + ring(250, 88, 20.5) +
  '</g>' +

  '<g class="hot" data-part="flagellum">' +
    '<path d="M320 119 q22 -22 40 0 q18 22 36 0 q10 -12 20 -4" fill="none" stroke="#1D4C7A" stroke-width="4"/>' +
    ring(372, 112, 26) +
  '</g>' +
  '<g class="taglayer">' + tag(5, 146, 12, 132, 22) + tag(1, 250, 20, 250, 44) + tag(2, 352, 56, 287, 73) + tag(3, 190, 170, 190, 142) + tag(4, 140, 70, 116, 86) + tag(6, 372, 170, 378, 135) + '</g>';

/* ---------------- cell membrane ---------------- */
function membraneSvg(){
  var s = '<rect class="miss" x="0" y="0" width="420" height="260"/>';
  var heads = '', tails = '';
  for(var x = 18; x <= 402; x += 24){
    /* skip the columns where a protein sits */
    if((x > 186 && x < 246) || (x > 282 && x < 324) || (x > 42 && x < 84)) continue;
    heads += '<circle cx="' + x + '" cy="76" r="9" fill="#f2c14e" stroke="#9a7415" stroke-width="1.6"/>';
    heads += '<circle cx="' + x + '" cy="186" r="9" fill="#f2c14e" stroke="#9a7415" stroke-width="1.6"/>';
    tails += '<path d="M' + (x-4) + ' 85 q-3 20 1 36 M' + (x+4) + ' 85 q3 20 -1 36" fill="none" stroke="#9a7415" stroke-width="2.4"/>';
    tails += '<path d="M' + (x-4) + ' 177 q-3 -20 1 -36 M' + (x+4) + ' 177 q3 -20 -1 -36" fill="none" stroke="#9a7415" stroke-width="2.4"/>';
  }

  s += '<g class="hot" data-part="tail">' + tails + ring(162, 112, 17.5) + ring(162, 150, 17.5) + '</g>';
  s += '<g class="hot" data-part="head">' + heads + ring(162, 76, 17) + ring(162, 186, 17) + '</g>';

  s += '<g class="hot" data-part="cholesterol">' +
         '<rect x="110" y="104" width="15" height="40" rx="7" fill="#c8a2d8" stroke="#6b3f8f" stroke-width="2"/>' +
         '<rect x="110" y="118" width="15" height="40" rx="7" fill="#c8a2d8" stroke="#6b3f8f" stroke-width="2"/>' +
         ring(117, 131, 26) +
       '</g>';

  s += '<g class="hot" data-part="channel">' +
         '<rect x="190" y="58" width="20" height="146" rx="9" fill="#8fd0e0" stroke="#1781A1" stroke-width="2.5"/>' +
         '<rect x="222" y="58" width="20" height="146" rx="9" fill="#8fd0e0" stroke="#1781A1" stroke-width="2.5"/>' +
         ring(216, 131, 26) +
       '</g>';

  s += '<g class="hot" data-part="carrier">' +
         '<path d="M284 58 h17 l6 50 l-6 50 v46 h-17 v-46 l-6 -50 l6 -50 z" fill="#7fc4a8" stroke="#0f7a5a" stroke-width="2.5"/>' +
         '<path d="M322 58 h-17 l-6 50 l6 50 v46 h17 v-46 l6 -50 l-6 -50 z" fill="#7fc4a8" stroke="#0f7a5a" stroke-width="2.5"/>' +
         ring(303, 131, 26) +
       '</g>';

  s += '<g class="hot" data-part="glycoprotein">' +
         '<rect x="50" y="58" width="26" height="146" rx="11" fill="#f0a6b4" stroke="#a3283c" stroke-width="2.5"/>' +
         '<path d="M63 58 l0 -16 M63 42 l-13 -11 M63 42 l13 -11 M50 31 l-9 -9 M76 31 l9 -9" fill="none" stroke="#a3283c" stroke-width="2.6"/>' +
         '<circle cx="41" cy="22" r="4.5" fill="#a3283c"/><circle cx="85" cy="22" r="4.5" fill="#a3283c"/>' +
         '<circle cx="63" cy="42" r="4.5" fill="#a3283c"/>' +
         ring(63, 36, 26) +
       '</g>';

  s += '<g class="hot" data-part="peripheral">' +
         '<ellipse cx="356" cy="58" rx="23" ry="13" fill="#b9c4d4" stroke="#44586e" stroke-width="2.5"/>' +
         ring(356, 58, 26) +
       '</g>';

  s += '<g class="taglayer">' + tag(2, 366, 131, 366, 118) + tag(1, 162, 46, 162, 67) + tag(3, 90, 131, 108, 131) + tag(4, 216, 228, 216, 206) + tag(5, 303, 228, 303, 206) + tag(6, 108, 36, 88, 32) + tag(7, 356, 24, 356, 45) + '</g>';
  return s;
}

window.DIAGRAMS = {
  animal: {
    id: "animal",
    name: "Animal Cell",
    box: "0 0 420 300",
    svg: animal,
    parts: [
      { key:"membrane",     n:1,  label:"Cell membrane",        fn:"Semipermeable boundary that regulates what enters and exits the cell." },
      { key:"cytoplasm",    n:2,  label:"Cytoplasm",            fn:"Gel-like substance that suspends and cushions the organelles." },
      { key:"nucleus",      n:3,  label:"Nucleus",              fn:"Contains DNA and controls the activities of the cell." },
      { key:"er",           n:4,  label:"Endoplasmic reticulum",fn:"Processes and transports materials through the cell." },
      { key:"ribosome",     n:5,  label:"Ribosome",             fn:"Makes proteins. Found in prokaryotes too." },
      { key:"mitochondria", n:6,  label:"Mitochondria",         fn:"Site of cell respiration. Converts and releases energy." },
      { key:"golgi",        n:7,  label:"Golgi apparatus",      fn:"Modifies, sorts, and packages materials for transport." },
      { key:"lysosome",     n:8,  label:"Lysosome",             fn:"Vacuole holding enzymes that break down and digest cell waste." }
    ]
  },
  plant: {
    id: "plant",
    name: "Plant Cell",
    box: "0 0 420 300",
    svg: plant,
    parts: [
      { key:"wall",         n:1,  label:"Cell wall",            fn:"Surrounds the membrane, protects the cell, and gives it rigidity. Plant cells only." },
      { key:"membrane",     n:2,  label:"Cell membrane",        fn:"Semipermeable boundary that regulates what enters and exits the cell." },
      { key:"cytoplasm",    n:3,  label:"Cytoplasm",            fn:"Gel-like substance that suspends and cushions the organelles." },
      { key:"vacuole",      n:4,  label:"Large central vacuole",fn:"Stores water and nutrients and helps the cell keep its shape. Plant cells only." },
      { key:"nucleus",      n:5,  label:"Nucleus",              fn:"Contains DNA and controls the activities of the cell." },
      { key:"er",           n:6,  label:"Endoplasmic reticulum",fn:"Processes and transports materials through the cell." },
      { key:"ribosome",     n:7,  label:"Ribosome",             fn:"Makes proteins." },
      { key:"mitochondria", n:8,  label:"Mitochondria",         fn:"Site of cell respiration. Plant cells have these as well as chloroplasts." },
      { key:"golgi",        n:9,  label:"Golgi apparatus",      fn:"Modifies, sorts, and packages materials for transport." },
      { key:"chloroplast",  n:10, label:"Chloroplast",          fn:"Site of photosynthesis. Contains the pigment chlorophyll. Plant cells only." }
    ]
  },
  prokaryote: {
    id: "prokaryote",
    name: "Prokaryotic Cell",
    box: "0 0 420 240",
    svg: prokaryote,
    parts: [
      { key:"capsule",   n:1, label:"Capsule",         fn:"Sticky outer layer that helps the cell attach to surfaces." },
      { key:"membrane",  n:2, label:"Cell membrane",   fn:"Regulates what enters and exits. Prokaryotes have one just as eukaryotes do." },
      { key:"nucleoid",  n:3, label:"Nucleoid region", fn:"Where the DNA sits. It is not enclosed in a nucleus." },
      { key:"ribosome",  n:4, label:"Ribosome",        fn:"Makes proteins. One of the four structures prokaryotes share with eukaryotes." },
      { key:"pili",      n:5, label:"Pili",            fn:"Short projections used to exchange genetic material." },
      { key:"flagellum", n:6, label:"Flagellum",       fn:"Long tail used for locomotion." }
    ]
  },
  membrane: {
    id: "membrane",
    name: "Cell Membrane",
    box: "0 0 420 260",
    svg: membraneSvg(),
    parts: [
      { key:"head",         n:1, label:"Phospholipid head",  fn:"The outward-facing end of a phospholipid. It faces the water on either side of the membrane." },
      { key:"tail",         n:2, label:"Phospholipid tail",  fn:"The inward-facing end. The tails form the hydrophobic middle that blocks polar molecules and ions." },
      { key:"cholesterol",  n:3, label:"Cholesterol",        fn:"A lipid that regulates fluidity, keeping the phospholipids spread out at low temperatures." },
      { key:"channel",      n:4, label:"Channel protein",    fn:"Transport protein with a hydrophilic interior that lets polar molecules and ions pass through." },
      { key:"carrier",      n:5, label:"Carrier protein",    fn:"Transport protein that is more selective about which molecules it will move." },
      { key:"glycoprotein", n:6, label:"Glycoprotein",       fn:"Protein with a sugar chain attached. Acts as a marker for cell recognition and helps with adhesion." },
      { key:"peripheral",   n:7, label:"Peripheral protein", fn:"Protein resting on the surface of the membrane rather than embedded in the bilayer." }
    ]
  }
};

window.DIAGRAM_ORDER = ["animal", "plant", "prokaryote", "membrane"];

})();
