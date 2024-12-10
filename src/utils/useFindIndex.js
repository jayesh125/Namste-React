const useFindeIndex = (cards) => {
    let cardIndex = 0;

    for (let card of cards) {
        cardIndex++;
        if (card?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
            break;
        }
    }
    
    return cardIndex - 1;
}

export default useFindeIndex