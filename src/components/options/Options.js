import React, {useState} from 'react'
import {
    Button, Grid, Card, CardActionArea, CardContent, CardMedia, FormControl, InputLabel, MenuItem, Select, Typography
} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import takeAwayImg from '../../assets/take-away.jpg'
import dineInImg from '../../assets/dine-in.jpg'
import {Link} from "react-router-dom"

const options = [
    {
        name: 'Dine In',
        image: dineInImg
    },
    {
        name: 'Take Away',
        image: takeAwayImg
    }
]

const useStyles = makeStyles({
    card: {
        height: '35vh',
        width: '100%',
        padding: 0
    },
    cardImage: {
        width: '100%',
        height: '190px',
    },
    formControl: {
        minWidth: '95%',
        marginLeft: 0,
        marginTop: 20
    },
    button: {
        width: '90%',
        marginLeft: 0,
        marginTop: 20,
        borderColor: 'primary'
    }
})

function Options() {
    const classes = useStyles()
    const [dineIn, setDineIn] = useState('')
    const [takeAway, setTakeAway] = useState('')
    const [tableNo, setTableNo] = useState('')

    const handleClick = (option) => {
        if (option === 'Dine In') {
            setDineIn('dine-in')
            setTakeAway('')
        } else {
            setTakeAway('take-away')
            setDineIn('')
            setTableNo('')
        }
    }

    const handleTableChange = event => {
        setTableNo(event.target.value)
    }

    const renderButton = (option) => (
        <Button className={classes.button} variant='outlined' color='primary' component={Link}
                to={`/home/${option}`}>
            Proceed
        </Button>
    )

    const renderSelectTable = dineIn !== '' && (
        <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel>Choose a Table</InputLabel>
            <Select name="table-no" value={tableNo} onChange={handleTableChange} label="Choose a Table">
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    )

    return (
        <Grid container>
            <Grid item sm={3}/>
            <Grid item xs={12} sm={6}>
                <div style={{textAlign: 'center', padding: 20}}>
                    <h1 style={{marginTop: '100px', marginBottom: '20px'}}>Food Ordering</h1>
                    <Grid container spacing={2}>
                        {options.map((option, index) => (
                            <Grid item xs={6} key={index}>
                                <Button className={classes.card} variant='outlined' component={Card}
                                        onClick={() => handleClick(option.name)}>
                                    <CardActionArea>
                                        <CardMedia className={classes.cardImage} image={option.image}/>
                                        <CardContent>
                                            <Typography variant='h6' color='textPrimary'>{option.name}</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                    {renderSelectTable}
                    <div>
                        {dineIn && tableNo && renderButton('dine-in')}
                        {takeAway && renderButton('take-away')}
                    </div>
                </div>
            </Grid>
            <Grid item sm={3}/>
        </Grid>
    )
}

export default Options
