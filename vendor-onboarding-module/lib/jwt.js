import jwt from 'jsonwebtoken';

export const generateToken = (vendorId) => {
  return jwt.sign({ id: vendorId }, process.env.JWT_SECRET, { expiresIn: '1d' });
};
