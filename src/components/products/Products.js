import React from 'react'
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import ProductDialog from "./ProductDialog"

const useStyles = makeStyles({
    card: {
        height: 250
    },
    prodImage: {
        height: 150,
        width: '100%',
    }
})

function Products({product}) {
    const classes = useStyles()
    return (
        <Card className={classes.card} variant='outlined'>
            <CardActionArea>
                <CardMedia className={classes.prodImage} image={product.image} alt={product.name}/>
                <CardContent>
                    <Typography variant='body2' color='textSecondary'>{product.name}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <ProductDialog product={product}/>
            </CardActions>
        </Card>
    )
}

export default Products
