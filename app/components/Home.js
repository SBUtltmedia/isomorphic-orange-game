import React, { PropTypes } from 'react/addons';
import StyleSheet from 'react-style';

const styles = StyleSheet.create({
    page: {
        margin: 'auto',
        textAlign: 'center',
        fontSize: 14
    },
    section: {
        marginBottom: 20
    },
    error: {
        color: "#F00"
    }
});

export default class Home {
    addFave() {

    }

    render() {
        return <div styles={[styles.page]}>
            <h1>Locations</h1>
            { this.props.locations.map((location, i) => {
                var faveButton = (
                    <button onClick={this.addFave} data-id={location.id}>
                        Favorite
                    </button>
                );
                return <p key={i}>
                    {location.name} {location.has_favorite ? '<3' : faveButton}
                </p>;
            })}
            <h1>Favorites</h1>
            <p>Not implemented</p>
        </div>;
    }
}