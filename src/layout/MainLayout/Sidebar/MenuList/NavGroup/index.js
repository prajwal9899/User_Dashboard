import PropTypes from "prop-types";
import React from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import { List, Typography } from "@mui/material";

// project import
import NavItem from "../NavItem";
import NavCollapse from "../NavCollapse";
import { useSelector } from "react-redux";
import moment from "moment";

// ==============================|| NAVGROUP ||============================== //

const NavGroup = ({ item }) => {
  const { user } = useSelector((state) => state.user);
  const theme = useTheme();
  const items = item.children.map((menu) => {
    switch (menu.type) {
      case "collapse":
        return <NavCollapse key={menu.id} menu={menu} level={1} />;
      case "item":
        return <NavItem key={menu.id} item={menu} level={1} />;
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  console.log(user);

  return (
    <>
      <List
        subheader={
          <Typography
            variant="caption"
            sx={{ ...theme.typography.menuCaption }}
            display="block"
            gutterBottom
          >
            {item.title}
            {item.caption && (
              <Typography
                variant="caption"
                sx={{ ...theme.typography.subMenuCaption }}
                display="block"
                gutterBottom
              >
                {item.caption}
              </Typography>
            )}
          </Typography>
        }
      >
        {items}
      </List>
      <div className="subscription_details">
        <div className="registration">
          <p>Registration No : {user?.registrationNo}</p>
        </div>
        <div className="plan">
          <p>Your Plan : {user?.subscriptionType}</p>
        </div>
        <div className="subscription">
          <p>
            Plan expires In :{" "}
            {moment(user?.subscriptionDate).diff(moment(), "days") < 0
              ? "Expired"
              : `${moment(user?.subscriptionDate).diff(moment(), "days")} days`}
          </p>
        </div>
      </div>
    </>
  );
};

NavGroup.propTypes = {
  item: PropTypes.object,
  children: PropTypes.object,
  title: PropTypes.string,
  caption: PropTypes.string,
};

export default NavGroup;
