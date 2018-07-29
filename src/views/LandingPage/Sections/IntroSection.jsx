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

class IntroSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h5 className={classes.description}>
			  <b>EMERGENT Leuven</b> is a student organisation devoted to preparing you for this complex future. 
			  <br/>
			  Our mission is to help you get a firm grasp on complexity. 
			  Through our activities, we equip you with the skills necessary to get a holistic view of a given situation and navigate it towards a shared goal. 
			  We feel strongly that the only way this is possible is by collaborating with people that complement eachother’s background and know-how. 
			  We carry our values throughout all of our events which we view as an interdisciplinary playground for a complex future.
            </h5>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(IntroSection);

