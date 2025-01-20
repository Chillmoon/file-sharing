import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OAuth2Client } from 'google-auth-library';
import { User } from '../schemas/user.schema';

@Injectable()
export class AuthService {
  private client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async googleLogin(token: string): Promise<User> {
    try {
      const ticket = await this.client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();
      if (!payload) {
        throw new Error('Invalid token');
      }

      const googleUser = {
        googleId: payload.sub,
        email: payload.email,
        name: payload.name,
      };

      return this.findOrCreateUser(googleUser);
    } catch (error) {
      console.error('Google authentication error:', error);
      throw new Error('Google authentication failed');
    }
  }

  async findOrCreateUser(googleUser: {
    googleId: string;
    email: string;
    name: string;
  }): Promise<User> {
    try {
      const existingUser = await this.userModel
        .findOne({ googleId: googleUser.googleId })
        .exec();

      if (existingUser) {
        return existingUser;
      }

      const newUser = new this.userModel(googleUser);
      return newUser.save();
    } catch (error) {
      console.error('Error finding or creating user:', error);
      throw new Error('Error creating or finding user');
    }
  }
}
