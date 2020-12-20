import styled from 'styled-components/native';

import SignInDashboardImage from '~/assets/signInDashboard.jpg';
import AdminSignInImage from '~/assets/adminSignIn.jpg';
import ResidentSignIn from '~/assets/residentSignIn.jpg';

import ResidentImage from '~/assets/residentBackground.jpg';
import AppointmentImage from '~/assets/appointmentBackground.jpg';
import GuardImage from '~/assets/guardBackground.jpg';
import ProfileBackground from '~/assets/profileBackground.jpg';
import AddResidentBackground from '~/assets/addResidentBackground.jpg';

const defaultImage = {
  SignInDashboardImage,
  AdminSignInImage,
  ResidentSignIn,
  ResidentImage,
  AppointmentImage,
  GuardImage,
  ProfileBackground,
  AddResidentBackground,
};

export default styled.ImageBackground.attrs((props) => ({
  source: defaultImage[props.backgroundName],
}))`
  flex: 1;
`;
