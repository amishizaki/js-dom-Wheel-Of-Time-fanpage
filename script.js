const moraineBioBtn = document.createElement('button')
moraineBioBtn.innerHTML = 'BIO'
const moraineCard = document.getElementById('morImg').appendChild(moraineBioBtn)

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