import React from 'react';

import facebook from '/src/icons/socials/facebook_gradient.svg';
import twitter from '/src/icons/socials/twitter_gradient.svg';
import instagram from '/src/icons/socials/instagram_gradient.svg';

//Socials import
import data from '/src/data/socials.json';

//style import
import style from './socials.module.scss';

const Socials = () => {
  return (
    <div className={style.container}>
      {data.map((social, index) => {
        let icon;
        switch (social.name) {
          case 'facebook':
            icon = facebook;
            break;
          case 'twitter':
            icon = twitter;
            break;
          case 'instagram':
            icon = instagram;
            break;
          default:
            break;
        }
        return (
          <a
            key={index}
            href={social.url}
            target="_blank"
            className={style.link}
          >
            <img src={icon} alt={social.name} className={style.icon} />
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
