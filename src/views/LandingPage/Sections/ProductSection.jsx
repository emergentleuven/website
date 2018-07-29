import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Mic from "@material-ui/icons/Mic";
import GroupWork from "@material-ui/icons/GroupWork";
import Accessibility from "@material-ui/icons/Accessibility";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Our approach</h2>
            <h5 className={classes.description}>
			  A good solution cannot exist without a thorough understanding of the problem. 
			  We are convinced that the best way to gather insight into a specific situation is by collecting and processing unbiased data that contains the indicators that explain its roots. 
			  Therefore, we encourage you to learn about the tools that help you with gaining these insights.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Lectures"
                description="Practically, we organise lectures that provide a broad introduction into topics like privacy, gene editing, blockchain, medical engineering, artificial intelligence and more. We always use the same recipe, inviting speakers that take on the same issue viewed from a different perspective. This way we try to highlight both the technical aspects as well as the economical, social and ethical consequences of a certain topic/technology."
                icon={Mic}
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Workshops"
                description="The lecture series gives you the basic understanding that you can put into
practice during our workshops. 
Our workshops give you hands-on experience with technologies that are essential to handle the complex issues you will be faced with in the future. Past workshops have mainly resolved around data analysis and visualisation, with workshop on Excel, R, Tableau, forecasting, and other tools that allow you to gain insights in your data."
                icon={GroupWork}
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="#D4GC"
                description="With our lectures and workshops, you are fully prepared to take on a real case during our largest event of the year, the Data 4 Good Challenge. You register with one partner and are matched with two other bright young students that complement your background. Together, you are tasked with solving a humanitarian business case through the use of data analysis and visualization. In a truly Emergent fashion, you will have to think through all aspects of your solution, considering not only the economical effects but also the social and ethical consequences of your business plan.  Since the challenge is two-fold – produce insights, then pitch those as a solid business case – an interdisciplinary collaboration is the sure way to tackle the challenge succesfully."
                icon={Accessibility}
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
