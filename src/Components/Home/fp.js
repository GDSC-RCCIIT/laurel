import React from 'react';



export const Login = () => {

    const background = {
        position: "absolute",
        width: "930px",
        height: "955px",
        left: "975px",
        top: "0px",
        background: "url(.png)",
       
        filter: "drop-shadow(0px 4px 4px rgba(255, 255, 255, 0.24))",
        bottom:"1000px"
    }

    const Email = {
        position: "absolute",
        width: "107px",
        height: "32px",
        left: "160px",
        top: "350px",
        fontFamily: "Roboto Slab",
        fontStyle: "normal",
        fontWeight: " bold",
        fontSize: "24px",
        lineHeight: "32px",
        color: "#000000"
    };



    const boxofemail = {
        position: "absolute",
        width: " 510px",
        height: "60px",
        left: "155px",
        top: "400px",
        background: " #F9F9F9",
        border: "3px solid #434242",
        boxSizing: "borderBox",
        borderRadius: " 50px",
    };

    

    const changepassword= {

        position: "absolute",
        width: "510px",
        height: "52px",
        left: " 155px",
        top: "500px",
        colour: "white",
        background: "#1C1818",
        borderRadius: "50px",
    };

    const changepasswordtext = {
        position: "absolute",
        width: "419px",
        height: "35px",
        left: "195px",
        top: "509px",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "30px",
        lineHeight: "35px",
        color: "#FFFFFF",
        mixBlendMode: "hard-light",
        textAlign: "center"
    }

    const login = {
        position: "absolute",
        width: "100px",
        height: "28px",
        left: "180px",
        top: "570px",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "24px",
        lineHeight: " 28px",
        color: "#929292",
    };

    const signup = {
        position: "absolute",
        width: " 101px",
        height: "28px",
        left: "545px",
        top: "570px",
        fontFamily: " Roboto",
        fontStyle: "normal",
        fontWeight: " 500",
        fontSize: " 24px",
        lineHeight: "28px",
        color: "#929292",
    }

    const Logogdsc = {
        position: "absolute",
        width: "600px",
        height: "80px",
        left: "110px",
        top: "220px",
        background: "url(.jpg)"
    };

    const logobiglaurel = {
        position: "absolute",
        width: "434px",
        height: "338px",
        left: "760px",
        top: "270px",
        background: "url(.jpg)",
        borderRadius: "0px",

    };

    const Ellipse1 = {
        position: "absolute",
        width: "606px",
        height: "606px",
        left: "1125px",
        top: "135px",
        display: "block",
        borderRadius: "550px",
        background: "#5E5ADF"
    }

    const Ellipse2 = {
        position: "absolute",
        width: "495px",
        height: "495px",
        left: "1181px",
        top: "190px",
        borderRadius: "550px",
        background: "#FDFDFF",
    }

    const dotts = {
        position: "absolute",
        width: "453px",
        height: "264px",
        right:"0px",
        left: "1202px",
        display:"block", 
        top: "386px",
        borderRadius: "100%",
        background: "url(.jpg)",
        lineheight: "600px",
        objectFit: "cover"
    }

    const logogdscbig = {
        position: "absolute",
        width: "223px",
        height: "215px",
        left: "1305px",
        top: "291px",
        borderRadius: "100%",
        background: "url(.png)"
    }

    return (

        <>
            <div>
                <img style={background} src="/images/right background.jpg" alt="" />
            </div>

            <div>
                <img style={logobiglaurel} src="/images/logo big.jpg" alt="" />

            </div>

            <div>
                <img style={Logogdsc} src="/images/GDSC RCCIIT Logo.jpg" alt="" />
            </div>

            <div class="form-container">
                <form action="/action_page.php">

                    <ul>
                        <label style={Email} for="fname">
                            <b>
                                Email Id:
                            </b>
                        </label>
                    </ul>

                    <ul>
                        <input style={boxofemail} type="email" id="email id" name="email id" placeholder="" />
                    </ul>

                    <ul>
                        <button style={changepassword} className="click">
                        </button>
                        <b style={changepasswordtext} className="click">Change Password
                        </b>
                    </ul>

                    <ul>
                        <div style={login}>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Login-></a>
                                </li>
                            </ul>
                        </div>
                    </ul>

                    <ul>
                        <div style={signup}>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Sign up-></a>
                                </li>
                            </ul>
                        </div>
                    </ul>

                    <div>
                        <img style={Ellipse1} src="/images/Ellipse 1.jpg" alt="" />
                    </div>
                    <div>
                        <img style={Ellipse2} src="/images/Ellipse 2.jpg" alt="" />
                    </div>
                    <div >
                        <img style={dotts} src="/images/2YmpRxA-removebg-preview 1.jpg" alt="" />
                    </div>
                    <div>
                        <img style={logogdscbig} src="/images/GDSC-RCCIIT_Logo-BG-removed-short 2.jpg" alt="" />
                    </div>
                </form >
            </div>
        </>
    )
}
