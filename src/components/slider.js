import React from "react"
import Carousel from "react-material-ui-carousel"
import autoBind from "auto-bind"
import styled from "styled-components"
import tugOfWar from "../images/tugOfWar.jpg"
import kidInLibrary from "../images/kidInLibrary.jpg"
import teachingAClass from "../images/teachingAClass.jpg"

import { Card, CardMedia, Typography, Grid } from "@material-ui/core"

function Banner(props) {
  const totalItems = 1
  const mediaLength = totalItems

  let items = []

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Item[i]

    const media = (
      <Grid item xs={12 / totalItems} key={item.Name}>
        <CardMedia className="Media" image={item.Image} title={item.Name}>
          <Typography className="MediaCaption">{item.Name}</Typography>
        </CardMedia>
      </Grid>
    )

    items.push(media)
  }

  return (
    <Card raised className="Banner">
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Card>
  )
}

const items = [
  {
    Item: [
      {
        Name: "Working Hard",
        Image: teachingAClass,
      },
    ],
  },
  {
    Item: [
      {
        Name: "Reading a Good Book",
        Image: kidInLibrary,
      },
    ],
  },
  {
    Item: [
      {
        Name: "Teamwork",
        Image: tugOfWar,
      },
    ],
  },
]

class Slider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      autoPlay: true,
      timer: 500,
      animation: "fade",
      indicators: true,
      timeout: 500,
      navButtonsAlwaysVisible: false,
    }

    autoBind(this)
  }

  render() {
    return (
      <div style={{ marginTop: "1rem", color: "#494949", width: "100%" }}>
        <h2 style={{ marginLeft: "1rem" }}>Our Soaring Eagles</h2>
        <SliderStyleWrapper>
          <Carousel
            autoPlay={this.state.autoPlay}
            timer={this.state.timer}
            animation={this.state.animation}
            indicators={this.state.indicators}
            timeout={this.state.timeout}
            navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
          >
            {items.map((item, index) => {
              return <Banner item={item} key={index} />
            })}
          </Carousel>
        </SliderStyleWrapper>
      </div>
    )
  }
}

export default Slider

const SliderStyleWrapper = styled.div`
  .Banner {
    height: 80vh;
    position: relative;

    .Media {
      background-color: white;
      height: 100%;
      overflow: hidden;

      position: relative;

      .MediaCaption {
        text-overflow: ellipsis;

        position: absolute;
        bottom: 0;

        padding: 1.2rem;

        background-color: black;
        color: white;
        opacity: 0.6;

        width: 100%;
        height: 10%;

        font: {
          size: 1.6rem;
          weight: 200;
        }

        transition: 300ms;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      }

      transition: 300ms;
      cursor: pointer;
      &:hover {
        filter: brightness(115%);
      }
    }

    .BannerGrid {
      height: 100%;
    }

    .Content {
      color: white;
      background-color: rgb(119, 24, 24);
      height: 100%;

      cursor: pointer;

      padding: 1.875rem;

      transition: 300ms;

      &:hover,
      &:active {
        background-color: rgb(87, 17, 17);

        .ViewButton {
          background-color: rgb(241, 241, 241);
          color: rgb(119, 24, 24);
        }
      }

      .Title {
        font-size: 2.5rem;
        font-weight: 500;
      }

      .Caption {
        margin-top: 0.625rem;
        font-size: 1.3125rem;
      }

      .ViewButton {
        margin-top: 2.5rem;
        color: white;

        font-size: 1.5625rem;
        border: 0.1875rem solid white;
        text-transform: capitalize;

        transition: 200ms;
      }
    }
  }
`
