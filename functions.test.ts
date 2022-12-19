

const {shuffleArray} = require('./utils')


describe('shuffleArray should', () => {
    // CODE HERE
   


const bots = [
    {
        id: 0,
        name: 'The Hammer', 
        imgAddress: 'https://robohash.org/hammer',
        health: 100, 
        attacks: [
            {
                id: 0, 
                damage: 25
            }, 
            {
                id: 1, 
                damage: 30
            }
        ]
    }, 
    {
        id: 1,
        name: 'Crowbar', 
        imgAddress: 'https://robohash.org/crowbar',
        health: 75, 
        attacks: [
            {
                id: 0, 
                damage: 15
            }, 
            {
                id: 1, 
                damage: 40
            }
        ]
    }
]
test('correct array form', async () => {
    const list =  shuffleArray(bots);
    //console.log(list);
    //expect(list).toMatchObject(['something']);
    expect(list).toHaveLength(bots.length);
}),

test('correct array form', async () => {
    const list =  shuffleArray(bots);
   // console.log(list);
    //expect(list).toContain(bots);
    expect(Array.isArray(list)).toBe(true)
})
})
    

