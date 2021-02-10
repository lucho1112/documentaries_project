import React from 'react';

type Props = { link: string };

export const DocVideo = (props: Props): JSX.Element => {
    const { link } = props;
    let embed;
    if (link.includes('youtube')) {
        embed = link.replace('watch?v=', 'embed/');
        return (
            <iframe
                title={link}
                width="560"
                height="315"
                src={embed}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen={true}
            />
        );
    } /*else if (link.includes('ted.com')) {
      var embed = link.replace('wwww', 'embed');
      var embed2 = embed.replace('/transcript', '');
      return (

            <iframe src={embed} width="854" height="480" frameborder="0"  allowfullscreen={true}></iframe>

      )
    }*/ else if (
        link.includes('vimeo')
    ) {
        embed = link.replace('vimeo.com', 'player.vimeo.com/video');
        return <iframe src={embed} title={link} width="640" height="356" frameBorder="0" allowFullScreen />;
    } else {
        return <a href={link}>Video</a>;
    }
};
