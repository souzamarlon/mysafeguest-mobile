import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';

import RNIap, { requestSubscription } from 'react-native-iap';

import Icon from 'react-native-vector-icons/MaterialIcons';

// import {
//   CreditCardInput,
//   LiteCreditCardInput,
// } from 'react-native-credit-card-input';

import { useDispatch } from 'react-redux';

import {
  Container,
  PurchaseButton,
  LogoutButton,
  HeadTitle,
  Content,
  ContentText,
  SubscriptionsButton,
  Info,
  Price,
} from './styles';
import Background from '~/components/Background';

import { signUpRequest, signOut } from '~/store/modules/auth/actions';

const itemSubs = Platform.select({
  ios: [
    'com.cooni.point1000',
    'com.cooni.point5000', // dooboolab
  ],
  android: [
    'test.sub1', // subscription
  ],
});

export default function Subscription({ route }) {
  const [cardValue, setCardValue] = useState({});
  const [productList, setProductList] = useState([]);

  const dispatch = useDispatch();

  if (route.params) {
    const {
      name,
      email,
      password,
      street,
      number,
      city,
      state,
      postal_code,
    } = route.params;
  }

  useEffect(() => {
    async function initSubscription() {
      try {
        const result = await RNIap.initConnection();
        await RNIap.flushFailedPurchasesCachedAsPendingAndroid();
        console.log('result', result);
      } catch (err) {
        console.warn(err.code, err.message);
      }
    }

    initSubscription();
  }, []);

  // async function handleSubmit() {
  //   dispatch(
  //     signUpRequest(
  //       name,
  //       email,
  //       password,
  //       street,
  //       number,
  //       city,
  //       state,
  //       postal_code
  //     )
  //   );
  // }

  const getSubscriptions = async () => {
    try {
      console.log(itemSubs);
      const products = await RNIap.getSubscriptions(itemSubs);
      console.log('Products', products);
      setProductList(products);
    } catch (err) {
      console.warn(err.code, err.message);
    }
  };

  const requestSubscription = async (sku) => {
    try {
      RNIap.requestSubscription(sku);
    } catch (err) {
      console.log(err.message);
    }
  };

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Background backgroundName="subsBackground">
      <Container>
        {/* <PurchaseButton onPress={getSubscriptions}>Buy</PurchaseButton>
        <View>{productList}</View>

        <PurchaseButton onPress={() => requestSubscription('1')}>
          requestSubscription
        </PurchaseButton> */}
        <LogoutButton>
          <Icon
            name="exit-to-app"
            size={25}
            // style={{ position: 'absolute', right: 0 }}
            color="#E74040"
            onPress={handleLogout}
          />
        </LogoutButton>

        <HeadTitle>My Safe Guest Subscription</HeadTitle>
        <Content>
          <ContentText>- Unlimited residents accounts.</ContentText>
          <ContentText>- Unlimited appointments.</ContentText>
          <ContentText>
            - Manage your residents and view their appointments.
          </ContentText>
        </Content>
        <Info>Automatic renovation, cancel anytime.</Info>
        <Price>Price: $10,00 / MONTH.</Price>
        <SubscriptionsButton fontSize={19}>Subscribe</SubscriptionsButton>
      </Container>
    </Background>
  );
}
