import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Container, Grid, Typography, CardActionArea, CardMedia, CardContent, Card} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import backgroundImg from '../../assets/background.jpg'
import {getCategories} from "../../api"
import Content from "../content/Content"

const useStyles = makeStyles({
    card: {
        height: '35vh'
    },
    cardImage: {
        width: '100%',
        height: '190px',
    },
    backgroundImage: {
        width: '100%',
        height: '90px',
        objectFit: 'cover'
    },
    spinnerDiv: {
        textAlign: 'center',
        margin: 50
    },
    errorTxt: {
        color: 'red',
        fontSize: '16px'
    },
    cardHeight: {
        height: 140,
        marginBottom: 10
    },
    cardMedia: {
        height: 90,
    }
})

function Home({fetchCategories, categoryData: {loading, categories, error}}) {
    const classes = useStyles()
    const [catId, setCatId] = useState('')
    const [catName, setCatName] = useState('')

    useEffect(() => {
        fetchCategories()
    }, [fetchCategories])

    const categoryClick = (id, name) => {
        setCatId(id)
        setCatName(name)
    }

    return (
        <div style={{width: '100%'}}>
            <img src={backgroundImg} alt="background" className={classes.backgroundImage}/>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={3} sm={2}>
                        <Typography style={{textAlign: 'center', padding: 10}} variant='h6'
                                    color='textPrimary'>
                            Categories
                        </Typography>
                        <div style={{width: '100%'}}>
                            {loading ? (
                                <p>Loading...</p>
                            ) : (
                                error ? (
                                    <p style={{color: 'red'}}>{error}</p>
                                ) : (
                                    <div style={{textAlign: 'center'}}>
                                        {categories && (
                                            categories.map(cat => (
                                                <Card className={classes.cardHeight} variant='outlined' key={cat.id}
                                                      onClick={() => categoryClick(cat.id, cat.name)}>
                                                    <CardActionArea>
                                                        <CardMedia className={classes.cardMedia} image={cat.image}
                                                                   alt={cat.name}/>
                                                        <CardContent>
                                                            <Typography variant='body2'
                                                                        color='textPrimary'>{cat.name}</Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            ))
                                        )}
                                    </div>
                                )
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={9} sm={10}>
                        <Content catId={catId} catName={catName}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

const mapStateToProps = state => ({
    categoryData: state.categoryData,
    allProductData: state.allProductData
})

const mapActionsToProps = dispatch => ({
    fetchCategories: () => dispatch(getCategories()),
})

export default connect(mapStateToProps, mapActionsToProps)(Home)
