import React from 'react';

const Navbar = () => {
  return (
    <div className="position-relative iq-banner">
      <nav className="nav navbar navbar-expand-lg navbar-light iq-navbar">
        <div className="container-fluid navbar-inner">
          <a href="#" className="navbar-brand">
            <div className="logo-main">
              <div className="logo-normal">
                {/* <img src={require('../../imagenes/igla.svg').default} alt="logo" height="35" /> */}
              </div>
              <div className="logo-mini">
                {/* <img src={require('../../imagenes/igla.svg').default} alt="logo" height="35" /> */}
              </div>
            </div>
            <h4 className="logo-title">IGLA</h4>
          </a>
          <div className="sidebar-toggle" data-toggle="sidebar" data-active="true">
            <i className="icon">
              <svg width="20px" className="icon-20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
              </svg>
            </i>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
              <span className="mt-2 navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="mb-2 navbar-nav ms-auto align-items-center navbar-list mb-lg-0">
                    <li className="nav-item dropdown">
                        <a href="#"  className="nav-link" id="notification-drop" data-bs-toggle="dropdown" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M15.137 3.945c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6z"/>
                        </svg>
                        <span className="bg-danger dots"></span>
                        </a>
                        <div className="p-0 sub-drop dropdown-menu dropdown-menu-end" aria-labelledby="notification-drop">
                            <div className="m-0 shadow-none card">
                            <div className="py-3 card-header d-flex justify-content-between bg-primary">
                                <div className="header-title">
                                    <h5 className="mb-0 text-white">Todas las Notificaciones</h5>
                                </div>
                            </div>
                            <div className="p-0 card-body">
                                <a href="#" className="iq-sub-card">
                                    <div className="d-flex align-items-center">
                                        {/*<img className="p-1 avatar-40 rounded-pill bg-soft-primary" src="../../assets/images/shapes/01.png" alt="">*/}
                                        <div className="ms-3 w-100">
                                        <h6 className="mb-0 ">Emma Watson Bni</h6>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p className="mb-0">95 MB</p>
                                            <small className="float-end font-size-12">Just Now</small>
                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="#" className="nav-link" id="mail-drop" data-bs-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M0 3v18h24v-18h-24zm22 16l-6.526-6.618-3.445 3.483-3.418-3.525-6.611 6.66 5.051-8-5.051-6 10.029 7.446 9.971-7.446-4.998 6.01 4.998 7.99z"/>
                        </svg>
                        <span className="bg-primary count-mail"></span>
                        </a>
                        <div className="p-0 sub-drop dropdown-menu dropdown-menu-end" aria-labelledby="mail-drop">
                            <div className="m-0 shadow-none card">
                            <div className="py-3 card-header d-flex justify-content-between bg-primary">
                                <div className="header-title">
                                    <h5 className="mb-0 text-white">Todos los Mensajes</h5>
                                </div>
                            </div>
                            <div className="p-0 card-body ">
                                <a href="#" className="iq-sub-card">
                                    <div className="d-flex align-items-center">
                                        <div className="">
                                        {/*<img className="p-1 avatar-40 rounded-pill bg-soft-primary" src="../../assets/images/shapes/01.png" alt="">*/}
                                        </div>
                                        <div className="ms-3">
                                        <h6 className="mb-0 ">Bni Emma Watson</h6>
                                        <small className="float-start font-size-12">13 Jun</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="py-0 nav-link d-flex align-items-center" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {/*<img src="{{ asset('imagenes/user.jpg')}}" alt="User-Profile" className="theme-color-default-img img-fluid avatar avatar-50 avatar-rounded">**/}
                        <div className="caption ms-3 d-none d-md-block ">
                            <h6 className="mb-0 caption-title">Isaac</h6>
                                <p className="mb-0 caption-sub-title">Admin</p>
                        </div>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li>
                            <a className="dropdown-item" href="{{ route('users.profile') }}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"/>
                            </svg>
                            Ver Perfil
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M15.137 3.945c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6z"/>
                            </svg>
                            Notificaciones
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="{{ route('admin.ajustes') }}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M24 14v-4c-1.619 0-2.906.267-3.705-1.476-.697-1.663.604-2.596 1.604-3.596l-2.829-2.828c-1.033 1.033-1.908 2.307-3.666 1.575-1.674-.686-1.404-2.334-1.404-3.675h-4c0 1.312.278 2.985-1.404 3.675-1.761.733-2.646-.553-3.667-1.574l-2.829 2.828c1.033 1.033 2.308 1.909 1.575 3.667-.348.849-1.176 1.404-2.094 1.404h-1.581v4c1.471 0 2.973-.281 3.704 1.475.698 1.661-.604 2.596-1.604 3.596l2.829 2.829c1-1 1.943-2.282 3.667-1.575 1.673.687 1.404 2.332 1.404 3.675h4c0-1.244-.276-2.967 1.475-3.704 1.645-.692 2.586.595 3.596 1.604l2.828-2.829c-1-1-2.301-1.933-1.604-3.595l.03-.072c.687-1.673 2.332-1.404 3.675-1.404zm-12 2c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/>
                            </svg>
                            Ajustes
                            </a>
                        </li>
                        {/*<li><hr className="dropdown-divider"></li>*/}
                        <li>
                            <a className="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                            document.getElementById('logout-form').submit();">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M8 10v-5l8 7-8 7v-5h-8v-4h8zm2-8v2h12v16h-12v2h14v-20h-14z"/>
                            </svg>
                            Salir
                            </a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                            @csrf
                            </form>
                        </li>
                        </ul>
                    </li>
                    </ul>
                </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
