import React, {Fragment, useState} from 'react'
import {connect} from 'react-redux'
import {Button, Dialog, DialogContent, IconButton, Grid, Typography, Slide} from "@material-ui/core"
import {KeyboardBackspace} from "@material-ui/icons"
import {makeStyles} from "@material-ui/core/styles"
import {getSubProducts} from "../../api"
import SubProducts from "./SubProducts"

const useStyles = makeStyles({
    productImage: {
        maxWidth: 130,
        height: 130,
        width: 130,
        borderRadius: '50%',
        objectFit: 'cover'
    }
})

const SlideTransition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />
})

function ProductDialog(
    {
        product: {id, image, name, description}, fetchSubProducts,
        subProductData: {loading, error, subProducts}
    }) {
    const classes = useStyles()
    const [dialogOpen, setDialogOpen] = useState(false)

    const handleItemClick = id => {
        setDialogOpen(true)
        fetchSubProducts(id)
    }

    const handleClose = () => {
        setDialogOpen(false)
    }

    return (
        <>
            <Button size='small' color='secondary' variant='outlined' onClick={() => handleItemClick(id)}>
                View Details
            </Button>
            <Dialog open={dialogOpen} fullWidth maxWidth='sm' TransitionComponent={SlideTransition}
                    onClose={handleClose}>
                <IconButton onClick={() => setDialogOpen(false)}>
                    <KeyboardBackspace/>
                </IconButton>
                <DialogContent>
                    <Grid container style={{padding: 0}}>
                        <Grid item sm={3} xs={12}>
                            <img src={image} alt={name} className={classes.productImage}/>
                        </Grid>
                        <Grid item sm={9}>
                            <Typography variant='h5'>{name}</Typography>
                            <hr/>
                            <Typography variant='body2'>{description}</Typography>
                        </Grid>
                    </Grid>
                    <hr/>
                    <Grid container style={{margin: 8}}>
                        {subProducts && (
                            subProducts.map((subProduct, i) =>
                                <Fragment key={i}>
                                    <SubProducts subProduct={subProduct} prodName={name} prodImage={image}/>
                                    {i !== subProducts.length - 1 && (
                                        <hr style={{width: '100%'}}/>
                                    )}
                                </Fragment>
                            )
                        )}
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    )
}

const mapStateToProps = state => ({
    subProductData: state.subProductData
})

const mapActionsToProps = dispatch => ({
    fetchSubProducts: (prodId) => dispatch(getSubProducts(prodId))
})

export default connect(mapStateToProps, mapActionsToProps)(ProductDialog)
