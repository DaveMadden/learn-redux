export const increment = (num) => {
    console.log("in increment action", num)
    return {
        type: 'INCREMENT',
        payload: num
    }
}
export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}