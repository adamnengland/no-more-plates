const FreedomCalculator = (state) => {
    if (state.Required_Plates == 0) {
        return "#DAF7A6"
      } else if (state.Required_Plates == 1) {
        return "#FFC300"
      } else {
        return "#C70039"
      }
}
export default FreedomCalculator;