import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

const payload = {
  userId: 'Kieran Allen',
  otherData: 'some other shit',
};

const options = {
  expiresIn: '1h',
};

export const jwtCreate = () => {
  const token = jwt.sign(payload, JWT_SECRET ?? '', options);

  console.log('JWT Token:', token);
};
