import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import CardMedia from "@material-ui/core/CardMedia";
import { Modal } from "antd";
import "antd/dist/antd.css";

export default class List extends Component {
    constructor(props) {
		super(props);
		this.state = {
			recipe: [],
			visible: false,
			show: false,
		};
	}
	
	handleModal = (results) => {
		this.setState({
			visible: true,
			name: results.name,
			steps: results.steps,
		});
	};
	
	componentDidMount() {
		axios({
			method: "get",
			url: "http://localhost:3000/data",
			headers: {
				accept: "*/*",
			},
		})
		.then((data) => {
			console.log(data.data);
			this.setState({
				recipe: data.data,
			});
		})
		.catch((error) => {
			console.log(error);
		});
	}
	
	render() {
		return (
			<div style={{ backgroundColor: "#282c34" }}>
				<AppBar style={{ padding: "10px", marginBottom: "100px", backgroundColor:"#0f2e6e" }}>
					<Typography style={{ margin: "auto", color: "#ededed", fontWeight: "bold" }}>RECIPES LIST</Typography>
				</AppBar>
                <br/><br/><br/>
				<Grid container
                    md={6}
                    spacing={4}
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                    direction="column"
                    justifyContent="center"
                    alignItems="strech"
                >
					<Modal
						title="How to make"
						centered
						visible={this.state.visible}
						onOk={() => this.setState({ visible: false })}
						onCancel={() => this.setState({ visible: false })}
						width={500}
					>
						<div style={{ textAlign: "center" }}>
							<p style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Segoe UI' }}>{this.state.name}</p>
							<p style={{ fontSize: 15, fontFamily: 'Segoe UI' }}>Steps:  {this.state.steps}</p>
						</div>
					</Modal>

					{this.state.recipe.map((results, index) => {
						return (
							<Grid item key={results.name}>
								<Card>
									<CardActionArea className="button" onClick={() => this.handleModal(results)}>										
										<CardContent style={{ backgroundColor: "#1d4699", textAlign: "center", color: "#ededed" }} >
                                            <div style={{ display:"flex", justifyContent:"center"}}>
                                                <CardMedia
                                                    style={{
                                                        margin: "1px",
                                                        padding: "auto",
                                                        borderRadius: "8px",
                                                        height: "80px",
                                                        width: "80px"
                                                    }}
                                                    component="img"
                                                    image={results.image}
                                                />
                                            </div>
											<Typography style={{ fontWeight: "bold" }}>
												<br/>{results.name}
											</Typography>
											<Typography>
												Ingredients : {results.ingredients}
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid>
						);
					})}
				</Grid>                
                <br/><br/><br/><br/>
			</div>
            
		)
	}
}