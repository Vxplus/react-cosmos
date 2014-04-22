/** @jsx React.DOM */

Cosmos.components.Thumbnail = React.createClass({
  /**
   * Expected input:
   * {
   *   component: "Thumbnail",
   *   name: "The Dark Knight",
   *   image: "http://image.tmdb.org/t/p/w342/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
   *   linkProps: {
   *     component: "Movie",
   *     id: 155
   *   }
   * }
   */
  mixins: [Cosmos.mixins.Url],
  render: function() {
    return (
      <a className="thumbnail"
         href={this.getUrlFromProps(this.props.linkProps)}
         onClick={this.routeLink}>
        <span className="image"
              style={{backgroundImage: 'url(' + this.props.image + ')'}}>
        </span>
        {this.props.name}
      </a>
    );
  }
});
