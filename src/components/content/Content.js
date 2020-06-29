import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Typography, Grid} from "@material-ui/core"
import {getAllProducts, getCategoryProducts} from "../../api"
import Products from "../products/Products"

function Content(
    {
        catId, catName, fetchAllProducts, allProductData: {allProducts, loading, error}, fetchProducts,
        productData
    }
) {
    useEffect(() => {
        catId === '' ? fetchAllProducts() : fetchProducts(catId)
    }, [catId, fetchAllProducts, fetchProducts])

    const renderTitle = catName !== '' ? catName : 'All Time Favorites'
    const renderElements = catId ? (
        productData.loading ? (
            <p>Loading...</p>
        ) : (
            productData.error ? (
                <p style={{color: 'red'}}>{error}</p>
            ) : (
                productData.products.length > 0 ? (
                    <Grid container spacing={2}>
                        {productData.products.map(prod => (
                            <Grid item xs={6} sm={3} key={prod.id}>
                                <Products product={prod}/>
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <p>Products not found</p>
                )
            )
        )
    ) : (
        loading ? (
            <p>Loading...</p>
        ) : (
            error ? (
                <p style={{color: 'red'}}>{error}</p>
            ) : (
                <Grid container spacing={2}>
                    {allProducts.map(prod => (
                        <Grid item xs={6} sm={3} key={prod.id}>
                            <Products product={prod}/>
                        </Grid>
                    ))}
                </Grid>
            )
        )
    )
    return (
        <div style={{textAlign: 'center'}}>
            <Typography style={{textAlign: 'center', padding: 10}} variant='h6'
                        color='textPrimary'>
                {renderTitle}
            </Typography>
            <div style={{display: 'flex'}}>
                {renderElements}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    allProductData: state.allProductData,
    productData: state.productData
})

const mapActionsToProps = dispatch => ({
    fetchAllProducts: () => dispatch(getAllProducts()),
    fetchProducts: (catId) => dispatch(getCategoryProducts(catId))
})

export default connect(mapStateToProps, mapActionsToProps)(Content)
