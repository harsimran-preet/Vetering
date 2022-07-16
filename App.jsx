import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X11ReqeuestPosted from "./components/X11ReqeuestPosted";
import X02SignIn from "./components/X02SignIn";
import X10NewPost from "./components/X10NewPost";
import X03SignUpPage from "./components/X03SignUpPage";
import X06SignUpOffender from "./components/X06SignUpOffender";
import X07OTP from "./components/X07OTP";
import X01Welcome from "./components/X01Welcome";
import X08VerificationComplete from "./components/X08VerificationComplete";
import X13Profile from "./components/X13Profile";
import X09Home from "./components/X09Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/11-reqeuest-posted">
          <X11ReqeuestPosted title="Request Posted!" login="Home" />
        </Route>
        <Route path="/02-sign-in">
          <X02SignIn {...x02SignInData} />
        </Route>
        <Route path="/10-new-post">
          <X10NewPost {...x10NewPostData} />
        </Route>
        <Route path="/03-sign-up-page">
          <X03SignUpPage {...x03SignUpPageData} />
        </Route>
        <Route path="/06-sign-up-offender">
          <X06SignUpOffender
            signUp="Sign up"
            ourRecordsShowTha="Our records show that you are a registered sex offender and can therefore not use our platform"
            login="Go Back"
          />
        </Route>
        <Route path="/07-otp">
          <X07OTP
            size="/img/size@2x.png"
            otpCode="OTP Code"
            enterOtpHere="Enter OTP here"
            otpHasBeenSentYourMobileNumber="OTP has been sent your mobile number"
            login1="Resend OTP"
            login2="Verify OTP"
          />
        </Route>
        <Route path="/:path(|01-welcome)">
          <X01Welcome
            login1="I’m a Veteran"
            login2="I’m a Volunteer"
            ourGoalIsToConne={
              <React.Fragment>
                Our goal is to connect veterans to volunteers and return service
                to those who deserve it.
                <br />
                <br />
                Click below to get started!
              </React.Fragment>
            }
            vetering="VETERING"
            group2Props={x01WelcomeData.group2Props}
          />
        </Route>
        <Route path="/08-verification-complete">
          <X08VerificationComplete
            numberVerifiedSeccessfully={
              <React.Fragment>
                Number Verified
                <br />
                seccessfully
              </React.Fragment>
            }
            login="Home"
          />
        </Route>
        <Route path="/13-profile">
          <X13Profile {...x13ProfileData} />
        </Route>
        <Route path="/09-home">
          <X09Home {...x09HomeData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const x02SignInData = {
  signIn: "Sign in",
  x39908191: "/img/3990819-1@2x.png",
  place: "Welcome",
  phoneNotch: "/img/phone-notch@3x.png",
  inputType1: "number",
  inputPlaceholder1: "Mobile Number",
  inputType2: "password",
  inputPlaceholder2: "Password",
  group7992: "/img/group-7992@1x.png",
  login: "Create an Account",
};

const group2Data = {
  className: "group-1",
};

const x10NewPostData = {
  newPost: "New Post",
  inputType1: "text",
  inputPlaceholder1: "Job Type:",
  inputType2: "text",
  inputPlaceholder2: "Description:",
  inputType3: "text",
  inputPlaceholder3: "Location:",
  cancel: "CANCEL",
  confirm: "CONFIRM",
  groupProps: group2Data,
};

const signUpInfoData = {
  inputType1: "text",
  inputPlaceholder1: "First name",
  inputType2: "text",
  inputPlaceholder2: "Last name",
  inputType3: "email",
  inputPlaceholder3: "Email address",
  inputType4: "number",
  inputPlaceholder4: "Mobile number",
};

const group79961Data = {
  inputType: "password",
  inputPlaceholder: "Password",
};

const group79962Data = {
  inputType: "text",
  inputPlaceholder: "Confirm Password",
  className: "group-5",
};

const barsHomeIndicatorIPhoneLightPortrai2Data = {
  className: "bars-home-indicator-1",
};

const x03SignUpPageData = {
  size: "/img/size@2x.png",
  signUp: "Sign Up",
  gender: "Gender",
  inputType: "number",
  inputPlaceholder: "Social Security Number (SSN)",
  login: "Sign Up",
  spanText1: "Already an user?",
  spanText2: " ",
  spanText3: "Sign In",
  signIn: "Sign In",
  signUpInfoProps: signUpInfoData,
  group79961Props: group79961Data,
  group79962Props: group79962Data,
  barsHomeIndicatorIPhoneLightPortraiProps:
    barsHomeIndicatorIPhoneLightPortrai2Data,
};

const group23Data = {
  className: "group-7",
};

const x01WelcomeData = {
  group2Props: group23Data,
};

const group4Data = {
  className: "group-3",
};

const x13ProfileData = {
  profile: "Profile",
  jensonCarr: "Jenson Carr",
  place: "Veteran",
  login1: "View Upcoming Requests",
  login2: "View Past Requests",
  iconHome: "/img/house-128-4@2x.png",
  iconPlus: "/img/plus-2-512-4@2x.png",
  iconUser: "/img/image-14@2x.png",
  groupProps: group4Data,
};

const group5Data = {
  className: "group-4",
};

const x09HomeData = {
  place: "Home",
  login1: "My Inbox",
  login2: "Request Services",
  vetering15: "/img/vetering--1--5@2x.png",
  iconHome: "/img/house-128-4@2x.png",
  iconPlus: "/img/plus-2-512-4@2x.png",
  iconUser: "/img/image-14@2x.png",
  groupProps: group5Data,
};
