import Sum from "../Components/Sum";


test("Sum function should calculate the sum of two numbers", ()=>{
    const result = Sum(5, 6);
    expect(result).toBe(11);
})
