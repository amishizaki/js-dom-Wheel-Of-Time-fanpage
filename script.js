const moraineBioBtn = document.createElement('button')
moraineBioBtn.innerHTML = 'BIO'
moraineBioBtn.onclick = "moraineRevealFunc()"
const moraineCard = document.getElementById('moraine').appendChild(moraineBioBtn)
const moraineRevealFunc = () => {
    let x = document.getElementById("moraine");
    x.innerHTML = "Going in, there is one thing you need to know about this character: she’s kind of a badass. Let’s just say, at the point the show starts, you’re pretty much meeting a fully developed character. She’s wise, powerful, and as intuitive as they come. More specifically, she’s an Aes Sedai of the Blue Ajah and has dedicated her days to a secret mission she’s not even made privy to by her superiors. Ultimately, all the roads she travels lead her to find, guide, and shape the Dragon Reborn to ensure he’s ready to do what needs to be done to save their unnamed world from the Dark One."
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.margin="5em";
    } else {
      x.style.display = "none";
    }
}

const lanRevealFunc = () => {
    let x = document.getElementById("lanBioDiv");
    x.innerHTML = "Mostly referred to as Lan, he’s a warder — the parallel of a bodyguard — and he’s bound to Moiraine. Based on this, it makes sense that he’s by Moiraine’s side when she ventures to the Two Rivers in search of the Dragon Reborn. He may not look it at first, but keep in mind that he’s more than just a stone-faced guard."
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.margin="5em";
    } else {
      x.style.display = "none";
    }
  }