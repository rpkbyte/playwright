// @ts-check

const {test, expect} = require('@playwright/test')

test("Example test" , async ({page})=>{
    expect(1).toBe(1)
})


test.skip("Example test 2" , async ({page})=>{
  expect(1).toBe(11)
})

test("Example test 3" , async ({page})=>{
  expect(1).toBe(1.0)
})

test("Example test 4" , async ({page})=>{
  expect("Rampravesh kumar").toContain("Rampravesh")
})

test("Example test 5" , async ({page})=>{
  expect("Rampravesh kumar").toContain("Rampravesh")
  expect(1).toBe(1)
  expect(344)
})