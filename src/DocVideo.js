import React, { Component } from 'react';

export class DocVideo extends Component {
  render () {
    const link = this.props.link;
    if(link.includes('youtube')) {
      var embed = link.replace('watch?v=', 'embed/');
      return <iframe title={link} width="560" height="315" src={embed} frameborder="0" allow="autoplay; encrypted-media" allowFullScreen={true}></iframe>
    } /*else if (link.includes('ted.com')) {
      var embed = link.replace('wwww', 'embed');
      var embed2 = embed.replace('/transcript', '');
      return (

            <iframe src={embed} width="854" height="480" frameborder="0"  allowfullscreen={true}></iframe>

      )
    }*/ else if (link.includes('vimeo' )) {
      embed = link.replace ('vimeo.com','player.vimeo.com/video');
      return <iframe src={embed} title={link} width="640" height="356" frameborder="0" webkitallowfullscreen mozAllowFullScreen="true" allowFullScreen="true"></iframe>

    } else {
      return <a href= {link} >Video</a>;
    }

  }
}
