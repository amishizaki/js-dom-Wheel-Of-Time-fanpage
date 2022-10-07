// Here, you can see that the javascript button was not working for me. When I added the eventListener, the button would "dispear" and I didn't have time to figure out why.

// const moraineBioBtn = document.createElement('button').addEventListener("click", moraineRevealFunc)
// moraineBioBtn.innerHTML = 'BIO'
// moraineBioBtn.addEventListener("click", moraineRevealFunc())
// const moraineCard = document.getElementById('moraine').appendChild(moraineBioBtn)

// The search bar
const characterName = document.getElementsByClassName("name")

const searchBar = () => {
  let search = document.getElementById("searchInput")
  if (search.innerHTML == characterName) {
    return 
  }
}


// Created a template for profile reveals.
const moraineRevealFunc = () => {
    let x = document.getElementById("morBtnDiv");
    x.innerHTML = "A powerful Aes Sedai of the Blue Ajah, Moiraine has been on a quest to find the Dragon Reborn. She follows a prophecy about this reincarnated figure from an Aes Sedai sister and wants to find him or her before the Dark One can. Moiraine is a reserved guide figure overflowing with quiet wisdom and strong talent for the One Power. She’s kind of intimidating to the youths she brings into her journey. But Moiraine always has the greater good at heart."
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.margin="5px";
    } else {
      x.style.display = "none";
    }
}

const moraineStatus = () => {
  let x = document.getElementById("morBtnDiv")
  x.innerHTML = "Alive"
  if (x.style.display === "none") {
    x.style.display = "block";
    x.style.border="5px";
  } else {
    x.style.display = "none";
  }
}

const lanRevealFunc = () => {
    let x = document.getElementById("lanBtnDiv");
    x.innerHTML = "A Warder to Moiraine, Lan is so much more than meets the eye. Stoic and often serious, Lan is bonded to Moiraine; he protects her and fights by her side. His skills with a sword help save the day more than once. Lan shows loyalty to his traveling companions and values anything and anyone Moiraine deems important. Their bond isn’t romantic, though that is the case with some Aes Sedai and their Warders, but it is far greater than friendship."
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.margin="5px";
    } else {
      x.style.display = "none";
    }
  }

  const lanStatus = () => {
    let x = document.getElementById("lanBtnDiv");
    x.innerHTML = "Alive"
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.border="5px";
    } else {
      x.style.display = "none";
    }
  }

  const egweneReveal = () => {
    let x = document.getElementById("egwBtnDiv");
    x.innerHTML = "Egwene is strong-willed and determined. We think she might be a ta’veren because Moiraine considers her a candidate to be the Dragon Reborn. She’s the innkeeper’s daughter too, so she knows all the comings and goings since The Winespring Inn is the village’s only such establishment. Of the group, Egwene may be the only one who’s okay with having to suddenly leave home with Moiraine. She wants to see more of the world, and while she won’t accept her fate if it doesn’t align with what she wants, she’s more… flexible than the others."
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.border="5px";
    } else {
      x.style.display = "none";
    }
  }

  const egweneStatus = () => {
    let x = document.getElementById("egwBtnDiv");
    x.innerHTML = "Alive"
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.border="5px";
    } else {
      x.style.display = "none";
    }
  }

  const perrinReveal = () => {
    let x = document.getElementById("perBtnDiv");
    x.innerHTML = "An apprentice to the village blacksmith, Perrin is constantly moving and thinking deliberately. He kind of has the temperament of an Ent, and that’s a compliment. Taller and burlier than his friends, Perrin is mindful of not abusing his strength. He constantly worries about accidentally hurting others. Averse to violence and conflict, Perrin’s gentle and honestly, just too pure to get swept up into Moiraine’s mess. But he’s also a ta’veren, someone who can affect the Wheel’s Pattern."
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.border="5px";
    } else {
      x.style.display = "none";
    }
  }

  const perrinStatus = () => {
    let x = document.getElementById("perBtnDiv");
    x.innerHTML = "Alive"
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.border="5px";
    } else {
      x.style.display = "none";
    }
  }

  const randReveal = () => {
    let x = document.getElementById("randBtnDiv");
    x.innerHTML = "Another ta’veren (yes, it is highly unusual to find more than a single ta’veren in the same out of the way village), Rand is the son of a farmer. He adores his father Tam, who seems to be a good single dad aside from keeping some important secrets from his son. When Rand’s not helping on the farm, which is a little outside of Emond’s Field, he spends time with Egwene. He likes his home and has a vision of staying in Two Rivers always and raising a family of his own."
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.border="5px";
    } else {
      x.style.display = "none";
    }
  }

  const randStatus = () => {
    let x = document.getElementById("randBtnDiv");
    x.innerHTML = "Alive"
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.border="5px";
    } else {
      x.style.display = "none";
    }
  }

  const matReveal = () => {
    let x = document.getElementById("matBtnDiv");
    x.innerHTML = "Part of the best bud trio with Rand and Perrin, Mat is more devil-may-care than either of his more responsible friends. Always ready to throw dice or pull a prank on some unsuspecting person, he gets himself into trouble all the time. Truly, all the time. Real Pippin from The Lord of the Rings vibes here. He’s curious and not at all worried about consequences. Also a ta’veren, Mat is not really about leaving home either. As you can imagine, Moiraine has a great time trying to keep Mat in one piece."
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.border="5px";
    } else {
      x.style.display = "none";
    }
  }

  const matStatus = () => {
    let x = document.getElementById("matBtnDiv");
    x.innerHTML = "Alive (but undergoing casting changes)"
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.border="5px";
    } else {
      x.style.display = "none";
    }
  }