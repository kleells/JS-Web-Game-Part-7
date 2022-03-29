// Create the playable character
const pc = newPlayableCharacter(100, 110)

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300)

async function moveNPC(){
    await npc.walkNorth(1400)
    await npc.walkEast(1200)
    await npc.walkSouth(300)
    await npc.walkEast(1500)
    await npc.walkSouth(1500)
    await npc.walkWest(2700)
    await npc.walkNorth(400)

}

moveNPC()

// Below, starting code for generator function -WORK IN PROGRESS
// function* moveNPC(){
//     yield npc.walkNorth(1400)
//     yield npc.walkEast(1200)
//     yield npc.walkSouth(300)
//     yield npc.walkEast(1500)
//     yield npc.walkSouth(1500)
//     yield npc.walkWest(2700)
//     yield npc.walkNorth(400)

// }

// const walkMove = moveNPC()

// walkMove.next()
// walkMove.next()
// walkMove.next()
// walkMove.next()
// walkMove.next()
// walkMove.next()
// walkMove.next()


// Create the inventory
const inventory = newInventory()
move(inventory).to(0, 0)

// Create everything else
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)