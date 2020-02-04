var navi = '<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-white">\
                <a class="navbar-brand" href="#"></a>\
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">\
                    <span class="navbar-toggler-icon"></span>\
                </button>\
                <div class="collapse navbar-collapse" id="navbarNav">\
                    <ul class="navbar-nav mr-auto">\
                        <li class="nav-item mx-3 my-2 topnav">\
                            <a class="nav-link" href="index.html">Hjem<span class="sr-only">(current)</span></a>\
                        </li>\
                        <li class="nav-item mx-3 my-2 topnav">\
                            <a class="nav-link" href="about.html">Om</a>\
                        </li>\
                        <li class="nav-item mx-3 my-2 topnav">\
                            <a class="nav-link" href="whatiskin.html">Hvad er Kinesiologi?</a>\
                        </li>\
                        <li class="nav-item mx-3 my-2 topnav">\
                            <a class="nav-link" href="whattoexpect.html">Hvad kan man forvente?</a>\
                        </li>\
                        <li class="nav-item mx-3 my-2 topnav">\
                            <a class="nav-link" href="price.html">Priser og Kontakt</a>\
                        </li>\
                    </ul>\
                    <ul class="navbar-nav">\
                        <li class="nav-item">\
                            <a class="kinesio-icon" href="#"><img class="kinesio-icon" src="img/kinesioicon.svg"></a>\
                        </li>\
                    </ul>\
                </div>\
            </nav>';

document.getElementById('nav-placeholder').innerHTML = navi;

//navbar active status

var lines = document.getElementsByClassName('topnav');

for (var i=0; i < lines.length; i++)
{
    var href = lines[i].firstElementChild.getAttribute('href');
    var url = window.location.pathname;
    var urlMatch = url.substring(1);

    if(href == urlMatch)
    {
        lines[i].classList.add("activ");
    }
}

var foot = '<footer class="footer mt-4">\
                <div class="container">\
                    <div class="row">\
                        <div class="col-md-6 d-flex">\
                            <div class="col-8">\
                                <ul class="list-unstyled">\
                                    <lh>Kinesiologi Vejle</lh>\
                                    <li><a class="text-secondary" href="about.html">Om</a></li>\
                                    <li><a class="text-secondary" href="whatiskin.html">Hvad er Kinesiologi?</a></li>\
                                    <li><a class="text-secondary" href="whattoexpect.html">Hvad kan man forvente?</a></li>\
                                    <li><a class="text-secondary" href="price.html">Priser og Kontakt</a></li>\
                                </ul>\
                            </div>\
                        </div>\
                        <div class="col-md-5 border-left ml-3" id="contact-border">\
                            <h5 class="text-md-left">Contact</h5>\
                            <div class="row">\
                                <div class="col-8 my-auto">\
                                    <ul class="contact list-unstyled">\
                                        <li>Email: janniekierkegaard@hotmail.com</li>\
                                        <li>Phone: +45 31 12 46 11</li>\
                                    </ul>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </footer>';
            
document.getElementById('footer-placeholder').innerHTML = foot;
