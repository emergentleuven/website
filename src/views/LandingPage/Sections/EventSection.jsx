import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Event from "components/Event/Event.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class EventSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('https://www.hubler.io/api/v1/event/org/22')
      .then(response => response.json())
      .then(data => {
        this.setState({events: data, isLoading: false});
        console.log('Fetched events from Hubler API');
      });
  }

  render() {
    const {classes} = this.props;

    if (this.state.isLoading) {
      return (
        <div className={classes.section}>
          <p style={{color: '#000'}}>Loading...</p>
        </div>
      )
    }

    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Events</h2>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            {
              this.state.events.map(event => (
                <GridItem xs={12} sm={12} md={6} key={event.eventId}>
                  <Event
                    title={event.title}
                    id={event.eventId}
                    description={event.description.replace(/<(?:.|\n)*?>/gm, '').substr(0, 200) + '...'}
                    dateString={event.startTime}
                    fbEvent={event.facebookLink}
                    vertical
                  />
                </GridItem>
              ))
            }
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(EventSection);


