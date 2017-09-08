import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

var socket = io();

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
 }

 KeyDown(event){
   if(event.keyCode == 13){
     console.log(event.target.value);
     socket.emit('search', event.target.value);
   }
 }

  render() {
    return(
      <div className="wrap-form">
          <input type="text" id="m" autocomplete="off" onChange={this.handleChange} onKeyDown={this.KeyDown} />
      </div>
    );
  }
}

class Nav extends React.Component {
  render() {
    return(
      <nav>
        <ul>
          <li class="external">
            <a href="https://twitter.com" target="_blank">Twitter<i class="fa fa-external-link" aria-hidden="true"></i></a>
          </li>
          <li class="external">
            <a href="http://twittrend.jp/" target="_blank">Twittrend<i class="fa fa-external-link" aria-hidden="true"></i></a>
          </li>
        </ul>
      </nav>
    );
  }
}

class Bar extends React.Component {
  render() {
    return(
      <p id="bar">
        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="22px">
        <defs>
        <filter id="Filter_0">
        <feFlood flood-color="rgb(187, 187, 187)" flood-opacity="1" result="floodOut" />
        <feComposite operator="atop" in="floodOut" in2="SourceGraphic" result="compOut" />
        <feBlend mode="normal" in="compOut" in2="SourceGraphic" />
        </filter>
        </defs>
        <g fill="#fff">
        <path fill-rule="evenodd" fill="rgb(193, 255, 235)" d="M-0.000,2.000 L-0.000,-0.000 L30.000,-0.000 L30.000,2.000 L-0.000,2.000 Z" fill="#fff" />
        <path fill-rule="evenodd" fill="rgb(193, 255, 235)" d="M-0.000,12.000 L-0.000,10.000 L30.000,10.000 L30.000,12.000 L-0.000,12.000 Z" fill="#fff" />
        <path fill-rule="evenodd" fill="rgb(193, 255, 235)" d="M-0.000,22.000 L-0.000,20.000 L30.000,20.000 L30.000,22.000 L-0.000,22.000 Z" fill="#fff" />
        </g>
        </svg>
      </p>
    );
  }
}

class Header extends React.Component {
  render() {
    return(
      <div>
        <Bar />
        <Nav />
        <Form />
      </div>
    );
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

/* base html

<header>
  <p id="bar">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="22px">
    <defs>
    <filter id="Filter_0">
    <feFlood flood-color="rgb(187, 187, 187)" flood-opacity="1" result="floodOut" />
    <feComposite operator="atop" in="floodOut" in2="SourceGraphic" result="compOut" />
    <feBlend mode="normal" in="compOut" in2="SourceGraphic" />
    </filter>
    </defs>
    <g filter="url(#Filter_0)">
    <path fill-rule="evenodd"  fill="rgb(193, 255, 235)" d="M-0.000,2.000 L-0.000,-0.000 L30.000,-0.000 L30.000,2.000 L-0.000,2.000 Z"/>
    <path fill-rule="evenodd"  fill="rgb(193, 255, 235)" d="M-0.000,12.000 L-0.000,10.000 L30.000,10.000 L30.000,12.000 L-0.000,12.000 Z"/>
    <path fill-rule="evenodd"  fill="rgb(193, 255, 235)" d="M-0.000,22.000 L-0.000,20.000 L30.000,20.000 L30.000,22.000 L-0.000,22.000 Z"/>
    </g>
    </svg>
  </p>
  <nav>
    <ul>
      <li class="external">
        <a href="https://twitter.com" target="_blank">Twitter<i class="fa fa-external-link" aria-hidden="true"></i></a>
      </li>
      <li class="external">
        <a href="http://twittrend.jp/" target="_blank">Twittrend<i class="fa fa-external-link" aria-hidden="true"></i></a>
      </li>
    </ul>
    <div class="other">
      <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="large" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">シェア</a></div>
      <a href="https://twitter.com/share" class="twitter-share-button" data-via="ikeda_ica" data-size="large">Tweet</a>
      <script>
        ! function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0],
            p = /^http:/.test(d.location) ? 'http' : 'https';
          if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.src = p + '://platform.twitter.com/widgets.js';
            fjs.parentNode.insertBefore(js, fjs);
          }
        }(document, 'script', 'twitter-wjs');
      </script>
    </div>
  </nav>

  <div class="wrap-form">
      <input type="text" id="m" autocomplete="off" />
      <!--<button>Send</button>-->
  </div>
</header>

base html end */
