import React, {Component} from 'react';
import {connect} from 'react-redux';
import LocationTableRow from "./LocationTableRow/LocationTableRow";
import addNewLocationsAction from "../../Redux/actions/add-new-location-action";
import addLocationPageAction from "../../Redux/actions/add-location-page-action";
import classes from './location.module.css';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import FormFilterNameLocation from "./FormFilterNameLocation/FormFilterNameLocation";
import FormFilterTypeLocation from "./FormFilterTypeLocation/FormFilterTypeLocation";
import FormFilterDimensionLocation from "./FormFilterDimensionLocation/FormFilterDimensionLocation";
import Pagination from "@material-ui/lab/Pagination";

class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowsPerPage: 20,
            currentPage: 1,
            countPages: 1
        }
    }
    componentDidMount() {
        fetch(`https://rickandmortyapi.com/api/location?page=${2}`)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                this.props.addNewLocationsAction(data.results);
                this.setState({countPages: Math.ceil(data.info.count/this.state.rowsPerPage)})
            })
    }
    handleOnChangePage(e) {
        this.props.addLocationPageAction(+e.target.innerText);
        fetch(`https://rickandmortyapi.com/api/location?page=${+e.target.innerText}`)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                this.props.addNewLocationsAction(data.results);
                this.setState({countPages: Math.ceil(data.info.count/this.state.rowsPerPage)})
            })

    }
    render() {
        return (
            <div className={classes.locationContent}>
                <div className={classes.locationTable} >
                    <Table className={classes.row} weight="bold" size="medium" aria-label="a dense table">
                        <TableHead>

                                <TableCell align="center" className={classes.headRowLocation}>
                                    <FormFilterNameLocation/>
                                </TableCell>
                                <TableCell align="center" className={classes.headRowLocation}>
                                    <FormFilterTypeLocation/>
                                </TableCell>
                                <TableCell align="center" className={classes.headRowLocation}>
                                    <FormFilterDimensionLocation/>
                                </TableCell>

                        </TableHead>
                        <TableBody>
                            {this.props.newLocations.filter(item => item.name.toLowerCase().includes(this.props.locationName.toLowerCase())).filter(
                                item => item.type.toLowerCase().includes(this.props.locationType.toLowerCase())).filter(
                                item => item.dimension.toLowerCase().includes(this.props.locationDimension.toLowerCase())).map(item => {
                                return (
                                    <LocationTableRow id={item.id}
                                                      name={item.name}
                                                      type={item.type}
                                                      dimension={item.dimension}
                                    />
                                )
                            })}
                        </TableBody>
                    </Table>
                </div>
                <div className={classes.characterPage}>
                    <Pagination count={this.state.countPages} size="small" color="secondary"
                                onClick={(e)=>this.handleOnChangePage(e)}/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        newLocations: state.addNewLocationReducer,
        locationName: state.addLocationNameReducer,
        locationType: state.addLocationTypeReducer,
        locationDimension: state.addLocationDimensionReducer,
        locationPage: state.addLocationPageReducer
    }
}
export default connect(mapStateToProps, {addNewLocationsAction, addLocationPageAction})(Location);