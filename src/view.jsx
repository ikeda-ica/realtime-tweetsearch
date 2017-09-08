import React from 'react';
import ReactDOM from 'react-dom';
import header from './header.jsx'
import footer from './footer.jsx'
import opt from './opt.jsx'
import $ from 'jquery';

var socket = io();

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    }
  }

  componentDidMount() {
    this.setState({text: ['loaded']});
//    socket.emit('search', 'wordpress');
    socket.on('message', (tweet) => {
      console.log(tweet);
        let lists = this.state.tweets;
        lists.push(
          {
            name: tweet.user.name,
            profile_image_url: tweet.user.profile_image_url,
            screen_name: tweet.user.screen_name,
            id_str: tweet.id_str,
            text: tweet.text,
            created_at: tweet.created_at
          }
        );
        if(lists.length > 50){
          lists.shift();
        }
        this.setState({tweets: lists});

        const autoscroll = $('#as').prop('checked');
        if (autoscroll == true) {
          $('#tweet ul').animate({
            scrollTop: $('#tweet ul')[0].scrollHeight
          }, 'fast');
        }
      }
    );
  }

  render(){
    var list = this.state.tweets.map(function(tweet){
      var url = '//twitter.com/' + tweet.screen_name + '/status/' + tweet.id_str;
      return (
        <li>
          <a href={url}>
            <img src={tweet.profile_image_url} className="thumb" />
            <span className="inner">{tweet.text}<br />{tweet.created_at}</span>
          </a>
        </li>
      );
    });

    return(
    <ul>
      {list}
    </ul>
    );
  }
}

ReactDOM.render(
  <Tweet />,
  document.getElementById('tweet')
);
