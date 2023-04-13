import jwt from 'jsonwebtoken';
import { ENV } from '~utils';

const payload = {
  userId: 'Kieran Allen',
  otherData: 'some other shit',
};

const options = {
  expiresIn: '1h',
};

export const jwtCreate = () => {
  const token = jwt.sign(payload, ENV.JWT_SECRET, options);

  console.log('JWT Token:', token);
};
