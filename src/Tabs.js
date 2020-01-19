import React, { Component } from 'react';
import Stickers from './Stickers.js';
import List from './List.js';

class Tabs extends Component {
    openPage(event) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].style.backgroundColor = "";
        }
        var elm = document.getElementById(event.currentTarget.name);
        elm.style.display = "block";
        elm.style.backgroundColor = "";
      }
    render() {
      return (
<div>

<button className="tablink" name="Stickers" onClick={this.openPage}>Stickers</button>
<button className="tablink" name="List" onClick={this.openPage}>List</button>
<div id="Stickers" className="tabcontent">
<Stickers  shared_var={this.props.shared_var}/>
</div>
<div id="List" className="tabcontent" style= {{display: 'none'}} >
<List shared_var={this.props.shared_var}/>
</div>
</div>);
    }
  }

export default Tabs;