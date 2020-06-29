import React from 'react'
import {connect} from 'react-redux'
import {Grid, Button, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {addItemToCart} from "../../api"

const useStyles = makeStyles({
    subProdImg: {
        maxWidth: '100%',
        height: 90,
        objectFit: 'cover',
        borderRadius: '50%'
    },
})

function SubProducts({subProduct, prodName, prodImage, addToCart}) {
    const classes = useStyles()
    const {inStock, price, quantity} = subProduct

    const addItemToCart = () => {
        const {id, quantity, price, productId} = subProduct
        const item = {id, quantity, price, productId, prodImage, prodName, units: 1, subTotal: price}
        addToCart(item)
    }

    return (
        <Grid container alignItems='center' spacing={3}>
            <Grid item sm={2} xs={4}>
                <img src={prodImage} alt={prodName} className={classes.subProdImg}/>
            </Grid>
            <Grid item sm={7} xs={4}>
                <div>
                    <Typography variant='h5' color='primary'>
                        <b>Size: </b>{quantity}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                        <b>Price: </b>Ksh. {price}
                    </Typography>
                    <br/>
                    <Typography variant='body1'>
                        {inStock !== 0 ? 'Available' : 'Unavailable'}
                    </Typography>
                </div>
            </Grid>
            <Grid item sm={3} xs={4}>
                <Button size='small' color='primary' variant='outlined' style={{minHeight: '3em'}}
                        onClick={addItemToCart}>
                    Add to Orders
                </Button>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cartItems,
})

const mapDispatchToProps = dispatch => ({
    addToCart: (cartObject) => dispatch(addItemToCart(cartObject))
})

export default connect(mapStateToProps, mapDispatchToProps)(SubProducts)
