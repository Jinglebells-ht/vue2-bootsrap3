/*
 * Copyright (c) 2018. Bowen Huang.
 */
// import $ from 'jquery';

var element = React.createElement(
    'h1',
    null,
    'Hello, h'
);
const element0 = (
    <a href="message-task.html" class="btn btn-info" title="新消息">
        <b>30 </b>
        <i class="fa fa-envelope-o fa-2x"></i>
    </a>
);
// const element0 = <h1>Hello woowo</h1>;
// var d = $("#root");
// var dd = document.getElementById("root");
//var dd = document.getElementsByClassName("header-right").item(0);
var dd = $(".header-right:first").element;
// var ddd=document.getElementsByClassName()
ReactDOM.render(
    element0,
    dd
);

// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, hby!</h1>
//             <h2>
//                 It is{' '}
//                 {new Date().toLocaleTimeString()}.
//             </h2>
//             <a href="message-task.html" class="btn btn-info" title="新消息"><b>30 </b><i class="fa fa-envelope-o fa-2x"></i></a>
//         </div>
//     );
//     // highlight-range{1-4}
//     ReactDOM.render(
//         element,
//         document.getElementById('root')
//     );
// }
//
// setInterval(tick, 1000);


// alert(dd.innerText);
// alert(d.val());
