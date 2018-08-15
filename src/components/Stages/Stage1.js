import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchRaces, fetchRace } from 'state/actions'

import { BuildLeft, BuildRight } from 'components/Build'

class Stage1 extends Component {
    
    componentDidMount() {
        this.props.actions.fetchRaces();
    }

    render() {
        return (
            <div>
                <BuildLeft
                    description={this.props.alignmentDescription}
                    descriptionTwo={this.props.ageDescription}
                    race={this.props.race}
                    />
                {
<<<<<<< HEAD
                    !this.props.allRaces ? null :
                    <BuildRight selection={true} location="/stage2" list={this.props.allRaces} click={this.props.actions.fetchRace}/>
=======
                    this.props.allRaces ? 
                    <BuildRight selection={this.props.race} location="/stage2" list={this.props.allRaces} click={this.props.actions.fetchRace}/>
                    : null
>>>>>>> added previous button
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        allRaces: state.data.allRaces,
        race: state.character.race,
        alignmentDescription: state.character.alignmentDescription,
        ageDescription: state.character.ageDescription
    }
}

const mapDisptachToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                fetchRaces,
                fetchRace
            },
            dispatch
        )
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(Stage1);