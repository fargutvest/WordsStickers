import React, { Component } from 'react';
import Stickers from './Stickers/Stickers.js';
import List from './List/List.js';
import GSheet from './GSheet/GSheet.js';
import GDriveAPI from './GDriveAPI/GDriveAPI.js';

class Tabs extends Component {
    openPage(event) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        var elm = document.getElementById(event.currentTarget.name);
        elm.style.display = "block";
        event.currentTarget.className += " active";
      }
    render() {
      return (
<div>

<div className="tab">
<button className="tablink active" name="Stickers" onClick={this.openPage}>Stickers</button>
<button className="tablink" name="List" onClick={this.openPage}>List</button>
<button className="tablink" name="GSheet" onClick={this.openPage}>GSheet</button>
<button className="tablink" name="GDriveAPI" onClick={this.openPage}>GDriveAPI</button>
</div>

<div id="Stickers" className="tabcontent" style= {{display: 'block'}}>
<Stickers passRef = {this.props.passRef} shared_var={this.props.shared_var}/>
</div>

<div id="List" className="tabcontent" style= {{display: 'none'}} >
<List shared_var={this.props.shared_var}/>
</div>

<div id="GSheet" className="tabcontent" style= {{display: 'none'}} >
<GSheet/>
</div>

<div id="GDriveAPI" className="tabcontent" style= {{display: 'none'}} >
<GDriveAPI/>
</div>

</div>);
    }
  }

export default Tabs;