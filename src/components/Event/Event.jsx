import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
;
import Button from 'components/CustomButtons/Button.jsx';

import infoStyle from "assets/jss/material-kit-react/components/infoStyle.jsx";

function InfoArea({ ...props }) {
  const { classes, title, description, fbEvent, vertical } = props;
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes.iconWrapperVertical]: vertical
  });
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical
  });
  return (
    <div className={classes.infoArea}>
      <div className={iconWrapper}>
	    {/* TODO: add event pic */}
      </div>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.description}>{description}</p>
		<Button 
		  color="facebook"
		  href={fbEvent}
		  target="_blank"
		  className={classes.navLink}
		  simple
		>
		  <i
            className={" fab fa-facebook-square"}
          />{" "}
          Event
		</Button>
      </div>
    </div>
  );
}

InfoArea.defaultProps = {
};

InfoArea.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fbEvent: PropTypes.string,
  vertical: PropTypes.bool
};

export default withStyles(infoStyle)(InfoArea);
