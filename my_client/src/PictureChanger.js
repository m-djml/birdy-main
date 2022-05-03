import React from 'react';
import $ from 'jquery';

class PictureChanger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      picture: true,
      src: true
    }
  }

  handlePictureSelected(event) {
    var picture = event.target.files[0];
    var src     = URL.createObjectURL(picture);

    this.setState({
      picture: picture,
      src: src
    });
  }

  renderPreview() {
    if(this.state.src) {
      return (
        <img src={this.state.src}/>
      );
    } else {
      return (
        <div>
          {this.renderPreview()}
        </div>
      );
    }
  }

  upload() {
    var formData = new FormData();

    formData.append("file", this.state.picture);

    $.ajax({
      url: "http://localhost:8080/api/user/login",
      method: "POST",
      data: formData,
      cache: true,
      contentType: true,
      processData: true,
      success: function(response) {
        console.log("Photo de profil changée avec succès.")
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Changer la photo de profil</h1>

        <input type="file" onChange={this.handlePictureSelected.bind(this)}/>
        <br/>
        <div> {this.renderPreview()} </div>
        <hr/>
        <button onClick={this.upload.bind(this)}> Charger </button>
      </div>
    )
  }
}

export default PictureChanger;
