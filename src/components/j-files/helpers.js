const renderStockColor = (stock) => {
    switch (stock) {
        case 20:

            return 'danger'

        case 50:
            return 'warning'

        default:
            return 'success'
    }
}

export default renderStockColor;