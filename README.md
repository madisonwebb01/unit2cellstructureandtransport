# Unit 2 Practice Test: Cell Structure & Transport

A self-contained practice site for your 9th grade Biology students. No build step, no
dependencies, no server code. Open `index.html` and it runs.

## What is in it

**62 questions across six sections:**

| Section | File | Questions |
|---|---|---|
| Cell Stations | `stations.js` | 10 |
| Cell Membrane & Transport | `membrane.js` | 10 |
| Osmosis & Tonicity | `osmosis.js` | 10 |
| Diffusion | `diffusion.js` | 10 |
| Active Transport | `active.js` | 10 |
| Label the Diagram | `labeling.js` | 12 |

Root Words & Vocabulary is the sixth topic on your study guide. You asked to leave it out
as a quiz section, so it appears only as flashcards in the tools tab.

**Four diagrams**, in `diagrams.js`: animal cell (8 structures), plant cell (10),
prokaryotic cell (6), and cell membrane (7). 31 labelable structures in total, covering
everything on your station lists. They drive both the Label the Diagram quiz section and
the Label the Cell click drill.

**Three tabs:**

1. **Practice Test.** Students pick a section, or Mixed, or Missed only, or Flagged. Three
   toggles: unseen first (on by default), shuffle questions, shuffle answers. Nothing about
   the answer is visible until they commit to a choice. After they submit, a banner says
   right or wrong, the explanations open, and a "Where to review this" line points them at
   the specific notes or lab.
2. **Additional Practice Tools.** Vocabulary flashcards (all 22 terms), root word flashcards
   (all 24 roots), a Distractor Autopsy built from all 124 wrong answers, a **Label the Cell**
   click drill, and a Transport Sort drill. In Label the Cell the student is given a structure
   name and clicks it on the diagram, with no numbers showing, so it tests finding the
   structure rather than recognizing its name. The section chips filter the Distractor
   Autopsy only; Label the Cell has its own diagram picker.
3. **My Review.** Missed, Flagged, All answered, and Correct, each showing the question,
   what the student chose, the right answer, both explanations, and the review source.

Progress saves in the student's browser. It does not sync across devices and never reaches
you. The site says so on the page.

## Putting it on GitHub Pages

Same as Unit 1.

1. Go to github.com and create a new repository. Name it something like `unit2cells`.
2. **Set it to Public.** GitHub Pages is only free on public repos. A private repo will
   publish nothing and give you no error that explains why.
3. On the new empty repo, click **uploading an existing file**.
4. Unzip the folder on your computer, open it, select all 10 files inside, and drag those
   **files** in. Do not drag the folder itself. If you drag the folder, GitHub nests
   everything one level deep and the page will load but no questions will ever appear.
5. Click **Commit changes**.
6. Go to **Settings**, then **Pages** in the left sidebar. Under Source pick **Deploy from
   a branch**, branch **main**, folder **/ (root)**. Save.
7. Wait two or three minutes. Your URL will be
   `https://<your-username>.github.io/unit2cells/`.

### If something looks wrong

- **Page loads with the header and stat tiles, but no question ever appears.** The `.js`
  files are not sitting next to `index.html`. This is the folder-instead-of-files mistake
  from step 4. Delete the uploaded folder in GitHub and re-upload the 10 files directly.
- **Questions appear but a diagram is blank.** `diagrams.js` did not upload. It has to sit
  next to `index.html` like the rest.
- **Blank white page.** Give it another two minutes. First deploys are slow.
- **Fonts look wrong.** The page pulls Ovo and Titillium Web from Google Fonts. On a locked
  down school network it falls back to a serif and a sans serif, and everything still works.

## Adding or editing questions

Open the section's `.js` file and append another object to the `questions` array. Nothing
else needs to change: counts, filters, the Distractor Autopsy, and the stat tiles all read
from these files.

```js
{
  n: 11,                                  // unique within this file
  topic: "Osmosis",                       // must match a key in tools.js sources
  stem: "Context sentence.<br><b>The bolded question?</b>",
  opts: [
    ["A wrong choice", 0, "Why this one does not work."],
    ["The right choice", 1, "Correct. Why this one does."]
  ],
  note: "Optional flag shown after submitting.",  // leave out if not needed
  fig: "animal"     // optional, draws a numbered diagram above the stem.
}                   // animal, plant, prokaryote, or membrane.
```

Rules the page depends on:

- Exactly one option carries the `1`. Everything else is `0`.
- The third item in each option is the explanation and is never empty. Wrong answers need a
  reason they fail, not just a note that they are wrong.
- `topic` has to exist as a key in the `sources` object at the bottom of `tools.js`, or the
  question falls back to a generic "Your Unit 2 notes" review line.
- Three options is fine. Do not add a fourth just to have four.

Flashcards, the sorting drill, and the review-source map all live in `tools.js`.

## Teacher notes

**Every question here was written fresh from your unit materials.** Nothing was copied from
your Google Form quizzes or the Unit 2 exam, so students practicing on this site are not
seeing your live assessment items. The sources used were the Unit 2 Study Guide, the Cell
Stations answer key, the Cell Membrane, Diffusion, Active Transport, Osmosis, and Osmosis in
Action notes, the Osmosis in Gummy Bears lab key, and the Root Words & Vocabulary sheet.

**The four diagrams were drawn from scratch in code, not traced or copied.** Your doodle
notes are copyright Emmatheteachie and the station materials are copyright Science Is Real,
so neither set could go on a public GitHub repo. The structures and their functions follow
your station lists, but the artwork is original and uses your class colors. Students will
notice the diagrams look different from their notes, which is worth a sentence in class:
being able to find the nucleus in an unfamiliar drawing is the skill the exam is testing.

**Scope decisions you made:**

- Root Words & Vocabulary is flashcards only, not a quiz section.
- The sodium-potassium pump is tested on purpose and direction only. The phosphorylation
  cycle in the notes is not tested anywhere on the site.

**Places your notes simplify, left as they are:**

- Your notes say water "can slip through the membrane unaided" sometimes, and treat
  aquaporins as the fast route rather than the only route. Questions follow that wording.
- Your notes group channel and carrier proteins together as "transport proteins" for both
  facilitated diffusion and active transport, rather than reserving "pump" as a separate
  category. Questions follow that too.
- The gummy bear lab key notes that the isotonic bear usually still grows, so the real data
  does not match the prediction. Questions ask about the predicted and intended result, not
  the messy classroom outcome.

**Numbers in the tonicity questions** are your worked examples from the Osmosis notes, not
invented: 80/20 against 95/5 for hypotonic, 84/16 against 84/16 for isotonic, and 82/18
against 74/26 for hypertonic.

## Files

```
index.html     the whole app
stations.js    Cell Stations bank
membrane.js    Cell Membrane & Transport bank
osmosis.js     Osmosis & Tonicity bank
diffusion.js   Diffusion bank
active.js      Active Transport bank
diagrams.js    the four cell diagrams and their labelable structures
labeling.js    Label the Diagram bank
tools.js       flashcards, sorting drill, and the topic to review-source map
README.md      this file
```

`source-facts.md` is a working file holding the facts pulled from your materials. It is not
needed by the site and does not have to be uploaded to GitHub.

---

Created using Claude by Madison Webb, 2026.
Anthropic. (2026). *Claude* [large language model]. https://claude.ai
