import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Timeline from "@material-ui/icons/Timeline";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Event from "components/Event/Event.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class EventSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>'17-'18 Events</h2>
	      </GridItem>
		</GridContainer>
		<div>
		  <GridContainer>
			 <GridItem xs={12} sm={12} md={6}>
			   <Event
				 title="Forecasting Workshop"
				 description="Predict sales data using Excel, Italian style (there was pizza)."
				 fbEvent="https://www.facebook.com/events/155967271771970/"
				 vertical
			   />
			 </GridItem>
			 <GridItem xs={12} sm={12} md={6}>
			   <Event
				 title="AND& Volunteer Warmup"
				 description="A social gathering of AND& volunteers and representatives of all kinds of local Leuven organisations."
				 fbEvent="https://www.facebook.com/events/1371423479630095/" 
				 vertical
			   />
			 </GridItem>
			 <GridItem xs={12} sm={12} md={6}>
			   <Event
				 title="D4GC 2017"
				 description="Business game meets hackathon in the Data 4 Good challenge. The global refugee crisis was this year's humanitarian topic."
				 fbEvent="https://www.facebook.com/events/241628509696915/"
				 vertical
			   />
			 </GridItem>
			 <GridItem xs={12} sm={12} md={6}>
			   <Event
				 title="Social Analytics Challenge"
				 description="Use IBM Watson analytics to analyze social media trends. Discuss the power of companies like Cambridge Analytica (before the scandal)."
				 fbEvent="https://www.facebook.com/events/1928195570754649/"
				 vertical
			   />
			 </GridItem>
        </GridContainer>
		</div>
      </div>
    );
  }
}

export default withStyles(productStyle)(EventSection);


