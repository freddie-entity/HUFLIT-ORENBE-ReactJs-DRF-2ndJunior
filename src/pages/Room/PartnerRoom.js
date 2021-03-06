import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import SquareFootIcon from "@material-ui/icons/SquareFoot";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import { Col, Image, Row } from "antd";
import { Link } from "react-router-dom";

const baseURL = process.env.REACT_APP_BACKEND_API;

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    minWidth: "95%",
    minHeight: "95%",
    margin: "1% 1% 1% 1%",
  },
  book: {
    maxWidth: "95%",
    minHeight: "95%",
    margin: "1% 1% 1% 1%",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    textAlign: "left",
  },
  cover: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "cover",
    display: "flex",
    alignItems: "center",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function PartnerRoom({ room }) {
  const classes = useStyles();
  return (
    <Row span={24}>
      <Col span={12}>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent>
              <Paper className={classes.cover}>
                <Image src={`${baseURL}${room.main_photo}`} />
              </Paper>
            </CardContent>
          </div>
        </Card>
      </Col>
      <Col span={12}>
        <Card className={classes.book}>
          <Link to={`/rooms/${room.slug}`} style={{ color: "black" }}>
            <CardContent className={classes.content}>
              <Typography>{room.name}</Typography>
              <div className={classes.flex}>
                <Typography color="textSecondary">
                  <SquareFootIcon />
                  {room.square}
                </Typography>
                <Typography color="textSecondary">
                  <SupervisorAccountIcon />
                  {room.guest_quantity}
                </Typography>
              </div>
              <Typography>
                <h4>${room.base_price_per_night}</h4>
              </Typography>
            </CardContent>
          </Link>
        </Card>
      </Col>
    </Row>
  );
}
