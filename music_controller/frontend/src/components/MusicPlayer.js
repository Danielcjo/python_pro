import React, {Component} from "react";
import {Grid, Typography, Card, IconButton, LinearProgress} from "@mui/material";
import {PlayArrowIcon, SkipNextIcon, PauseIcon} from "@mui/icons";
import withNavigation from "./withNavigation";

class MusicPlayer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const sonProgress = (this.props.time / this.props.duration) * 100;
        return (
        <Card>
            <Grid container alignItems="center">
                <Grid item align="center" xs={4}>
                    <img src={this.props.image_url} height="100%" width="100%" />
                </Grid>
                <Grid item align="center" xs={8}>
                    <Typography component="h5" variant="h5">
                        {this.props.title}
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle1">
                        {this.props.artist}
                    </Typography>
                    <div>
                        <IconButton>
                            {this.props.is_playing ? <PauseIcon /> : <PlayArrowIcon />}
                        </IconButton>
                        <IconButton>
                            <SkipNextIcon />
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
            <LinearProgress variant="determinant" value={sonProgress} />
        </Card>
        )
    }
}

export default withNavigation(MusicPlayer)