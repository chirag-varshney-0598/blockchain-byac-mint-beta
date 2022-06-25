import React from 'react'
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
const useStyles = makeStyles((theme) => ({
  headingBox: {
    textAlign: 'center',
    '& h2': {
      fontWeight: '900',
    },
    '& h3': {
      fontWeight: '600',
      marginTop: '20px',
    },
  },
  parentBox: {
    padding: '20px 0px',
    minHeight: '600px',
    color: '#fff',
  },
  heading: {
    color: '#fff',
    fontSize: '22px',
    fontWeight: '600',
    letterSpacing: '1px',
  },
  detailsAccordian: {
    color: '#fff',
    fontSize: '18px',
    fontWeight: '400',
    letterSpacing: '1px',
  },
  accordianBox: {
    marginTop: '20px',
  },
}))
const accordianDataFAQ = [
  {
    heading: 'WHEN IS THE OFFICIAL LAUNCH?',
    details: `As we mainly focus on delivering the best possible product we don’t stress for a fixed date,however end of May.`,
  },
  {
    heading: 'WHAT WILL THE MINT COST BE?',
    details: `The cost structure will be as following:

    Minting will start at a discounted price
    of 1.5 movr for first 1800, then 2.5 movr
    from 1801-3800, 3.5 movr from 3801-5800
    and 4.5 movr from 5801-7777 
    
    Note that 5% of all minting costs will
    be redistributed to the holders and fortune
    those who mint early as cost rise.
    `,
  },
  {
    heading: 'HOW MANY TRAITS ARE THERE?',
    details: `Each MBAYC is unique they have
    algorithmically been generated from over
    140+ possible traits spread over? layers,
    this includes 4 different rarity categories:
    Common, rare, super rare & legendary.`,
  },
  {
    heading: 'HOW DO I CHECK RANKINGS?',
    details: `You can check out our rarity on:
    https://raritysniper.com`,
  },
  {
    heading: 'MARKETPLACE?',
    details: `We will be listed on Moonbeans Marketplace.`,
  },
  {
    heading: 'HOW CAN I STAY UP TO DATE?',
    details: `To stay up to date follow Our twitter
    @Moonriverbayc or to hear things as they
    happen join our discord.`,
  },
]
export default function FAQ() {
  const classes = useStyles()
  return (
    <Box className={classes.parentBox}>
      <Container>
        <Box>
          <Box className={classes.headingBox}>
            <Typography variant="h2">
              <i>FAQ</i>
            </Typography>
          </Box>
          <Box className={classes.accordianBox}>
            {accordianDataFAQ &&
              accordianDataFAQ.map((data, index) => {
                return (
                  <Accordion>
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon style={{ color: '#00ffff' }} />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        <i>{data?.heading}</i>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className={classes.detailsAccordian}>
                        <i>{data.details}</i>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                )
              })}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
