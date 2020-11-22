import styled from 'styled-components/native';

import SignInDashboardImage from '~/assets/signInDashboard.jpg';
import AdminSignInImage from '~/assets/adminSignIn.jpg';
import ResidentSignIn from '~/assets/residentSignIn.jpg';

import ResidentImage from '~/assets/residentBackground.jpg';
import AppointmentImage from '~/assets/appointmentBackground.jpg';
import GuardImage from '~/assets/guardBackground.jpg';

const defaultImage = {
  SignInDashboardImage,
  AdminSignInImage,
  ResidentSignIn,
  ResidentImage,
  AppointmentImage,
  GuardImage,
};

export default styled.ImageBackground.attrs((props) => ({
  source: defaultImage[props.backgroundName],
}))`
  flex: 1;
`;
