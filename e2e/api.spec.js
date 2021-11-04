const { test, expect } = require('@playwright/test');
const faker = require('faker')
const teaName = "Breakfast Tea"
const newTea = faker.music.genre()
console.log(newTea);
const teaPrice = 1.99
const allTeas = "{ teas { id, name} }"
const getTea = `{ teas(name: "${teaName}") { id, name} }`
const addTea = `mutation { addTea(teaInput: { name: "${newTea}", description: "Intensive falvour", price: ${teaPrice}, producerId: "60b8bc31956abb0009efb4d0" }){ name price} }`

test('should be able to list all teas', async ({ request }) => {
    const response = await request.post('/', {
        data: {
            query: allTeas
        }
    })
    expect(response.ok()).toBeTruthy()
    // console.log('check', (await response.body()).toString())
})
test('should be able to get one tea by name', async ({ request }) => {
    const response = await request.post('/', {
        data: {
            query: getTea
        }
    })
    expect(response.ok()).toBeTruthy()
    expect((await response.body()).toString().includes(teaName))
})

// test('should be able to add a new tea', async ({ request }) => {
//     const response = await request.post('/', {
//         data: {
//             query: addTea
//         }
//     })
//     expect(response.ok()).toBeTruthy()
//     console.log('add a new tea', (await response.body()).toString());
// })
test('should be able to verify that added tea is now added to the list of all teas', async ({ request }) => {
    const response = await request.post('/', {
        data: {
            query: allTeas
        }
    })
    expect(response.ok()).toBeTruthy()
    // console.log('response', response.body().data.teas)
    expect(response.status()).toBe(200)
})
